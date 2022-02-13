module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        'theme-page-background': '#181818',
        'theme-page-background-secondary': '#2a4555',
        'theme-page-text-heading': 'rgb(87,115,255)',
        'theme-page-text-normal': '#f9fafa',
        'theme-page-text-normal-hover': 'rgba(249,250,250,0.8)',
        'theme-page-text-light':' #aaa',
        'theme-page-text-paragraph': '#b0b0b0',
        'theme-h1':' #ff0a78',
        'theme-link': '#ff95ca',
        'theme-btn': '#373737',
        'theme-input-background':' #121212',
        'theme-input-border-color': '#303030',
        'theme-input-border-focus-color': '#2a4555',
        'theme-hr-color': '#2a4555',
        'theme-blockquote-bg': '#212121',
        'theme-nav-link':' var(theme-page-text-paragraph)',
        'theme-nav-link-hover': 'var(white)',
       ' theme-code-copy-btn': 'var(theme-page-text-normal)',
        'syntax-highlighter-border-color': '#2a4555',
        'syntax-highlighter-code-selection-color': '#1d3b54',
        'syntax-highlighter-remark-code-title-bg': '#101b2b',
        'syntax-highlighter-remark-code-title-fg': '#fff',
        'syntax-highlighter-code-fg': '#d6e7ff',
        'syntax-highlighter-code-bg': '#030314',
       


      }
    },
  },
  plugins: [],
}