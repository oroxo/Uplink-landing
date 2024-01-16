<template>
	<main class="transition-colors duration-500 navbar-transparent"
		:class="showColoredBackground || $route.path != '/' ? 'navbar-gradient' : 'md:navbar-transparent'">
		<section class="navbar-brand">
			<img src="/logo.png" width="45" />
			<h1 class="text-gray-50 text-xl font-semibold lg:text-3xl">UP LINK</h1>
			<button @click="showMenu = true" class="active:scale-95 duration-300 md:hidden" type="button">
				<i class="fa fa-bars text-gray-50 text-2xl"></i>
			</button>
		</section>

		<section :class="showMenu ? 'right-0' : '-right-full'" class="navbar-menu">
			<ul class="navbar-list">
				<span @click="showMenu = false" class=" md:hidden"><i class="fa fa-times text-gray-50"></i></span>
				<template v-for="(menu, x) in menus" :key="x">
					<router-link :to="menu.to" custom v-slot="{ href, route, navigate, isActive, isExactActive }">
						<li :class="isActive ? 'border-b-4 border-blue-400' : ''"
							class="text-gray-50 font-medium duration-300">
							<a @click="navigate" :href="href">{{ menu.name }}</a>
						</li>
						<!-- <NavLink :active="isActive" :href="href" @click="navigate">{{ route.fullPath }}</NavLink> -->
					</router-link>
					<!-- <li :class="menuActive === menu.name ? 'border-b-4 border-blue-400' : ''"
						class="text-gray-50 font-medium duration-300">
						<a @click="menuActive = menu.name" :href="menu.to">{{ menu.name }}</a>
					</li> -->
				</template>
			</ul>
		</section>
	</main>
</template>

<style scoped>
.navbar {
	@apply z-20 md:flex md:items-center md:justify-between md:px-6 md:py-8 lg:px-10 w-full bg-[#1521c5] fixed top-0 left-0 right-0 px-5 lg:py-8 py-3;
}

.navbar-transparent {
	@apply z-20 md:flex md:items-center md:justify-between md:px-6 md:py-8 lg:px-10 w-full bg-transparent fixed top-0 left-0 right-0 px-5 lg:py-8 py-3;
}

.navbar-gradient {
	@apply z-20 md:flex md:items-center md:justify-between md:px-6 md:py-8 lg:px-10 w-full bg-gradient-to-b from-[#1521c5] to-transparent backdrop-blur-sm fixed top-0 left-0 right-0 px-5 lg:py-8 py-3;
}

.navbar-brand {
	@apply flex items-center justify-between md:gap-3;
}

.navbar-menu {
	@apply duration-300 fixed md:relative top-0 bottom-0 bg-blue-600 md:bg-opacity-0 px-5 lg:px-0 pt-12 md:pt-0;
}

.navbar-list {
	@apply flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10 lg:text-xl;
}
</style>

<script setup>

import { ref } from 'vue'

const menuActive = ref('Beranda')
const showMenu = ref(false)
const viewport = ref(window.innerWidth) //Get current width of browser
let showColoredBackground = ref(false)

document.addEventListener('scroll', function () {
	let bodyTopPosition = document.body.getBoundingClientRect().top
	let viewportH = (window.innerHeight * 0.9) * -1
	let viewportW = ref(window.innerWidth) //Get current width of browser

	// console.log("bodyTopPosition", bodyTopPosition, "viewport", viewportW.value, "viewport percentage", viewportW.value * 0.56)
	if (bodyTopPosition < (viewportW.value * 0.56) * -1) {
		showColoredBackground.value = true
	} else {
		showColoredBackground.value = false
	}
})

if (viewport.value >= 768) showMenu.value = true //If device tablet or more wider shoow menu

const menus = [
	{
		name: 'Inicio',
		to: '/'
	},
	{
		name: 'Nosotros',
		to: '/about'
	},
	{
		name: 'Planes',
		to: '/plans'
	},
	{
		name: 'TV',
		to: '/tv'
	},
	{
		name: 'Contacto',
		to: '/contact'
	},
	{
		name: 'Medidor',
		to: '/speedtest'
	},
	// {
	// 	name: 'Pagos',
	// 	to: '#pagos'
	// },
	// {
	// 	name: 'Narahubung',
	// 	to: '#contact'
	// },
	// {
	// 	name: 'Pengumuman',
	// 	to: '#announcement'
	// }
]

</script>
