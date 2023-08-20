import { createRouter, createWebHistory } from "vue-router";
import CommunityView from "../views/Community.vue";

const routes = [
    {
        path: "/community",
        component: CommunityView,
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
});
console.log("env:", process.env.BASE_URL);
export default router;
