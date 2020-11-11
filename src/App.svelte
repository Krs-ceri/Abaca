<script>
	import { redirectGuard } from 'svelte-guard-history-router';
	import { Router, Link, Route } from "svelte-routing";
	import Navbar from "./NavBar.svelte"

	import Promotion from "./Home/Promotion.svelte"
	import Stars from "./Home/stars.svelte"
	import Profil from "./Home/Profil.svelte"
	
	import Game from "./Home/Game.svelte";
	import Event from "./Home/Event.svelte";
	
	export let url = "";
</script>

<Router url="{url}">
	<Route path="/">
		<Navbar />
		<Stars />
		<Promotion />
		<Profil />
		<Game />
	</Route>
	<Route path="/event">
		<Navbar />
		<Event />
	</Route>		
</Router>