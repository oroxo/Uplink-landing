<template>
	<Navbar />
	<PB />
	<router-view></router-view>
	<section class="section bg-gradient-to-r from-slate-700 to-indigo-900">
		<Footer />
	</section>
</template>

<script setup>

import Navbar from '@/components/Navbar.vue'
// import Headline from '@/components/Headline.vue'
import Carousel from '@/components/Carousel.vue'
import About from '@/components/About.vue'
import Event from '@/components/Event.vue'
import FAQ from '@/components/FAQ.vue'
import Contact from '@/components/Contact.vue'
import Announcement from '@/components/Announcement.vue'
import Footer from '@/components/Footer.vue'
import PB from '@/components/PaymentButton.vue'

const highlights = [
{
	title: 'Peserta',
	num: 34,
	icon: 'fas fa-user-friends'
},
{
	title: 'Desa binaan',
	num: 1,
	icon: 'fas fa-building'
},
{
	title: 'Kunjungan sekolah',
	num: 5,
	icon: 'fas fa-building'
},
{
	title: 'Pemateri',
	num: 3,
	icon: 'fas fa-user-friends'
},
{
	title: 'Hari kegiatan',
	num: 3,
	icon: 'fas fa-calendar-week'
},
]

</script>

<style scoped>
.section {
	@apply w-full px-6 py-12 md:px-16 xl:px-28;
}
</style>
