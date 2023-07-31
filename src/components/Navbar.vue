<template>
    <nav class="navbar fixed-top navbar-expand-md navbar-dark">
        <div class="container-fluid">
            <div class="d-flex flex-row align-items-center">
                <img src="../assets/hoh_logo.png" class="brand-logo" />
                <h5 class="brand-title">GBI HOUSE OF HEALING</h5>
            </div>

            <button
                class="navbar-toggler custom-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebar"
                aria-controls="sidebar"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="navbar-collapse align-items-center justify-content-center"
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
            <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="sidebar"
                aria-labelledby="sidebarLabel"
            >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title brand-title" id="sidebarTitle">
                        GBI HOUSE OF HEALING
                    </h5>
                </div>
                <div class="offcanvas-body">
                    <ul>
                        <li
                            v-for="(link, index) in links"
                            @click="activeLink = link"
                            :key="index"
                            :class="{ active: link === activeLink }"
                        >
                            <a class="nav-link text-white pd-4" href="#">{{
                                link
                            }}</a>
                        </li>
                    </ul>
                    <div id="sidebar-logo">
                        <img src="../assets/instagram.svg" class="px-3" />
                        <img src="../assets/whatsapp.svg" class="px-3" />
                        <img src="../assets/youtube.svg" class="px-3" />
                    </div>
                </div>
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

.offcanvas {
    background-color: var(--bs-green);
    text-align: left;
}

.offcanvas-start {
    max-width: 75%;
}

.brand-title {
    font-weight: 600;
    color: white;
    word-wrap: break-all;
    padding-left: 12px;
    text-align: left;
}

.brand-logo {
    width: 40px;
    height: 40px;
}

#sidebar-logo {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* mobile zone */
@media only screen and (min-width: 992px) {
    nav {
        padding: 12px 90px;
    }
    .navbar-expand-md .navbar-nav .nav-link {
        padding: 0 24px;
    }
}

@media only screen and (max-width: 992px) {
    nav {
        padding: 12px 40px;
    }
    .navbar-expand-md .navbar-nav .nav-link {
        padding: 0 16px;
    }
}

@media only screen and (max-width: 768px) {
    nav {
        padding: 12px 16px;
    }

    .nav-link {
        line-height: 120%;
        padding: 0 0 32px 0;
    }

    #navbarNav {
        display: none;
    }
}
</style>
