import { data } from "jquery";


export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            login: { rut: "", password: "" },
            product: { item_title: "", item_description: "", item_stock: "", item_price: "", category: ""},

            isAuth: localStorage.getItem("isAuth")
        },
        actions: {

            handleSubmitLogin2: (evento, history) => {
                evento.preventDefault()
                const store = getStore();
                fetch('http://localhost:8080/login2', {
                    method: "POST",
                    mode: "cors",
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
                        if (data.msg === "User login success") {
                            localStorage.setItem("isAuth", JSON.stringify(true));
                            localStorage.setItem("access_token", JSON.stringify(data.access_token))
                            history.push("/profile")
                            
                        }
                    })
                    .catch(error => {

                        console.log(error);
                    })
            },

            handleChangeLogin: (evento) => {
                const { login } = getStore();
                setStore({
                    login: { ...login, [evento.target.name]: evento.target.value }
                })
            },
            handleSubmitLogin1: (evento, history) => {
                evento.preventDefault()
                const store = getStore();
                fetch('http://localhost:8080/login', {
                    method: "POST",
                    mode: "cors",
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
                        if (data.msg === "User login success") {
                            console.log(data)
                            localStorage.setItem("isAuth", JSON.stringify(true));
                            localStorage.setItem("access_token", JSON.stringify(data.access_token))
                            history.push("/profile")
                        
                        }
                        else console.log(data)
                    })
                    .catch(error => {

                        console.log(error);
                    })
            },

            handleFileSubmit: (evento) => {
                evento.preventDefault();
                const store = getStore()
                const input = document.querySelector('input[type="file"]')
                const data = new FormData()
                for (let i in input.files) {
                    data.append('file', input.files[i])
                }
                data.append('item_title', store.product.item_title)
                data.append('item_description', store.product.item_description)
                data.append('item_stock', store.product.item_stock)
                data.append('item_price', store.product.item_price)
                data.append('category', store.product.category)
                data.append('user', 'hubot')
                console.log(data)
                fetch('http://localhost:8080/post', {
                    "mode": "no-cors",
                    method: 'POST',
                    body: data
                })
                    
            },
            handlePostSubmit: (evento, history) => {
                evento.preventDefault();
                const {product} = getStore()
                console.log(data)
                fetch('http://localhost:8080/product', {
                    "mode": "cors",
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": 'application/json',
                    },
                    body: JSON.stringify(product)
                })
                    .then(resp => {
                        return resp.json();
                    })
                    .then(data => {
                        console.log(data)
                        history.push("/tienda")
                    })
                    .catch(error => {

                        console.log(error);
                    })
            },
            getProduct: () => {
                const store = getStore();
                fetch('http://localhost:8080/product', {
                    "mode": "no-cors",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": 'application/json',
                    },
                    body: JSON.stringify(store.product)
                })
                    .then(resp => {
                        return resp.json();
                    })
                    .then(data => {
                        console.log("Posteado", data);
                    })
                    .catch(error => {

                        console.log(error);
                    })
            },
            handleChangeProduct: (evento) => {
                const { product } = getStore();
                product[evento.target.name] = evento.target.value;
                setStore({
                    product
                })
            },

        },
    }
}

