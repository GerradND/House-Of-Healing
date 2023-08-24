import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import CommunityView from "../views/Community.vue";
import { ref } from "vue";

const activePath = ref("/");

const routes = [
    {
        path: "/",
        component: HomeView,
    },
    {
        path: "/community",
        component: CommunityView,
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
