<template>
    <div class="relative" style="background-color: black;">
        <!-- relative float-left -mr-[100%] hidden w-full !transform-none bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none -->
        <div class="relative w-full max-h-screen overflow-hidden !transform-none bg-cover bg-center bg-no-repeat after:clear-both after:block after:content-[''] overlay123">
            <video playsinline autoplay muted loop class="w-full">
                <source class="" src="https://oroxo.github.io/Uplink-landing/videos/tv.mp4" type="video/mp4" />
            </video>
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                <div class="flex h-full items-center justify-center  bg-black/80">
                    <div class="px-md-0 px-14 text-center text-white">
                        <h2 class="mb-4 text-3xl font-semibold">
                            Proximamente
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { onMounted } from "vue";
import { Carousel, initTE } from "tw-elements";

onMounted(() => {
    initTE({ Carousel });
});
</script>
    
<style>
.overlay123{
    filter:alpha(opacity=50);
}
</style>