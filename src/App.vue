<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <the-nav
        :is-dark="isDark"
        @toggle-dark="toggleDark"
    />
    <router-view />
    <the-footer
        :is-dark="isDark"
    />
</template>

<script>
import TheNav from '~/components/TheNav'
import TheFooter from '~/components/TheFooter'
</script>

