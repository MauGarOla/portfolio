import german from './de.json';
import english from './en.json';
import spanish from './es.json';

const LANG = {
	GERMAN: 'de',
	ENGLISH: 'en',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.GERMAN) return {...english, ...german};
	if (currentLocale === LANG.SPANISH) return {...english, ...spanish};
	return english;
};
