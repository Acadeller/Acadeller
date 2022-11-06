import { createRouter, createWebHistory } from "vue-router"
import HomeView from "~/views/HomeView"
import AboutView from "~/views/AboutView"
import ContactView from "~/views/ContactView"
import CoursesView from "~/views/CoursesView"

const routes = [
    {
        path: "/",
        component: HomeView,
        name: "home",
        meta: {
            title: "Inicio"
        }
    },
    {
        path: "/acerca-de",
        component: AboutView,
        name: "about",
        meta: {
            title: "Acerca de"
        }
    },
    {
        path: "/contacto",
        component: ContactView,
        name: "contact",
        meta: {
            title: "Contacto"
        }
    },
    {
        path: "/cursos",
        component: CoursesView,
        name: "courses",
        meta: {
            title: "Cursos"
        }
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

/*router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Acadeller`
    next()
})*/

export default router
