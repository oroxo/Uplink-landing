<template>
    <section class="lg:h-screen bg-sky-1000">
        <div class="body">
            <img class="stars" src="/stars-s.png" data-value="5">
            <div class="container1">
                <div class="relative mb-4 flex w-60 flex-wrap items-stretch">
                    <div class="w-1/6">
                        <select data-te-select-init>
                            <option value="1">V</option>
                            <option value="2">E</option>
                            <option value="3">J</option>
                            <option value="4">G</option>
                            <option value="5">P</option>
                        </select>
                    </div>
                    <input
                    type="search"
                    class="relative m-0 -mr-0.5 block w-4/6 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-neutral-200 font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1" />
                    
                    <!--Search button-->
                </div>
                <button
                class="relative mb-4 z-[2] flex items-center rounded-r bg-primary pt-[0.25rem] border border-solid border-neutral-600  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
        </button>
        
    </div>
</div>
</section>

</template>

<style>

.body {
    width: 100vw;
    height:100vh;
    background: url(/sky-s.png) no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

}

.container1 {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: rgba(0,0,0,0.8);
    
}

.body h2{
    color: #fff;
}

.body .img {
    position: absolute;
    width: 100vw;
    height:100vh;
    top: 0;
    left: 0;
    object-fit: contain;
    opacity: 0.2;
    overflow: hidden;
}

</style>

<script setup>

import { Ripple, Select, initTE } from "tw-elements";
import { onMounted } from "vue";
onMounted(() => {
    initTE({ Ripple });
    initTE({ Select });
});

document.addEventListener("mousemove", parallax);

function parallax(e){
    document.querySelectorAll(".stars").forEach(function(move){

        var moving_value = move.getAttribute("data-value");

        var x = (e.clientX * moving_value)/100;
        var y = (e.clientY * moving_value)/100;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        
    });
}

</script>