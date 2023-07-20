<template>
    <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LOGO</a>
            <button
                class="navbar-toggler custom-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse align-items-center justify-content-center"
                id="navbarNav"
            >
                <ul class="navbar-nav">
                    <li
                        v-for="(link, index) in links"
                        @click="activeLink = link"
                        :key="index"
                        :class="{ active: link === activeLink }"
                        class="nav-item"
                    >
                        <a class="nav-link text-white" href="#">{{ link }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            links: ["Home", "About Us", "Event", "Community", "FAQ"],
            activeLink: "Home",
        };
    },
};
</script>

<style scoped>
nav {
    background-color: var(--bs-green);
    padding: 12px 90px;
}

.active {
    font-weight: 600;
}

.container-fluid {
    padding: 0;
}

.navbar-dark .navbar-nav .nav-link {
    line-height: 150%;
}

.custom-toggler.navbar-toggler {
    border: none;
    outline: none;
    box-shadow: none;
}

.custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

/* mobile zone */
@media only screen and (min-width: 992px) {
    nav {
        background-color: var(--bs-green);
        padding: 12px 90px;
    }
    .navbar-expand-md .navbar-nav .nav-link {
        padding: 0 24px;
    }
}

@media only screen and (max-width: 992px) {
    nav {
        background-color: var(--bs-green);
        padding: 12px 40px;
    }
    .navbar-expand-md .navbar-nav .nav-link {
        padding: 0 16px;
    }
}

@media only screen and (max-width: 768px) {
    nav {
        background-color: var(--bs-green);
        padding: 12px 16px;
    }

    .navbar-expand-md .navbar-nav .nav-link {
        line-height: 120%;
        padding: 16px;
    }
}
</style>
