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
                category_id: '',
                acceptedTerms: ''
            },
            tiendas: [],
            favorites: [],
            categories: [],
            value: []
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
                fetch("http://localhost:8080/registrotienda", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
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

            showArtesania: () => {
                const store = getStore();
                fetch('http://localhost:8080/categorias', {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({categoria: 1})
                }).then (res => res.json())
                .then ((data) => setStore({tiendas: data}))
            },

            showBelleza: () => {
                const store = getStore();
                fetch('http://localhost:8080/categorias', {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({categoria: 2})
                }).then (res => res.json())
                .then ((data) => setStore({tiendas: data}))
            },

            showJoyeria: () => {
                const store = getStore();
                fetch('http://localhost:8080/categorias', {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({categoria: 3})
                }).then (res => res.json())
                .then ((data) => setStore({tiendas: data}))
            },

            showMusica: () => {
                const store = getStore();
                fetch('http://localhost:8080/categorias', {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({categoria: 4})
                }).then (res => res.json())
                .then ((data) => setStore({tiendas: data}))
            },

            showPapeleria: () => {
                const store = getStore();
                fetch('http://localhost:8080/categorias', {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({categoria: 5})
                }).then (res => res.json())
                .then ((data) => setStore({tiendas: data}))
            },

            showVestuario: () => {
                const store = getStore();
                fetch('http://localhost:8080/categorias', {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({categoria: 6})
                }).then (res => res.json())
                .then ((data) => setStore({tiendas: data}))
            },

            showOtros: () => {
                const store = getStore();
                fetch('http://localhost:8080/categorias', {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({categoria: 7})
                }).then (res => res.json())
                .then ((data) => setStore({tiendas: data}))
            },

            getCategories: () => {
                fetch('http://localhost:8080/categories', {
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json"
                    }
                }).then (res => res.json())
                .then (data => setStore({categories: data}))
            }
        }
    }
}