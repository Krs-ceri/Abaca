<!--
	Componenent pour acheter les différents jeux
-->
<script>
	import Carousel from '@beyonk/svelte-carousel'
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
	let carousels = {perPage: 1}
	
	function changed (event) {
		console.log(event.detail.currentSlide)
        }
</script>

<section class="section jeux">
	<div class="demo">
		<Carousel on:change={changed} {...carousels}>
			<span class="control" slot="left-control">
				<ChevronLeftIcon />
			</span>
			<div class="slide-content">
				<section>
					<img alt="evenement" src="assets/test.png" width="600px" height="341px">
				</section>
			</div>
			<div class="slide-content">
				<section>
					<img alt="evenement" src="assets/test.png" width="600px" height="341px">
				</section>
			</div>
			<div class="slide-content">
				<section>
					<img alt="evenement" src="assets/test.png" width="600px" height="341px">
				</section>
			</div>
			<span class="control" slot="right-control">
					<ChevronRightIcon />
			</span>
		</Carousel>
		<script>
			window.addEventListener("resize", function () {
				const fleche = document.querySelectorAll(".control");

				fleche.forEach(element => {
					element.style.display = (document.documentElement.clientWidth < 700 ? "none" : "block") ;
				});
				
				const div = document.querySelector(".jeux") ;
				const image = document.querySelector(".slide-content img");
				const heigth = window.getComputedStyle(image).height;
				div.style.height = heigth
			});

			if(document.documentElement.clientWidth < 700) {
					const div = document.querySelector(".jeux") ;
					const image = document.querySelector(".slide-content img");
					const heigth = window.getComputedStyle(image).height;
					div.style.height = heigth
			}
		</script>
	</div>
	<center><a href="/event" class="waves-effect waves-light btn-small">Play !</a></center>
</section>

<style>
	.demo {
        margin: 0 auto;
		margin-top: 1%;
		height: 341px;
		width: 80vw;
		text-align: center;
	}
	
	.control :global(svg) {
		width: auto;
		height: auto;
		color: #333;
		border: 2px solid #333;
		border-radius: 32px;
	}
	
	.slide-content {
		display: inline;
		flex-direction: column;
        	background-color: white;
    	}

	.slide-content img {
		width: 100%;
		height: auto;
		max-height: 341px;
		max-width: 80vw;
		object-fit: contain;
	}
</style>

