<template>
	<main>
		<h1 class="text-center pb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-indigo-500">Reportar Pago</h1>
		<p class="text-gray-600 text-center lg:px-24"></p>
		<section class="mt-10 md:flex flex-wrap justify-between gap-5">
			<div class="md:w-5/12 mb-8 md:mb-0 grid place-items-center">
				<img src="/event.png" class="w-6/12 md:w-11/12 lg:w-8/12" />
			</div>
			
			<div class="md:w-5/12 mb-8 md:mb-0">
				
					<label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Ingrese Su Cedula</label>
					<div class="relative">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
							</svg>
						</div>
						<input type="number" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cedula" required>
						<!-- <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
					</div>
				
			</div>
			<!-- <template v-for="(event, x) in events" :key="x">
				<div class="md:w-5/12 mb-8 md:mb-0">
					<span class="text-xl text-purple-700 font-medium leading-snug">
						<span class="border-b-2 border-purple-700">{{ x + 1 }}.</span>
						{{ event.title }}
					</span>
					<p class="mt-4">{{ event.content }}</p>
				</div>
			</template> -->
		</section>
		
		<section class="mt-12">
			<h1 class="text-center pb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-indigo-500">Planes</h1>
			<div class="md:flex justify-evenly gap-6">
				<template v-for="(speaker, x) in speakers" :key="x">
					<CardProfile :profile="speaker" />
				</template>
			</div>
		</section>
	</main>
</template>

<script setup>
import events from '@/events.js'
import speakers from '@/speakers.js'
import CardProfile from '@/components/CardProfile.vue'
</script>