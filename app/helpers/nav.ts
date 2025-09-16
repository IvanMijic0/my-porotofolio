const normalize = (s: string) => s.replace(/\/{2,}/g, "/");

export default { normalize }
