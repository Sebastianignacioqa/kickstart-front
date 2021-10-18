export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            login: { rut: "", password: "" },
            signUpForm: {
                firstname: '',
                lastname: '',
                rut: '',
                email: '',
                password: '',
                address: '',
                phonenumber: '',
                storename: '',
                link: '',
                category: '',
                acceptedTerms: ''
            }
        },
        actions: {
            getLogin: () => {
                const store = getStore();
                fetch('http://localhost:8080/login', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": 'application/json',
                    },
                    body: JSON.stringify(store.login)
                })
                    .then(resp => {
                        return resp.json();
                    })
                    .then(data => {
                        console.log("Logeo exisoto!", data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },

            getLogin2: () => {
                const store = getStore();
                fetch('http://localhost:8080/login2', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": 'application/json',
                    },
                    body: JSON.stringify(store.login)
                })
                    .then(resp => {
                        return resp.json();
                    })
                    .then(data => {
                        console.log("Logeo exisoto!", data);
                    })
                    .catch(error => {

                        console.log(error);
                    })
            },

            handleChange: (e) => {
                const { login } = getStore();
                setStore({
                    login: { ...login, [e.target.name]: e.target.value },
                })
            },

            handleSubmit: (e) => {
                e.preventDefault();
                const store = getStore()
                console.log(store.login);
            },

            getSignUp: (values) => {
                const store = getStore();
                fetch('http://localhost:8080/registrotienda', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);

                })

                
            },

            getSignUp2: (values) => {
                const store = getStore();
                fetch('http://localhost:8080/registrocomprador', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);

                })

                
            }
        }
    }
}