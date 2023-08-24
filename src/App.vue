<template>
    <div>
        <NavBar />
        <router-view />
    </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";

export default {
    name: "App",
    components: {
        NavBar,
    },
};
</script>

<style>
#app {
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    line-height: 150%;
}

.txt-light {
    font-weight: 300;
}

.txt-regular {
    font-weight: 400;
}

.txt-medium {
    font-weight: 500;
}

.txt-semi {
    font-weight: 600;
}

.txt-bold {
    font-weight: 700;
}

.txt-black {
    font-weight: 900;
}

.text-sm-1 {
    font-size: 16px;
}

.text-sm-2 {
    font-size: 20px;
}

.text-md {
    font-size: 24px;
}

.text-lg-1 {
    font-size: 40px;
}

.text-lg-2 {
    font-size: 64px;
}

.text-lg-3 {
    font-size: 94px;
}

@media only screen and (max-width: 768px) {
    .text-sm-1 {
        font-size: 12px;
    }

    .text-sm-2 {
        font-size: 16px;
    }

    .text-md {
        font-size: 20px;
    }

    .text-lg-1 {
        font-size: 24px;
    }

    .text-lg-2 {
        font-size: 32px;
    }

    .text-lg-3 {
        font-size: 40px;
    }

    #app {
        line-height: 120%;
    }
}

:root {
    --bs-green: #5c745c;
    --bs-black1: #000;
    --bs-black2: #251f1d;
    --bs-white1: #fff;
    --bs-white2: #f1f2eb;
    --bs-brown: #978061;
    --bs-grey: #aba697;
}

html {
    box-sizing: border-box;
    font-size: 16px;
    overflow-y: auto;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
}

ol,
ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}

a {
    text-decoration: none;
}

a:link,
a:visited,
a:hover,
a:active {
    color: #ffffff;
}
</style>
