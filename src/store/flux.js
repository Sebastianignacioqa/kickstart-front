export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            login: { rut: "", password: "" },
            product: { item_title: "", item_description: "", item_stock: "", item_price: "", category_id: "", sellerID: ""},
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
            favoritos: [],
            categories: [],
            value: [],
            productos: [],
            categoria:[],
            wishlist: [],
            storename: [],
            profiletienda: [],

            isAuth: localStorage.getItem("isAuth"),
            sellerID: JSON.parse(localStorage.getItem("sellerID")),
            buyerID: JSON.parse(localStorage.getItem("sellerID"))
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
                            history.push("/categorias")
                            localStorage.setItem("buyerID", JSON.stringify(data.buyer))
                            
                            
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
                            localStorage.setItem("sellerID", JSON.stringify(data.seller))
                            setStore({sellerID: data.seller.id})
                            setStore({product: {...store.product, sellerID:data.seller.id}})
                            history.push("/post")
                        
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
                const store = getStore()
                
                
                fetch('http://localhost:8080/product', {
                    "mode": "cors",
                    method: 'POST',
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
                        console.log(data)
                        
                        history.push("/profiletienda")
                        
                    })
                    .catch(error => {

                        console.log(error);
                    })
            },

            getSignUp: (values, history) => {
                const store = getStore();
                fetch("http://localhost:8080/registrotienda", {
                    mode: "cors",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    history.push("/login")
                })
                .catch(error => {
                    console.log(error)
                })
            },

            getSignUp2: (values, history) => {
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
                    history.push("/login2")
                })
                .catch(error => {
                    console.log(error);

                })
            },

            handleChangeProduct: (evento) => {
                const { product } = getStore();
                setStore({
                    product: { ...product, [evento.target.name]: evento.target.value }
                })
                console.log(evento.target.value)
            },

            getCategories: () => {
                fetch('http://localhost:8080/categories', {
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json"
                    }
                }).then (res => res.json())
                .then (data => setStore({categories: data}))
            },
            
            getProducts: () => {
                fetch('http://localhost:8080/product', {
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json"
                    }
                }).then (res => res.json())
                .then (data => setStore({productos: data}))
            },

            getStorename: () => {
                fetch('http://localhost:8080/storename', {
                    method: "GET",
                    headers: {
                        "Content-Type":"application/json"
                    }
                }).then (res => res.json())
                .then (data => setStore({storename: data}))
            },

            showTienda: (category_id) => {
                const store = getStore();
                fetch('http://localhost:8080/categorias', {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({categoria: category_id})
                }).then (res => res.json())
                .then ((data) => setStore({tiendas: data}))
            },

            showProfile: (id) => {
                const store = getStore();
                fetch('http://localhost:8080/profiletienda', {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({profiletienda: id})
                }).then (res => res.json())
                .then ((data) => setStore({profiletienda: data}))
            },

            deleteElement: (nombre) => {
                const store = getStore()
                setStore({favoritos: store.favoritos.filter((i, index)=> {
                    if(index === nombre){
                        return false
                    } else {
                       return true
                    }
                })})},
    
            addFav: (index) => {
                console.log(index, "Probando agregar a favoritos")
                const store = getStore()
                setStore({favoritos: store.favoritos.concat(index)})
    
            },

            addProduct: (index) => {
                const store = getStore()
                setStore({wishlist: store.wishlist.concat(index)}) 
                
            },
            deleteProduct: (nombre) => {
                const store = getStore()
                setStore({wishlist: store.wishlist.filter((i, index)=> {
                    if(index === nombre){
                        return false
                    } else {
                       return true
                    }
                })})},
        }
    }
}