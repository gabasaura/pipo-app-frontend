
const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			url: 'http://127.0.0.1:5000',
			username: "",
			email: '',
			password: "",
			repeatPassword: "",
			name: "",
			current_user: null,
			error: '',
			accessToken: null,
			pipos: []
		},
		actions: {
			handleChange: (e) => {
				const { name, value } = e.target;
				setStore({
					[name]: value
				});
			},
			cancelForm: () => {
				const { setStore } = getActions();
				setStore({
					email: "",
					password: "",
					error: ""
				});
			},
			getPipos: async () => {
				try {
					const url = 'http://127.0.0.1:5000/pipos';
					const options = {
						method: "GET",
						headers: { 'Content-Type': 'application/json' }
					}

					const response = await fetch(url, options)
					const datos = await response.json()
					setStore({ pipos: datos })
				} catch (error) {
					console.log(error.message)
				}

			},
			validateForm: () => {
				const { email, password } = getStore();
				if (!email.trim() || !getStore().isValidEmail(email)) {
					setStore({ error: "Please enter a valid email address." });
					return true; // Form is invalid
				}
				if (!password.trim() || password.length < 6) {
					setStore({ error: "Password must be at least 6 characters." });
					return true; // Form is invalid
				}
				return false; // Form is valid
			},
			isValidEmail: (email) => {
				// Basic email validation regex pattern
				const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				return emailPattern.test(email);
			},
			handleLogin: (e) => {
				e.preventDefault();
				const { email, password } = getStore();
				const { actions } = getActions();
				console.log({
					email: email,
					password: password,
				})
				if (!actions.validateForm()) {
					// Form submit logic here
					console.log("Form submitted successfully!");

					const url = 'http://127.0.0.1:5000/login';
					const options = {
						method: "POST",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							email: email,
							password: password,
						})
					};

					fetch(url, options)
						.then(response => response.json())
						.then(data => {
							console.log('Usuario logueado Con Éxito', data);
						})
						.catch(error => console.error('Log in Error:', error));

					actions.cancelForm(); // Clear form fields
				}
			},
			handleRegister: (e, email, password) => {
				e.preventDefault();
				const { actions } = getActions();
				actions.register(email, password);
			},
			checkCurrentUser: () => {
				if (sessionStorage.getItem('access_token')) {
					setStore({
						access_token: sessionStorage.getItem('access_token'),
						current_user: JSON.parse(sessionStorage.getItem('current_user'))
					});
				}
			},
			login: async (credentials) => {
				try {
					const { url } = getStore();
					const options = {
						method: 'POST',
						body: JSON.stringify(credentials),
						headers: {
							'Content-type': 'application/json'
						}
					};

					const response = await fetch(`${url}/login`, options);
					const data = await response.json();

					if (data.msg) {
						console.log(data);
					} else {
						console.log(data);
						const { access_token, user } = data;
						setStore({
							access_token: access_token,
							current_user: user,
							email: '',
							password: ''
						});
						sessionStorage.setItem('access_token', access_token);
						sessionStorage.setItem('current_user', JSON.stringify(user));
					}

				} catch (error) {
					console.log(error.message);
				}

			},
			register: async (credenciales) => {
				try {
					const { url } = getStore()
					const option = {
						method: 'POST',
						body: JSON.stringify(credenciales),
						headers: {
							'Content-type': 'application/json'
						}
					}

					const response = await fetch(`${url}/api/register`, option)
					const datos = await response.json()

					if (datos.msg) {
						console.log(datos)
						toast.error(datos.msg)
					} else {
						console.log(datos)
						const { access_token, user } = datos
						setStore({
							access_token: access_token,
							current_user: user,
							email: '',
							password: ''
						})
						sessionStorage.setItem('access_token', access_token)
						sessionStorage.setItem('current_user', JSON.stringify(user))
					}

				} catch (error) {
					console.log(error.message)
				}

			},
			logout: () => {
				if (sessionStorage.getItem('access_token')) {
					setStore({
						access_token: null,
						current_user: null,
						email: '',
						password: ''
					})
					sessionStorage.removeItem('access_token')
					sessionStorage.removeItem('current_user')
				}
			},
		}
	};
};

export default getState;