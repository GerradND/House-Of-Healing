<template>
    <nav class="navbar fixed-top navbar-expand-md navbar-dark">
        <div class="container-fluid">
            <a class="d-flex flex-row align-items-center" href="#">
                <img src="../assets/hoh_logo.png" class="brand-logo" />
                <h5 class="brand-title">GBI HOUSE OF HEALING</h5>
            </a>

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
                        <router-link
                            :to="{ path: paths[index] }"
                            class="nav-link text-white"
                        >
                            {{ link }}
                        </router-link>
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
                    <a class="d-flex flex-row align-items-center" href="#">
                        <img src="../assets/hoh_logo.png" class="brand-logo" />
                        <h5 class="brand-title">GBI HOUSE OF HEALING</h5>
                    </a>
                </div>
                <div class="offcanvas-body">
                    <ul>
                        <li
                            v-for="(link, index) in links"
                            @click="activeLink = link"
                            :key="index"
                            :class="{ active: link === activeLink }"
                        >
                            <router-link
                                :to="{
                                    path: paths[index],
                                }"
                                class="nav-link text-white pd-4"
                            >
                                {{ link }}
                            </router-link>
                        </li>
                    </ul>
                    <div id="sidebar-logo">
                        <a href="https://www.instagram.com/gbihoh/"
                            ><img src="../assets/instagram.svg" class="px-3"
                        /></a>
                        <a href="https://wa.me/628881547686"
                            ><img src="../assets/whatsapp.svg" class="px-3"
                        /></a>
                        <a
                            href="https://www.youtube.com/channel/UCMX0cJXWmpAtanlquzeZVPA"
                            ><img src="../assets/youtube.svg" class="px-3"
                        /></a>
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
            paths: ["/", "/about", "/event", "/community", "/faq"],
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
    flex-wrap: initial;
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

.offcanvas-header {
    padding: 12px 16px;
}

.brand-title {
    font-weight: 600;
    color: white;
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
