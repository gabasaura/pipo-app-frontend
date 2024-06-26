import { toast } from "react-toastify";



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
			access_token: null,
			error: '',
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
				const { username, email, password, repeatPassword } = getStore();
				if (!username.trim()) {
					setStore({ error: "Please enter a valid username." });
					toast.error("Please enter a valid username.")
					return true;
				}
				if (!email.trim() || !getActions().isValidEmail(email)) {
					setStore({ error: "Please enter a valid email address." });
					toast.error("Please enter a valid email address.")
					return true; // Form is invalid
				}

				if (!password.trim() || password.length < 6) {
					setStore({ error: "Password must be at least 6 characters." });
					toast.error("Password must be at least 6 characters.")
					return true; // Form is invalid
				}
				if (password !== repeatPassword) {
					setStore({ error: "Password doesn't match" });
					toast.error("Password doesn't match")
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
							password: password

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
			handleRegister: (e) => {
				e.preventDefault();
				const { name, email, password, username, repeatPassword } = getStore()
				const { register, validateForm } = getActions();
				if (!validateForm()) register({ email, password, name, username, repeatPassword });
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
						if (data.msg) toast.error(data.msg)
						else toast.success(data.success)

					} else {
						console.log(data);

						const { access_token, user } = data;
						setStore({
							access_token: access_token,
							current_user: user,
							email: '',
							password: '',
						});
						sessionStorage.setItem('access_token', access_token);
						sessionStorage.setItem('current_user', JSON.stringify(user));
						toast.success("Log In Sucessful")
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

					const response = await fetch(`${url}/signup`, option)
					const datos = await response.json()
					const { cancelForm } = getActions()
					if (datos.msg) {
						console.log(datos)
						if (datos.msg) toast.error(datos.msg)
						else toast.success(datos.success)
					} else {
						console.log(datos)

						toast.success(datos.success)
						const { access_token, user } = datos.datos;
						setStore({
							access_token: access_token,
							current_user: user,
							email: '',
							password: '',
							username: '',
						});
						sessionStorage.setItem('access_token', access_token);
						sessionStorage.setItem('current_user', JSON.stringify(user));
						cancelForm()
					}

				} catch (error) {
					console.log(error.message)
				}

			},
			reset: async (credentials) => {
				try {
					const { url } = getStore();
					const options = {
						method: 'POST',
						body: JSON.stringify(credentials),
						headers: {
							'Content-type': 'application/json'
						}
					};

					const response = await fetch(`${url}/reset_password`, options);
					const data = await response.json();

					if (response.ok) {
						setStore({
							access_token: null,
							current_user: null,
							email: '',
							password: '',
						});

						console.log('Password Reseted Successfully!');
						toast.success(data.success)
					} else {
						console.error('Password Reset Failed:', data.error || 'Unknown error');
						if (data.msg) toast.error(data.msg)
						
					}

				} catch (error) {
					console.error('Password Reset Failed:', error.message);
					// Display error message to the user
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
					toast.success("Log out Successful")

				}
			},
			handleFormChange: (e) => {
				const { name, value } = e.target
				setStore({
					[name]: value
				})
			},
			activatePipo: (pipoId) => {
				const { access_token } = getStore()
				const url = `http://127.0.0.1:5000/pipos/${pipoId}/active`
				const options = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + access_token
					}
				}
				fetch(url, options)
					.then(response => {
						return response.json();
					})
					.then(data => {

						console.log(data)
						if (data.msg) toast.error(data.msg)
						else toast.success(data.success)

						getActions().getPipos()

					})
					.catch(error => {

						console.error(error.message);
					});
			},
			deletePipo: (pipoId) => {
				const { access_token } = getStore()
				const url = `http://127.0.0.1:5000/pipos/${pipoId}/delete`
				const options = {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + access_token
					}
				}
				fetch(url, options)
					.then(response => {
						return response.json();
					})
					.then(data => {

						console.log(data)
						if (data.msg) toast.error(data.msg)
						else toast.success(data.success)
						getActions().getPipos()
					})
					.catch(error => {

						console.error(error.message);
					});
			},
			handleRegisterPipo: (e) => {
				e.preventDefault()
				const { access_token, username } = getStore()

				registerPipo(access_token, username,)
			},
			registerPipo: async (credenciales) => {
				try {
					const { url } = getStore()
					const option = {
						method: 'POST',
						body: JSON.stringify(credenciales),
						headers: {
							'Content-type': 'application/json'
						}
					}

					const response = await fetch(`${url}/signup`, option)
					const datos = await response.json()

					if (datos.msg) {
						console.log(datos)
						if (data.msg) toast.error(data.msg)
						toast.success(data.success)
					} else {
						console.log(datos)
						toast.success(data.success)
						const { access_token, user } = datos
						setStore({
							access_token: access_token,
							current_user: user,
							username: '',
							email: '',
							password: '',

						})
						sessionStorage.setItem('access_token', access_token)
						sessionStorage.setItem('current_user', JSON.stringify(user))
					}

				} catch (error) {
					console.log(error.message)
				}

			},
			sendComment: (e, datos) => {
				e.preventDefault();

				const { access_token } = getStore()

				const url = `http://127.0.0.1:5000/pipo/14/comment`;
				const options = {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + access_token
					},
					body: JSON.stringify({
						comment: datos.userComment,
					})
				};

				fetch(url, options)
					.then(response => response.json())
					.then(datos => {


						console.log('Comentario Agregado', datos);
						;
					})
					.catch(error => console.error('Error al agregar comentario:', error));
			},

			sendRating: (rating, id) => {
				const { access_token } = getStore()
				const { getPipos } = getActions()
				const url = `http://127.0.0.1:5000/pipo/${id}/rate`;
				const options = {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + access_token
					},
					body: JSON.stringify({
						stars: rating,
					})
				};

				fetch(url, options)
					.then(response => response.json())
					.then(datos => {


						console.log('Rating Agregado', datos);
						getPipos()
					})
					.catch(error => console.error('Error al agregar comentario:', error));
				
			},
			cancelForm: () => {
				console.log("cancelForm called"); // Debug message
				console.log("setStore is:", setStore); // Check if setStore is defined and a function
				if (typeof setStore === "function") {
					setStore({
						username: "",
						email: "",
						password: "",
						repeatPassword: "",
						name: "",
						error: ""
					});
				} else {
					console.error("setStore is not a function");
				}
			},
		}
	};
};

export default getState;