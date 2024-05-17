<template>
	<main class="py-10">
		<section class="mt-10" id="speedtest">
			<!-- <h1 class="text-center pb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1521f7]">Speedtest</h1> -->
			<!--OST Widget code start--><div style="text-align:right;"><div style="min-height:360px;"><div style="width:100%;height:0;padding-bottom:50%;position:relative;"><iframe id="frame" style="border:none;position:absolute;top:0;left:0;width:100%;height:100%;min-height:360px;border:none;overflow:hidden !important;" src="https://fast.com"></iframe></div></div></div><!-- OST Widget code end -->
			
			
		</section>
	</main>
</template>

<script>
import events from '@/events.js'
import speakers from '@/speakers.js'
import CardProfile from '@/components/CardProfile.vue'
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";
export default {
	setup(){
		initTE({ Dropdown, Ripple });

	},
	mounted(){
		// var iframe = document.getElementById('frame');
		// var elmnt = iframe.contentWindow.document.getElementsByClassName('logo-container')[0]; //
		// console.log(iframe.contentWindow.document);
		// elmnt.style.display = "none";

		document.querySelector("#frame").addEventListener('load', function() {
			var iframe = document.getElementById('frame');
		var elmnt = iframe.contentWindow.document.getElementsByClassName('logo-container')[0]; //
		const new_style_element = document.createElement("style");
		new_style_element.textContent = ".logo-container { display: none !important; }"
		console.log(iframe.contentWindow.document);
		iframe.contentWindow.document.head.appendChild(new_style_element);
		elmnt.style.display = "none";

	// console.log(ev.contentwindow);
    // ev.target.contentDocument.head.appendChild(new_style_element);
});
	},
	methods: {
		test(){
			console.log('ok');
		}
	},
}
</script>
<style>
.logo-container {
	visibility: hidden !important;
}
</style>