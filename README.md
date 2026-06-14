# Alessia Cattaneo - Website

Sito personale di Alessia Cattaneo, AI Specialist & Data Scientist.

## Struttura

```
/
├── index.html          # Homepage
├── cv.html             # Curriculum Vitae
├── contattami.html     # Pagina contatti con modulo EmailJS
├── privacy.html        # Privacy & Cookie Policy
├── assets/
│   ├── favicon.svg      # Favicon del sito
│   ├── og-image.svg     # Immagine social (Open Graph)
│   ├── css/
│   │   └── bundle.css   # CSS compilato dagli SCSS (stile brand)
│   ├── js/
│   │   └── email.js     # Invio email tramite EmailJS
│   └── scss/
│       ├── main.scss        # Entry point SCSS
│       ├── _variables.scss  # Token di design (colori brand, font, spacing)
│       └── _*.scss          # Reset, tipografia, componenti, sezioni, pagine
```

## Tech stack

- HTML5 semantico
- [Bootstrap 5.3](https://getbootstrap.com/) (build `grid` + `utilities`, via CDN) per griglia responsiva e utility classes
- SCSS custom (compilato con [Dart Sass](https://sass-lang.com/)) per il design system e i componenti brand
- Font: [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) via Google Fonts
- JavaScript: solo [EmailJS](https://www.emailjs.com/) per il modulo di contatto

## CSS

Il layout usa **Bootstrap** (caricato da CDN nelle pagine HTML) per il grid system a 12 colonne e le utility classes (`row`, `col-*`, `d-flex`, `gap-*`, spacing, ecc.). Vengono incluse solo le build `bootstrap-grid` e `bootstrap-utilities`, così da sfruttare il framework senza il Reboot che sovrascriverebbe lo stile brand.

Sopra Bootstrap, lo stile su misura è scritto in SCSS (cartella `assets/scss/`) e compilato in `assets/css/bundle.css`. Include:

- **CSS custom properties** - variabili di design per colori, ombre, sfondi
- **Componenti** - navbar, pulsanti, form contatti, card servizi, pagina CV, privacy
- **Menu mobile** via CSS checkbox toggle (nessun JS)

Per modificare gli stili, aggiornare i file in `assets/scss/` e ricompilare con gli script npm:

```bash
npm run build   # build una tantum (compressa)
npm run dev     # watch in sviluppo (espanso)
```

## Modulo di contatto

Il modulo in `contattami.html` usa EmailJS. La configurazione si trova in `assets/js/email.js`:

## Menu mobile

Il menu mobile funziona tramite un `<input type="checkbox">` nascosto e il selettore CSS `:checked ~ .mobile-menu`. Non richiede JavaScript.

## Deployment

Sito statico puro - compatibile con GitHub Pages, Netlify, Vercel o qualsiasi hosting di file statici.
