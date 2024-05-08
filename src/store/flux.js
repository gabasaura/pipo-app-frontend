const getState = ({ getStore, getActions, setStore}) => {
    return {
        store:{
            email: '',
            password: null,
            current_user: null,
            error: '',
            token: null

        },
        actions:{
            handleLogin: () => {},
            handleRegister: () => {},
            handleLogout: () => {},
            login: () => {},
            register: () => {},
        }

    }

}
export default getState