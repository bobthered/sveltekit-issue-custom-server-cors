<script>
	import { enhance } from '$app/forms';

	// props (internal)
	let email = '';
	let password = '';
</script>

<form use:enhance>
	<input bind:value={email} name="email" placeholder="email" type="email" /><br />
	<input bind:value={password} name="password" placeholder="password" type="password" /><br /><br />
	<button>Login</button>
</form>
