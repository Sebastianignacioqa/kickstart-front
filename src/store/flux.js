export const getState = ({setStore, getStore, getActions}) => {

    return {
        store: {
            login: {rut:"", password:""}
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
                console.log("Logeo exisoto!",data);
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
                console.log("Logeo exisoto!",data);
            })
            .catch(error => {

                 console.log(error);
            })
            },


            handleChange: (e) => {
                const {login} = getStore();
                setStore({
                    login: { ...login, [e.target.name]: e.target.value }
                })
        },
            handleSubmit: (e) => {
            e.preventDefault();
            const store = getStore()
            console.log(store.login)
        }
    }
}
}