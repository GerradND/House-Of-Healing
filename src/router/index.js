import { createRouter, createWebHistory } from "vue-router";

const routes = [];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
});
console.log("env:", process.env.BASE_URL);
export default router;
