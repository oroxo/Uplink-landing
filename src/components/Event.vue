<template>
	<main>
		<section class="mt-12" id="planes">
			<h1 class="text-center pb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1521f7]">Planes</h1>
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
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Dropdown, Ripple });
</script>