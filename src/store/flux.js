export const getState = ({setStore, getStore, getActions}) => {
    return {
        store: {
            userForm: {
                name: '',
                lastname: '',
                RUT: '',
                password: '',
				mail: '',
                address: '',
                phonenumber: ''
            },

        },
        actions: {
            handleChange: (e) => {
                const store = getStore();
                setStore({
                    userForm: { ...store.userForm, [e.target.name]: e.target.value }
                })
            }

        }
    };

}