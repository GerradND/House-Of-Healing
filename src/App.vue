<template>
    <NavBar />
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
}

:root {
    --bs-green: #5c745c;
    --bs-black1: #000;
    --bs-black2: #5c745c;
    --bs-white1: #fff;
    --bs-white2: #f1f2eb;
    --bs-brown: #978061;
    --bs-grey: #aba697;
}

html {
    box-sizing: border-box;
    font-size: 16px;
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
</style>
