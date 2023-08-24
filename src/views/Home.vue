<template>
    <main>
        <section
            ref="page1"
            class="page-1 text-white d-flex flex-column justify-content-center"
        >
            <div class="container-fluid p-0">
                <div class="pb-5">
                    <h1 class="text-lg-3 txt-primary txt-bold">
                        RENEWING HOPE,<br />
                        RESTORING LIVE!
                    </h1>
                    <h2 class="text-lg-1 txt-secondary txt-semi d-inline-block">
                        Restoration through encounter with God
                    </h2>
                </div>
                <a style="width: max-content; cursor: pointer" class="d-flex">
                    <div
                        class="cst-button txt-semi green text-sm-1 text-uppercase"
                        @click="goToSundayService"
                    >
                        LET'S JOIN US
                    </div>
                </a>
            </div>
        </section>
        <section class="page-2">
            <div class="container-fluid p-0 content-wrapper-page-2">
                <div id="text-home-page-2" class="content-page">
                    <p class="upper-text txt-regular text-lg-1">
                        <b>House of Healing</b> adalah komunitas gereja yang
                        berfokus pada pemulihan dan penyembuhan jiwa-jiwa
                        melalui perjumpaan dengan Tuhan
                    </p>
                    <p class="lower-text txt-light text-md pt-3">
                        Dalam persekutuan dan pertumbuhan rohani, kami membantu
                        jiwa-jiwa yang terluka merasakan pemulihan, mendapatkan
                        pengharapan baru, dan hidup dalam damai sejahtera.
                    </p>
                </div>
                <div id="image-home-page-2" class="content-page">
                    <img src="../assets/home-page-2.png" />
                </div>
            </div>
        </section>
        <section class="page-3 text-white">
            <div class="container-fluid p-0">
                <h2 class="text-lg-2 title txt-semi">Latest Service</h2>
                <div class="content">
                    <vueper-slides
                        class="no-shadow"
                        :visible-slides="3"
                        :slide-ratio="1 / 3"
                        :dragging-distance="20"
                        :arrows-outside="false"
                        :3d="true"
                        autoplay
                        :breakpoints="{
                            992: {
                                visibleSlides: 2,
                                slideRatio: 1 / 2,
                            },
                            768: {
                                visibleSlides: 1,
                                slideRatio: 4 / 5,
                                arrows: false,
                                bulletsOutside: true,
                            },
                        }"
                    >
                        <vueper-slide
                            v-for="(sermon, i) in sermons"
                            :key="i"
                            :image="sermon.img"
                        >
                            <template #content>
                                <div class="service-container">
                                    <div
                                        class="text-md sermon-title txt-semi text-capitalize text-white"
                                    >
                                        {{ sermon.title }}
                                    </div>
                                    <div
                                        class="speaker txt-medium text-sm-1 text-capitalize mw-100 text-white"
                                    >
                                        {{ sermon.speaker }}
                                    </div>
                                    <a
                                        style="width: max-content"
                                        class="d-flex"
                                        :href="sermon.url"
                                    >
                                        <div
                                            class="cst-button txt-semi green text-sm-1 text-uppercase"
                                        >
                                            Watch
                                        </div>
                                    </a>
                                </div>
                            </template>
                        </vueper-slide>
                    </vueper-slides>
                </div>
            </div>
        </section>
        <section class="page-4 d-flex">
            <div
                class="col d-flex justify-content-center flex-column page-4-title"
            >
                <h2 class="text-lg-2 txt-bold">Sunday</h2>
                <h2 class="text-lg-2 txt-bold">Service</h2>
                <h2 class="text-lg-2 txt-bold">Schedule</h2>
                <h4 class="pt-3 text-md">Onsite & Streaming</h4>
            </div>
            <div class="col ibadah pertama">
                <div class="pb-5">
                    <h3 class="text-lg-1 txt-bold">IBADAH PERTAMA</h3>
                    <div class="border-text"></div>
                    <h2 class="text-lg-2 py-3 txt-bold">08.30 WIB</h2>
                    <p class="text-sm-2 txt-medium">
                        Disertai ibadah sekolah minggu & Live Streaming
                    </p>
                </div>
                <a
                    style="width: max-content; cursor: pointer"
                    class="d-flex"
                    href="https://www.youtube.com/channel/UCMX0cJXWmpAtanlquzeZVPA"
                >
                    <div
                        class="cst-button txt-semi red d-flex align-items-center justify-content-center"
                        style="background-color: red"
                    >
                        <img src="../assets/youtube.svg" />
                        <p class="ps-2">Go Streaming</p>
                    </div>
                </a>
            </div>
            <div class="col ibadah kedua">
                <div class="pb-5">
                    <h3 class="text-lg-1 txt-bold">IBADAH KEDUA</h3>
                    <div class="border-text"></div>
                    <h2 class="text-lg-2 py-3 txt-bold">10.30 WIB</h2>
                    <p class="text-sm-2 txt-medium">
                        Disertai ibadah sekolah minggu & Live Streaming
                    </p>
                </div>
                <a
                    style="width: max-content; cursor: pointer"
                    class="d-flex"
                    href="https://www.youtube.com/channel/UCMX0cJXWmpAtanlquzeZVPA"
                >
                    <div
                        class="cst-button txt-semi red d-flex align-items-center justify-content-center"
                        style="background-color: red"
                    >
                        <img src="../assets/youtube.svg" />
                        <p class="ps-2">Go Streaming</p>
                    </div>
                </a>
            </div>
        </section>
        <section class="page-5">
            <div
                id="text-home-page-5"
                class="page-5-text-container content-page"
            >
                <h2 class="text-lg-2 txt-bold pb-4">
                    Mari Bertumbuh Dalam Rohani Bersama COOL
                </h2>
                <a style="width: max-content; cursor: pointer" class="d-flex">
                    <div
                        class="cst-button txt-semi green text-sm-1 text-uppercase"
                    >
                        <router-link
                            to="/community"
                            @click="setActivePath('/community')"
                            >Ayo Bergabung!</router-link
                        >
                    </div>
                </a>
            </div>
            <div id="image-home-page-5" class="content-page">
                <img class="w-100 h-100" src="../assets/cool-home-page.png" />
            </div>
        </section>
    </main>
</template>

<script>
import { setActivePath } from "@/router";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    name: "HomeView",
    components: { VueperSlides, VueperSlide },

    data: () => ({
        sermons: [
            {
                title: "komunikasi dengan keluarga di era modern",
                img: require("../assets/komunikasi-dengan-keluarga-di-era-modern.png"),
                speaker: "ps. linda sinaga",
                url: "https://www.youtube.com/live/l0q970w8sFU?feature=share",
            },
            {
                title: "are you a disciple?",
                img: require("../assets/are-you-a-disciple.png"),
                speaker: "ps. erwin widodo",
                url: "https://www.youtube.com/live/cf1V8qMv5lU?feature=share",
            },
            {
                title: "Emotional Intelligence",
                img: require("../assets/emotional-intelligence.png"),
                speaker: "ps. james selopranoto",
                url: "https://www.youtube.com/live/42Ule4PBUME?feature=share",
            },
            {
                title: "komunikasi dengan keluarga di era modern",
                img: require("../assets/komunikasi-dengan-keluarga-di-era-modern.png"),
                speaker: "ps. linda sinaga",
                url: "https://www.youtube.com/live/l0q970w8sFU?feature=share",
            },
            {
                title: "are you a disciple?",
                img: require("../assets/are-you-a-disciple.png"),
                speaker: "ps. erwin widodo",
                url: "https://www.youtube.com/live/cf1V8qMv5lU?feature=share",
            },
        ],
    }),

    methods: {
        goToSundayService: function () {
            const sundayService = document.querySelector(".page-4");
            sundayService.scrollIntoView();
        },
        setActivePath,
    },
};
</script>

<style scoped>
main {
    animation: fadeIn 1s linear;
}

.page-1 {
    background-image: url("../assets/home-background.png");
    background-size: cover;
    min-height: 100vh;
    padding: 80px 90px;
    text-align: left;
    opacity: 1;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.txt-primary {
    letter-spacing: 18.8px;
}

.txt-secondary {
    letter-spacing: 2px;
}

.page-2 {
    height: auto;
    padding: 80px 90px;
    text-align: left;
}

.content-wrapper-page-2 {
    display: flex;
    align-items: center;
}

.content-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0%;
}

#text-home-page-2 {
    padding-right: 12px;
}

#image-home-page-2 {
    padding-left: 12px;
    width: 100%;
}

.upper-text {
    line-height: 48px;
}

.lower-text {
    line-height: 34px; /* 141.667% */
}

.page-3 {
    height: auto;
    background-color: var(--bs-green);
    padding: 80px 90px;
    text-align: left;
}

.service-container {
    position: absolute;
    bottom: 0;
    max-height: 100%;
    max-width: 100%;
    padding: 36px 20px;
}

.content {
    padding-top: 60px;
}

.title {
    display: inline-block;
    letter-spacing: 3.2px;
    border-bottom: 8px solid var(--bs-brown);
    max-width: 100%;
    overflow: hidden;
}

.vueperslide {
    border-radius: 30px;
    filter: drop-shadow(12px 20px 8px rgba(0, 0, 0, 1));
    transform: scale(0.85);
    transition: 0.3s ease-in-out;
}

.vueperslide--active {
    transform: scale(0.95);
    z-index: 1;
}

.sermon-title {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.61);
    letter-spacing: 1.4px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.speaker {
    display: inline-block;
    color: white;
    padding: 8px 28px;
    margin: 16px 0px 20px 0px;
    border-radius: 20px;
    background-color: black;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.cst-button {
    font-weight: 600;
    color: white;
    width: max-content;
    border-radius: 10px;
}

.green {
    background-color: var(--bs-green);
    padding: 16px 40px;
}

.red {
    background-color: red;
    padding: 16px 24px;
}

.cst-button:hover {
    background-color: var(--bs-black1);
}

.page-4 {
    padding: 0px 90px;
    min-height: 100vh;
    text-align: left;
}

.page-4-title {
    padding: 40px 24px 40px 0px;
}

.page-4-title h2 {
    line-height: 120%; /* 115.625% */
}

.ibadah {
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.pertama {
    background-color: var(--bs-black1);
    color: white;
}

.kedua {
    background-color: white;
    color: black;
}

.border-text {
    display: none;
    width: 40vw;
}

.page-5 {
    color: white;
    height: max-content;
    background-color: var(--bs-grey);
    display: flex;
}

.page-5-text-container {
    padding: 80px 90px;
    text-align: left;
}

@media only screen and (max-width: 992px) {
    .page-1,
    .page-2,
    .page-3,
    .page-5-text-container {
        padding: 72px 40px;
    }

    .page-4 {
        padding: 0px;
        flex-direction: column;
    }

    .content-wrapper-page-2 {
        flex-direction: column;
    }

    #image-home-page-2 {
        padding-left: 0px;
        padding-bottom: 28px;
        order: 1;
    }

    #text-home-page-2 {
        padding-right: 0px;
        order: 2;
    }

    .service-container {
        padding-top: 28px;
        padding-bottom: 28px;
    }

    .content {
        padding-top: 52px;
    }

    .ibadah,
    .page-4-title {
        padding: 40px;
    }

    .ibadah h3 {
        display: table-caption;
        padding-bottom: 8px;
    }

    .pertama .border-text {
        display: block;
        border-bottom: 8px solid white;
    }

    .kedua .border-text {
        display: block;
        border-bottom: 8px solid black;
    }
}

@media only screen and (max-width: 768px) {
    .page-1,
    .page-2,
    .page-3,
    .ibadah,
    .page-4-title {
        padding: 60px 16px;
    }

    .page-1 {
        min-height: 0;
    }

    .txt-primary {
        letter-spacing: 1.9px;
    }

    .txt-secondary {
        padding-top: 8px;
        font-weight: 500;
    }

    .upper-text {
        line-height: 120%;
        font-weight: 500;
    }

    .lower-text {
        line-height: 120%;
        font-weight: 300;
    }

    .service-container {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .content {
        padding-top: 48px;
    }

    .vueperslide {
        border-radius: 0;
        filter: drop-shadow(4px 8px 4px rgba(0, 0, 0, 1));
    }

    .title {
        letter-spacing: 1.9px;
        padding-bottom: 8px;
    }

    .speaker {
        margin-top: 12px;
        padding-left: 16px;
        padding-right: 16px;
    }

    .cst-button {
        padding: 12px 20px;
    }

    .page-5 {
        flex-direction: column;
    }

    #text-home-page-5 {
        order: 2;
    }
}
</style>
