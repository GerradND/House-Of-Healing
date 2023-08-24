import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import EventView from "../views/Event.vue";
import { ref } from "vue";

const activePath = ref("/");

const routes = [
    {
        path: "/",
        component: HomeView,
    },
    {
        path: "/event",
        component: EventView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
});

export function setActivePath(path) {
    activePath.value = path;
}

export function getActionPath() {
    return activePath;
}

export default router;
