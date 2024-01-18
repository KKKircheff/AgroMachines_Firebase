# AgroMachines_Firebase

Company website revuilt with Vite &amp; Firebase

# descriptions 
pnpm create vite main-app --template react-ts
pnpm add react-router-dom localforage match-sorter sort-by
pnpm add sass
pnpm add firebase
pnpm install react-icons

firebase experiments:enable webframeworks /* vscode prompt terminal
firebase init

pnpm add -S aos
pnpm add -S @types/aos@latest
pnpm add -S @types/node@latest

pnpm add -S react-slick
pnpm add -S @types/react-slick@latest
pnpm add -S slick-carousel

pnpm add -S react-countup

pnpm add -S react-device-detect
pnpm add -S react-render-if-visible  
pnpm add -S react-scroll    
pnpm add -S @types/react-scroll@latest --save-dev

pnpm add -S react-photo-album /* nice photo album 

pnpm add -S primereact
pnpm add -S primeicons
pnpm add -S primeflex

pnpm add -D vite-plugin-sitemap
pnpm add -D terser  /* roll up build plug-in

pnpm add @uidotdev/usehooks  /* blocks UI under pop up https://usehooks.com/uselockbodyscroll ### other interesting react hooks there 
pnpm add react-swipeable

firebase init functions

    /* allow npm installation 
    /* in package.json change "build" like below to move index.html to function's folder:
     "scripts": {
        "dev": "vite",
        "build": "tsc && vite build && cp dist/index.html functions/dynamicIndex/index.html && rm dist/index.html",
        "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
    },

    /*in Firebase.json add:
    {
    "rewrites": [
      {
        "source": "**",
        "function": "dynamicIndex"
      }
    ]
} 

When ready update index.ts with the new function:

# go in the functions folder and: 

    firebase logout     /* logout if needed from the current logged account
    firebase login      /* log to ai.reddigit@gmail.com
    npm run lint -- --fix
    npm run build

    /* disable eslint line length if needed:

    add in .eslintrc.js:
     rules: {
            .... other rules
            "max-len": "off",
            },

# deploy the new functions from functions folder:
    firebase deploy --only functions

# deploy project on preview link from main-app folder:

firebase hosting:channel:deploy --expires 10m preview2

# commands no comments
pnpm create vite main-app --template react-ts
pnpm add react-router-dom localforage match-sorter sort-by
pnpm add sass
pnpm add firebase
pnpm install react-icons

firebase experiments:enable webframeworks /* vscode prompt terminal
firebase init

pnpm add -S aos
pnpm add -S @types/aos@latest
pnpm add -S @types/node@latest

pnpm add -S react-slick
pnpm add -S @types/react-slick@latest
pnpm add -S slick-carousel

pnpm add -S react-countup

pnpm add -S react-device-detect
pnpm add -S react-render-if-visible  
pnpm add -S react-scroll
pnpm add -S @types/react-scroll@latest --save-dev

pnpm add -S react-photo-album

pnpm add -S primereact
pnpm add -S primeicons
pnpm add -S primeflex

pnpm add -D vite-plugin-sitemap
pnpm add -D terser

pnpm add @uidotdev/usehooks
pnpm add react-swipeable

pnpm add -S react-helmet
pnpm add -S @types/react-helmet

pnpm add -S react-map-interaction

pnpm add lodash
pnpm add @types/lodash