type Ctx = {
	lang: Lang;
	t: (key: string, fallback?: string) => string;
	makeHref: (path: string) => string;
	setLang: (next: Lang) => void;
};
