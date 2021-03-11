# Tailwind Cards

[![Netlify Status](https://api.netlify.com/api/v1/badges/d9d621c2-bace-4ca0-95e0-3ad4f38318cf/deploy-status)](https://app.netlify.com/sites/tailwind-cards/deploys)

I used the [TailWind CSS Boilerplate](https://github.com/hasinhayder/tailwind-boilerplate) project for this. 

A growing collection of text/image cards you can use/copy-paste in your tailwind css projects. Some of these cards have animated hover effects.

Check The Demo Here - https://tailwind-cards.netlify.app


### start
```sh
git clone this_repository
cd this_directory
yarn
yarn dev
```

### build
```sh
yarn build
```

then grab everything from the dist folder

### change server port
Just change the port number in `vite.config.js` file
```javascript
export default {
    plugins: [],
    server: {
      open: '/index.html',
      port: 3116, //< -change this
    }
}

```

### configure tailwind
There is a `tailwind.config.js` file with `purge` instructions and extra colors, feel free to customize it according to your need
```javascript
const colors = require('tailwindcss/colors')
module.exports = {
  purge:['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        fuchsia:colors.fuchsia,
        cyan:colors.cyan,
        emerald:colors.emerald,
        teal:colors.teal,
        orange:colors.orange,
      },
      maxHeight:{
        116:"29rem", /*464px*/
        125:"31.25rem", /*464px*/
        140:"35rem", /*464px*/
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
```

