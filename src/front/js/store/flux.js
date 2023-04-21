const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			tipo_evento: [],
			evento: [],
			user: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			getTipo_de_Eventos: async () => {
                const store = getStore();
                const host = process.env.BACKEND_URL;
                const url = "https://3001-jphafelin-bots-5bkbvrv5v9s.ws-eu94.gitpod.io/api/empresa/";
                const requestOptions = {
                    method: "GET",
                    ContentType: "application/json",
                }
				
                const response = await fetch(url, requestOptions);
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    console.log(" Data Empresa: ", data.results);
                    setStore({
                        tipo_evento: data.results,
                    });
                }
            },
			getEvento: async () => {
                const store = getStore();
                const host = process.env.BACKEND_URL;
				const id_empresa = localStorage.getItem("id_empresa") 
				//if (id_empresa != "") {
                const url = "https://3001-jphafelin-bots-5bkbvrv5v9s.ws-eu94.gitpod.io/api/empresa/"+ id_empresa;
                const requestOptions = {
                    method: "GET",
                    ContentType: "application/json",
                }
                const response = await fetch(url, requestOptions);
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    console.log(" Data Administrador: ", data.results);
                    setStore({
                        evento: data.results,
                    });
                }
            }//}
			,
			getUserInfo: async () => {
                const requestOptions = {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    },
                }
                const userId = JSON.parse(localStorage.getItem("userId"))
                try {
                    const response = await fetch(`https://3001-jphafelin-bots-5bkbvrv5v9s.ws-eu94.gitpod.io/api/empresa/${userId.id}`, requestOptions)
                    const user = await response.json();
                    setStore({
                        ...getStore(),
                        user
                    })
                } catch (error) {
                    console.log(error);
                };
            },
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
