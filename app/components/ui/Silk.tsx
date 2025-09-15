import React, { memo, useEffect, useMemo, useRef, useLayoutEffect, forwardRef } from "react";
import { Canvas, useFrame, useThree, type RootState } from "@react-three/fiber";
import { Color, Mesh, type IUniform } from "three";

type NormalizedRGB = [number, number, number];
const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
	const clean = hex.replace("#", "");
	const r = parseInt(clean.slice(0, 2), 16) / 255;
	const g = parseInt(clean.slice(2, 4), 16) / 255;
	const b = parseInt(clean.slice(4, 6), 16) / 255;
	return [r, g, b];
};

type UniformValue<T = number | Color> = { value: T };
type SilkUniforms = {
	uSpeed: UniformValue<number>;
	uScale: UniformValue<number>;
	uNoiseIntensity: UniformValue<number>;
	uColor: UniformValue<Color>;
	uRotation: UniformValue<number>;
	uTime: UniformValue<number>;
} & Record<string, IUniform>;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2 rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 uv  = rotateUvs(vUv * uScale, uRotation);
  vec2 tex = uv * uScale;
  float tOffset = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
    0.4 * sin(5.0 * (tex.x + tex.y +
                     cos(3.0 * tex.x + 5.0 * tex.y) + 0.02 * tOffset) +
                     sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  gl_FragColor = col;
}
`;

type SilkPlaneProps = { uniforms: React.RefObject<SilkUniforms> };

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(({ uniforms }, forwardedRef) => {
	const localRef = useRef<Mesh | null>(null);
	const { viewport } = useThree();

	const setRef = (node: Mesh | null) => {
		localRef.current = node;
		if (typeof forwardedRef === "function") forwardedRef(node);
		else if (forwardedRef && "current" in forwardedRef) {
			(forwardedRef as unknown as { current: Mesh | null }).current = node;
		}
	};

	useLayoutEffect(() => {
		if (localRef.current) {
			localRef.current.scale.set(viewport.width, viewport.height, 1);
		}
	}, [viewport.width, viewport.height]);

	useFrame((_state: RootState, delta: number) => {
		if (uniforms.current) {
			uniforms.current.uTime.value += 0.1 * delta;
		}
	});

	return (
		<mesh ref={setRef} frustumCulled={false}>
			<planeGeometry args={[1, 1, 1, 1]} />
			<shaderMaterial
				uniforms={uniforms.current as SilkUniforms}
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				depthWrite={false}
				transparent
			/>
		</mesh>
	);
});
SilkPlane.displayName = "SilkPlane";

type SilkProps = {
	speed?: number;
	scale?: number;
	color?: string;
	noiseIntensity?: number;
	rotation?: number;
	backgroundMode?: boolean;
	className?: string;
};

const SilkImpl = ({
	speed = 5,
	scale = 1,
	color = "#7B7481",
	noiseIntensity = 1.5,
	rotation = 0,
	backgroundMode = false,
	className,
}: SilkProps) => {
	const meshRef = useRef<Mesh | null>(null);

	const uniforms = useRef<SilkUniforms>({
		uSpeed: { value: speed },
		uScale: { value: scale },
		uNoiseIntensity: { value: noiseIntensity },
		uColor: { value: new Color(...hexToNormalizedRGB(color)) },
		uRotation: { value: rotation },
		uTime: { value: 0 },
	});

	useEffect(() => { uniforms.current.uSpeed.value = speed; }, [speed]);
	useEffect(() => { uniforms.current.uScale.value = scale; }, [scale]);
	useEffect(() => { uniforms.current.uNoiseIntensity.value = noiseIntensity; }, [noiseIntensity]);
	useEffect(() => { uniforms.current.uRotation.value = rotation; }, [rotation]);
	useEffect(() => {
		const [r, g, b] = hexToNormalizedRGB(color);
		uniforms.current.uColor.value.setRGB(r, g, b);
	}, [color]);

	const containerClass = useMemo(
		() => (backgroundMode ? "pointer-events-none -z-10 absolute inset-0" : "") + (className ? ` ${className}` : ""),
		[backgroundMode, className]
	);

	const glOptions = useMemo(
		() => ({
			antialias: false,
			depth: false,
			stencil: false,
			alpha: true,
			premultipliedAlpha: true,
			powerPreference: "high-performance" as const,
			preserveDrawingBuffer: false,
		}),
		[]
	);

	return (
		<div className={containerClass}>
			<Canvas dpr={[1, 1.5]} frameloop="always" gl={glOptions}>
				<SilkPlane ref={meshRef} uniforms={uniforms} />
			</Canvas>
		</div>
	);
};

const areEqual = (prev: SilkProps, next: SilkProps) =>
	prev.speed === next.speed &&
	prev.scale === next.scale &&
	prev.color === next.color &&
	prev.noiseIntensity === next.noiseIntensity &&
	prev.rotation === next.rotation &&
	prev.backgroundMode === next.backgroundMode &&
	prev.className === next.className;

const Silk = memo(SilkImpl, areEqual);
export default Silk;
