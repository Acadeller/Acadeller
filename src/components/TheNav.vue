<template>
	<nav class="relative bg-white shadow dark:bg-gray-800">
		<div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
			<div class="flex items-center justify-between">
				<div>
					<router-link class="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" :to="{ name: 'home'}">Acadeller</router-link>
				</div>

				<!-- Mobile menu button -->
				<div class="flex md:hidden">
					<button @click="isOpen = !isOpen" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
						<svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
						</svg>

						<svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div
				x-cloak
				:class="[isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full']"
				class="absolute inset-x-0 z-20 w-full px-6 py-4 text-gray-800 bg-white dark:text-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
			>
				<div class="flex flex-col md:flex-row md:mx-6">
					<div class="pb-4 md:pb-0 md:pt-1">
						<router-link :activeClass="linkActiveClass" :class="linkClass" :to="{ name: 'courses'}">Cursos</router-link>
						<router-link :activeClass="linkActiveClass" :class="linkClass" :to="{ name: 'about'}">Acerca de</router-link>
						<router-link :activeClass="linkActiveClass" :class="linkClass" :to="{ name: 'contact'}">Contacto</router-link>
					</div>

					<label class="relative h-8 w-14 cursor-pointer md:ml-6">
						<input
							type="checkbox"
							class="peer sr-only"
							@click="toggleDark()"
						/>

						<span class="absolute inset-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-600 transition dark:translate-x-6 dark:text-white dark:bg-gray-800">
							<svg v-if="!isDark" class="h-5 w-5" fill="currentColor" height="512px" id="Layer_2" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336    c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112    c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400    c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167    l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625    S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256    c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32    c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0    c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z"/>
							</svg>
							<svg v-if="isDark" class="h-7 w-7" fill="currentColor" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M349.852,343.15c-49.875,49.916-131.083,49.916-181,0c-49.916-49.918-49.916-131.125,0-181.021  c13.209-13.187,29.312-23.25,47.832-29.812c5.834-2.042,12.293-0.562,16.625,3.792c4.376,4.375,5.855,10.833,3.793,16.625  c-12.542,35.375-4,73.666,22.25,99.917c26.209,26.228,64.5,34.75,99.916,22.25c5.792-2.062,12.271-0.582,16.625,3.793  c4.376,4.332,5.834,10.812,3.771,16.625C373.143,313.838,363.06,329.941,349.852,343.15z M191.477,184.754  c-37.438,37.438-37.438,98.354,0,135.771c40,40.021,108.125,36.416,143-8.168c-35.959,2.25-71.375-10.729-97.75-37.084  c-26.375-26.354-39.333-61.771-37.084-97.729C196.769,179.796,194.039,182.192,191.477,184.754z"/>
							</svg>
						</span>

						<span
							class="absolute inset-0 rounded-full bg-gray-300 transition dark:bg-gray-900"
						></span>
					</label>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
    props: {
        isDark: Boolean
    },

	data() {
    	return {
        	isOpen: false
    	}
    },

	computed: {
		linkClass() {
			return "border-b-2 font-medium border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-yellow-400 mx-1.5 sm:mx-6"
		},

		linkActiveClass() {
			return "text-gray-800 font-medium transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-gray-400 mx-1.5 sm:mx-6"
		},
	},

    methods: {
        toggleDark() {
            this.$emit("toggle-dark")
        }
    }
}
</script>