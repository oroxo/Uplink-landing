<template>
	<main>
		<section class="mt-12">
			<p class="text-indigo-500 font-semibold text-xl lg:text-2xl md:text-center mb-5">Planes</p>
			<div class="md:flex justify-evenly gap-6">
				<template v-for="(speaker, x) in speakers" :key="x">
					<CardProfile :profile="speaker" />
				</template>
			</div>
		</section>
	</main>
</template>

<script setup>
	import speakers from '@/speakers.js'
</script>