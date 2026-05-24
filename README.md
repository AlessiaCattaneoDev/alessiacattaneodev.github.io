# Alessia Cattaneo — Website

Sito personale di Alessia Cattaneo, AI Specialist & Data Scientist.

## Struttura

```
/
├── index.html          # Homepage
├── cv.html             # Curriculum Vitae
├── contattami.html     # Pagina contatti con modulo EmailJS
├── privacy.html        # Privacy & Cookie Policy
├── assets/
│   ├── css/
│   │   └── bundle.css  # CSS compilato (custom, nessuna libreria esterna)
│   └── js/
│       └── email.js    # Invio email tramite EmailJS
└── src/
    └── scss/
        ├── main.scss        # Entry point SCSS
        ├── _variables.scss  # Token di design (colori brand, font, spacing)
        └── _components.scss # Componenti UI e utility classes
```

## Tech stack

- HTML5 semantico
- CSS custom — grid responsiva, utility classes, componenti (nessuna libreria CSS esterna)
- Font: [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) via Google Fonts
- JavaScript: solo [EmailJS](https://www.emailjs.com/) per il modulo di contatto

## CSS

Il file `assets/css/bundle.css` è il CSS del progetto, scritto senza dipendenze esterne. Include:

- **CSS custom properties** — variabili di design per colori, ombre, sfondi
- **Grid system** a 12 colonne, mobile-first (breakpoint: `sm` 576px, `md` 768px, `lg` 992px)
- **Utility classes** — display, flexbox, spacing, text-align
- **Componenti** — navbar, pulsanti, form contatti, card servizi, pagina CV
- **Menu mobile** via CSS checkbox toggle (nessun JS)

Per modificare gli stili, aggiornare i file in `src/scss/` e ricompilare in `assets/css/bundle.css`. Non è presente un build system automatico: usare `sass src/scss/main.scss assets/css/bundle.css` oppure modificare bundle.css direttamente.

## Modulo di contatto

Il modulo in `contattami.html` usa EmailJS. La configurazione si trova in `assets/js/email.js`:

## Menu mobile

Il menu mobile funziona tramite un `<input type="checkbox">` nascosto e il selettore CSS `:checked ~ .mobile-menu`. Non richiede JavaScript.

## Deployment

Sito statico puro — compatibile con GitHub Pages, Netlify, Vercel o qualsiasi hosting di file statici.
