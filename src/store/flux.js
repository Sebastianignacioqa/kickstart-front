import { data } from "jquery";


export const getState = ({setStore, getStore, getActions}) => {

    return {
        store: {
            login: {rut:"", password:""},
            product: {item_title:"", item_description:"", item_stock:"", item_price:"", category:"", file:""},
            isAuth:localStorage.getItem("isAuth")
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
                if(data.msg === "User login success"){
                localStorage.setItem("isAuth", JSON.stringify(true));
                localStorage.setItem("access_token", JSON.stringify(data.access_token))
                history.push("/profile")
            }})
            .catch(error => {

                 console.log(error);
            })
            },

            handleChangeLogin: (evento) => {
                const {login} = getStore();
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
                if(data.msg === "User login success"){
                localStorage.setItem("isAuth", JSON.stringify(true));
                localStorage.setItem("access_token", JSON.stringify(data.access_token))
                history.push("/profile")
            }})
            .catch(error => {

                 console.log(error);
            })
            },

        },
        handlePostSubmit: (e) => {
            e.preventDefault();
            const input = document.querySelector('input[type="file"]')
            const data = new FormData()
            for (let i in input.files) {
                data.append('file', input.files[i])
            }
            data.append('user', 'hubot')
            console.log(data)
            fetch('http://localhost:8080/post', {
            "mode": "no-cors",
            method: 'POST',
            body: data
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
            console.log("Posteado",data);
        })
        .catch(error => {

             console.log(error);
        })
        },

        handleChangeProduct: (e) => {
            const {product} = getStore();
            setStore({
                product: { ...product, [e.target.name]: e.target.value }
            })
        },

        
    }
}
