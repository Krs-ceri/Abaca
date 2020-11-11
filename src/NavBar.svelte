<script>
	import { Router, Link, Route } from "svelte-routing";
	
	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.sidenav');
		var instances = M.Sidenav.init(elems);
	});

	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.dropdown-trigger');
		var instances = M.Dropdown.init(elems);
	});

</script>

<nav class="blue">
	<div class="nav">
		<a data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
		<ul class="left hide-on-med-and-down">
			<li><a>Acceuil</a></li>
			
			<li><Link to="#!"><a>Profil</a></Link></li>
			<li><a href="#!">Boutique</a></li>

			<li><a class='dropdown-trigger' data-target='drop'>Moreover here <i class="material-icons right">settings</i></a></li>

			<ul id='drop' class='dropdown-content'>
			
			<Link to="/"><li><a href="#!">Connexion</a></li></Link>

				
			<li class="divider" tabindex="-1"></li>
			
			<Link to="/"><li><a href="#!">Mes informations</a></li></Link>
			<Link to="/"><li><a href="#!">Mes évenements</a></li></Link>
			<Link to="/"><li><a href="#!">Mes avis</a></li></Link>
			<Link to="/"><li><a href="#!">Mon espace fidélité</a></li></Link>
			<li class="divider" tabindex="-1"></li>
			<Link to="/"><li><a href="#!">Amis</a></li></Link>

			<Link to="/"><li><a href="#!">Communautés</a></li></Link>

			<li class="divider" tabindex="-1"></li>
			
			<Link to="/"><li><a href="#!">Parametre</a></li></Link>
			</ul>
		</ul>
	</div>
</nav>

<ul class="sidenav" id="mobile-demo">
	<Link to="/"><li><a href="#!">Mes informations</a></li></Link>
	<Link to="/"><li><a href="#!">Mes évenements</a></li></Link>
	<Link to="/"><li><a href="#!">Mon espace fidélité</a></li></Link>
	<Link to="/"><li><a href="#!">Mes avis</a></li></Link>
	<li class="divider" tabindex="-1"></li>
	<Link to="/"><li><a href="#!">Amis</a></li></Link>
	<Link to="/"><li><a href="#!">Boutique</a></li></Link>
	<Link to="/"><li><a href="#!">Communautés</a></li></Link>
	<li class="divider" tabindex="-1"></li>
	<Link to="/"><li><a href="#!">Paramètres</a></li></Link>
</ul>

<style>
	.dropdown-content {
		color: yellow;
	}
	
</style>
