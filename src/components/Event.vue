<template>
	<main>
		<h1 class="text-center pb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1521f7]">Reportar Pago</h1>
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
						<!-- <input type="number" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cedula" required> -->

						<div>

						<div
  class="relative mb-4 flex flex-wrap items-stretch"
  data-te-dropdown-ref>
  <button
    class="z-[2] flex items-center whitespace-nowrap rounded-l border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:z-[3] focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    type="button"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init>
    Dropdown
    <span class="-mt-[0.2rem] ml-2 w-2">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="caret-down"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512">
        <path
          fill="currentColor"
          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
      </svg>
    </span>
  </button>
  <ul
    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
    data-te-dropdown-menu-ref>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        href="#"
        data-te-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        href="#"
        data-te-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        href="#"
        data-te-dropdown-item-ref
        >Something else here</a
      >
    </li>
    <li>
      <hr
        class="my-2 h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
        href="#"
        data-te-dropdown-item-ref
        >Separated link</a
      >
    </li>
  </ul>
  <input
    type="text"
    class="relative m-0 -ml-0.5 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
    aria-label="Text input with dropdown button" />
</div>

</div>

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