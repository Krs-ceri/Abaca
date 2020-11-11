import App from './App.svelte';
import Navbar from'./NavBar.svelte';


const app = new App({
	target: document.body,
	props: {
		name: "Nizar Rezaigui"
	}
});

export default app ;