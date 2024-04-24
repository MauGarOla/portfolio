export const LANGUAGES: Record<
	string,
	{ code: string; name: string; }
> = {
	de: {
		code: 'de',
		name: 'Deutsh',
	},
	en: {
		code: 'en',
		name: 'English',
	},
	es: {
		code: 'es',
		name: 'Español',
	},
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.home': 'Inicio',
		'nav.privacy': 'Privacidad',
		'nav.terms': 'Terminos',
	},
	en: {
		'nav.home': 'Home',
		'nav.privacy': 'Privacy',
		'nav.terms': 'Terms',
	},
	de: {
        'nav.home': 'Startseite',
        'nav.privacy': 'Datenschutz',
        'nav.terms': 'Nutzungsbedingungen',
    },
} as const;

export const routes = {
	es: {
		privacy: 'privacidad',
		terms: 'terminos',
	},
	en: {
		privacy: 'privacy',
		terms: 'terms',
	},
	de: {
		privacy: 'datenschutz',
		terms: 'nutzungsbedingungen',
	},
};
