import { useContext } from "react";
import { I18nCtx } from "~/context";

const useTranslate = () => {
	const ctx = useContext(I18nCtx);
	if (!ctx) throw new Error("useTranslate must be used inside <I18nProvider>");
	return ctx;
}

export default useTranslate;
