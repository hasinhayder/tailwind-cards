const colors = require('tailwindcss/colors')
module.exports = {
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Inter', 'system-ui', 'sans-serif'],
            body: ['Inter', 'system-ui', 'sans-serif'],
        },
        extend: {
            colors: {
                fuchsia: colors.fuchsia,
                cyan: colors.cyan,
                emerald: colors.emerald,
                teal: colors.teal,
                orange: colors.orange,
                yellow: colors.yellow,
            },
            maxHeight: {
                116: "29rem",
                /*464px*/
                125: "31.25rem",
                /*500px*/
                140: "35rem",
                /*560px*/
                150: "37.5rem",
                /*600px*/
                190: "47.5rem",
                /*760px*/
            },
            height: {
                116: "29rem",
                /*464px*/
                125: "31.25rem",
                /*500px*/
                140: "35rem",
                /*560px*/
                150: "37.5rem",
                /*600px*/
                200: "50rem",
                /*800px*/
                250: "62.5rem",
                /*800px*/
            },
            minHeight: {
                18: "4.5rem",
                /*72*/
                33: "8.125rem",
                /*132px*/
                62: "15.5rem",
                /*248px*/
                96: "24rem",
                /*384px*/
                150: "37.5rem",
                /*600px*/
            },
            margin: {
                '-100%': '-100%'
            }
        },
    },
    variants: {
        extend: {
            display: ["group-hover"],
            opacity: ["group-hover"],
            translate: ["group-hover"],
            transform: ["group-hover"],
            width: ["group-hover", "hover"],
            height: ["group-hover", "hover"],
            padding: ["group-hover", "hover"],
            animation: ["group-hover", "hover"],
            scale: ["group-hover", "hover"],
        },
    },
    plugins: [],
}