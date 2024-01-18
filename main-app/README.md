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


When using react-helmet for better positioning meta tags in head the Helmet.js in es folder must be modified following:
# appendChild(tag) -> headElement.insertBefore(tag, thirdChild);
    prepends the element after the 6th child. Unique for every app. just check which child is <title>
# from: 
 oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

# to: 
 oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
   newTags.forEach(function (tag) {
        var thirdChild = headElement.children[6];
        headElement.insertBefore(tag, thirdChild);
    }); 




    

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