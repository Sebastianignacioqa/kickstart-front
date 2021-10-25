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
            },
            categoria: ""
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
            },
            handlePostSubmit: (e) => {
                e.preventDefault();
                const input = document.querySelector('input[type="file"]')
                const data = new FormData()
                for (let i in input.files) {
                    data.append('file', input.files[i])
                }
                /* data.append('file', input.files) */
                data.append('user', 'hubot')
                console.log(data)
                fetch('http://localhost:8080/post', {
                "mode": "no-cors",
                method: 'POST',
                body: data
                })
            },
            sendCategoria: () => {
                const store = getStore();
                fetch('http://localhost:8080/categorias', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({categoria: 'musica'})
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