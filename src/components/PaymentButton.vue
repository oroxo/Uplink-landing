<template>
	<main class="transition-colors duration-500 navbar-transparent" :class="showColoredBackground? 'navbar-gradient' : 'md:navbar-transparent'">
		<section>
			<div class="fixed" v-if="$route.path != '/pagos'">
				<router-link
				to="/pagos"
				custom
				v-slot="{ navigate }"
				>
				<a @click="navigate" class="button ">
					<div class="buttonDiv bg-b-blue">
						Pagar
					</div>
				</a>
			</router-link>
		</div>
	</section>
</main>
</template>

<style scoped>
.fixed
{
	position: fixed;
	top:100px;
	right: 0;
	/* width:250px; */
	height:200px;
	z-index:999;
}
.button 
{
	display: block;
	border: 0;
	line-height: 3;
	margin-bottom: 0.3em;
	outline: none;
	text-decoration: none;
	color: #fff;
	/* width: 250px; */
	font-size: 16px;
	border-radius: 20px 0 0 20px;
}
.buttonDiv 
{
	padding: 0 21px;
	border-radius: 30px 0 0 30px;
}
.buttonDiv:hover
{
	background: white;
	transition: margin 500ms;
	margin-left: -20px;
}
/* Button Css */
.bg-b-blue
{
	background: linear-gradient(45deg,#1521c5,#bfd6f1);
}
.bg-b-blue:hover
{
	background:linear-gradient(45deg,#1a77e2,#4485d2);
}
.bg-b-green
{
	background: linear-gradient(45deg,#2ed8b6,#59e0c5);
}
.bg-b-orange
{
	background: linear-gradient(45deg, #fda582, #f7cf68);
}
.bg-b-orange:hover
{
	background:linear-gradient(45deg, #fda582, #fcac7d);
}
.bg-b-purple
{
	background: linear-gradient(45deg, #a52dd8, #e29bf1);
}
.bg-b-purple:hover
{
	background:linear-gradient(45deg, #a52dd8, #b143dd);
}

</style>

<script>
import { ref } from 'vue'

export default{
	setup () {
		const menuActive = ref('Beranda')
		const showMenu = ref(false)
		const viewport = ref(window.innerWidth) //Get current width of browser
		if ( viewport.value >= 768 ) showMenu.value = true //If device tablet or more wider shoow menu
	}


}


</script>
