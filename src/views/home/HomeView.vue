<template>
    <Hero />
    <FeaturedCourse />
    <Features />
    <Testimonials />
</template>

<script>
import Hero from "~/views/home/HeroSection"
import FeaturedCourse from "~/views/home/FeaturedCourseSection"
import Features from "~/views/home/FeaturesSection"
import Testimonials from "~/views/home/TestimonialsSection"

export default {
    components: {
        Hero,
        Features,
        FeaturedCourse,
        Testimonials
    }
}
</script>