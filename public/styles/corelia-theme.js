export const coreliaThemeStyles = new CSSStyleSheet();
coreliaThemeStyles.replaceSync(`


    :host,
    :root {
        --primary-color: #dc1136;
        --secondary-color: #4e6c93;
        
    }

    :root,
    [data-theme=light],
    :root:not([data-theme=dark]),
    :host:not([data-theme=dark])  {
        /* Define Coralia theme colors for Pico CSS */
        --pico-text-selection-color: #400C;
        --pico-primary: var(--primary-color);
        --pico-primary-background: var(--primary-color);
        --pico-primary-underline: rgba(189, 60, 19, 0.5);
        --pico-primary-hover: #942d0d;
        --pico-primary-hover-background: #bd3c13;
        --pico-primary-focus: rgba(244, 93, 44, 0.5);
        --pico-primary-inverse: #fff;


        --pico-secondary: var(--secondary-color);
        --pico-font-family: "Jost", Arial, sans-serif;
    }

    @media only screen and (prefers-color-scheme: dark) {
        :root:not([data-theme]),
        :host:not([data-theme]) {
          --pico-text-selection-color: rgba(245, 107, 61, 0.1875);
          --pico-primary: var(--primary-color);
        --pico-primary-background: var(--primary-color);
          --pico-primary-underline: rgba(245, 107, 61, 0.5);
          --pico-primary-hover: #f8a283;
          --pico-primary-hover-background: #e74b1a;
          --pico-primary-focus: rgba(245, 107, 61, 0.375);
          --pico-primary-inverse: #fff;
        }
      }
      
    [data-theme=dark] {
        --pico-text-selection-color: rgba(245, 107, 61, 0.1875);
        --pico-primary: var(--primary-color);
        --pico-primary-background: var(--primary-color);
        --pico-primary-underline: rgba(245, 107, 61, 0.5);
        --pico-primary-hover: #f8a283;
        --pico-primary-hover-background: #e74b1a;
        --pico-primary-focus: rgba(245, 107, 61, 0.375);
        --pico-primary-inverse: #fff;
    }

    [role=button], [type=button], [type=file]::file-selector-button, [type=reset], [type=submit], button {
        
    }
    
    
`);