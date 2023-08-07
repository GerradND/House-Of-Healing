<template>
    <main>
        <section class="latest-service">
            <div class="container-fluid p-0">
                <h2 class="text-lg-2 title text-white">Latest Service</h2>
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
                                        class="text-md sermon-title text-capitalize text-white"
                                    >
                                        {{ sermon.title }}
                                    </div>
                                    <div
                                        class="speaker text-sm-1 text-capitalize mw-100 text-white"
                                    >
                                        {{ sermon.speaker }}
                                    </div>
                                    <a
                                        style="width: max-content"
                                        class="d-flex"
                                        :href="sermon.url"
                                    >
                                        <div
                                            class="cst-button text-sm-1 text-uppercase"
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
    </main>
</template>

<script>
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
};
</script>

<style>
.latest-service {
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
    font-weight: 600;
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
    font-weight: 600;
    line-height: 150%; /* 42px */
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
    font-weight: 500;
    background-color: black;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.cst-button {
    background-color: var(--bs-green);
    padding: 16px 40px;
    font-weight: 500;
    color: white;
    width: max-content;
    border-radius: 10px;
}

@media only screen and (max-width: 992px) {
    .latest-service {
        padding: 72px 40px;
    }

    .service-container {
        padding-top: 28px;
        padding-bottom: 28px;
    }

    .content {
        padding-top: 52px;
    }
}

@media only screen and (max-width: 768px) {
    .latest-service {
        padding: 60px 16px;
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
    }

    .speaker {
        margin-top: 12px;
        padding-left: 16px;
        padding-right: 16px;
    }

    .cst-button {
        padding: 12px 20px;
    }

    .sermon-title,
    .speaker,
    .title,
    .cst-button {
        line-height: 120%;
    }
}
</style>
