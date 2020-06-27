import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import category from "./components/Category"
import people from "./components/People";
import person from "./components/Person";
import planets from "./components/Planets";
import planet from "./components/Planet";
import films from "./components/Films";
import film from "./components/Film";
import species from "./components/Species";
import specie from "./components/Specie";
import vehicles from "./components/Vehicles";
import vehicle from "./components/Vehicle";
import starships from "./components/Starships";
import starship from "./components/Starship";

var infiniteScroll = require('vue-infinite-scroll');
Vue.use(infiniteScroll);

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    {
        path: "/",
        component: category,
    },
    {
        path: "/people",
        component: people,
    },
    {
        path: "/people/:id",
        component: person,
    },
    {
        path: "/planets",
        component: planets,
    },
    {
        path: "/planets/:id",
        component: planet,
    },
    {
        path: "/films",
        component: films,
    },
    {
        path: "/films/:id",
        component: film,
    },
    {
        path: "/species",
        component: species,
    },
    {
        path: "/species/:id",
        component: specie,
    },
    {
        path: "/vehicles",
        component: vehicles,
    },
    {
        path: "/vehicles/:id",
        component: vehicle,
    },
    {
        path: "/starships",
        component: starships,
    },
    {
        path: "/starships/:id",
        component: starship,
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
