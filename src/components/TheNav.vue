<template>
	<nav class="relative bg-white shadow dark:bg-gray-800">
		<div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
			<div class="flex items-center justify-between">
				<div>
					<router-link class="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" :to="{ name: 'home'}">Acadeller</router-link>
				</div>

				<!-- Mobile menu button -->
				<div class="flex lg:hidden">
					<button @click="isOpen = !isOpen" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
						<svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
						</svg>

						<svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
				<div class="flex flex-col md:flex-row md:mx-6">
					<router-link :activeClass="linkActiveClass" :class="linkClass" :to="{ name: 'courses'}">Cursos</router-link>
					<router-link :activeClass="linkActiveClass" :class="linkClass" :to="{ name: 'about'}">Acerca de</router-link>
					<router-link :activeClass="linkActiveClass" :class="linkClass" :to="{ name: 'contact'}">Contacto</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
    	return {
        	isOpen: false
    	}
    },

	computed: {
		linkClass() {
			return "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-yellow-500 mx-1.5 sm:mx-6"
		},

		linkActiveClass() {
			return "text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-yellow-500 mx-1.5 sm:mx-6"
		},
	}
}
</script>