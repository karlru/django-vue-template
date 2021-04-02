const AuthTemplate = `
	<div>
		<p>Auth</p>

		<div v-if="!auth">
			<p>register: </p>
			<form id="register-form">
				<label for="username">username</label>
				<input type="text" v-model="register.username" name="username">

				<label for="password1">password</label>
				<input type="password" v-model="register.password1" name="password1">

				<label for="password2">repeat password</label>
				<input type="password" v-model="register.password2" name="password2">

				<input v-on:click.prevent="submitRegisterForm" type="submit" value="submit">
			</form>

			<p>login: </p>
			<form id="login-form">
				<label for="username">username</label>
				<input type="text" v-model="login.username" name="username">

				<label for="password1">password</label>
				<input type="password" v-model="login.password" name="password">

				<input v-on:click.prevent="submitLoginForm" type="submit" value="submit">
			</form>
		</div>

		<div v-else>
			<p>logout: </p>
			<form id="logout-form">
				<input v-on:click.prevent="logout" type="submit" value="submit">
			</form>
		</div>
	</div>

`

const Auth = {
	delimiters: ['[[', ']]'],
	computed: {
		auth: function() { 
			return this.$store.state.auth.authenticated
		}
	},
	data: () => ({
		login: {
			username: '',
			password: '',
		},
		register: {
			username: '',
			password1: '',
			password2: '',
		},
	}),
	template: AuthTemplate,
	created: function() {
		this.$store.dispatch('getUserStatus')
	},
	methods: {
		submitLoginForm(e) {
			this.$store.dispatch(
				'submitLoginForm', 
				{
					'username': this.login.username, 
					'password': this.login.password,
				}
			)
		},
		submitRegisterForm(e) {
			this.$store.dispatch(
				'submitRegisterForm', 
				{
					'username': this.register.username, 
					'password1': this.register.password1,
					'password2': this.register.password2,
				}
			)
		},
		logout(e) {
			this.$store.dispatch('logout')
		},
	}
}

export { Auth }
