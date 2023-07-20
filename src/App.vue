<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
    },
};
</script>

<style>
#app {
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
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
