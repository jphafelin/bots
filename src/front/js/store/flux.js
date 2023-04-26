const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			tipo_evento: [],
			evento: [],
			token: null,
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			syncTokenFromLocalStorage: () => {
				const token = localStorage.getItem("token");
				if(token && token != "" && token != undefined) setStore({ token: token })
			}, 

			login: async(username, password) => {
				const opts = {
					method: 'POST',
					headers: {
					  "Content-Type": "application/json"
					},
					body: JSON.stringify({
					  "username":username,
					  "password": password
					})
				  }
			  
			try{
				  const resp = await fetch("https://3001-jphafelin-bots-dt0imnzcy8x.ws-eu95.gitpod.io/api/token", opts)
				  if (resp.status !== 200){

				   alert ("There has been some error");
				return false; 
				}
				
				const data = await resp.json();
				localStorage.setItem("token", data.access_token)
				setStore({ token: data.access_token })
				return true;
			}

			catch(error){
				console.error("There has been an error login in")
			}
					
					
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
                const url = "https://3001-jphafelin-bots-8ldo44emw7c.ws-eu95.gitpod.io/api/empresa/";
                const requestOptions = {
                    method: "GET",
                    ContentType: "application/json",
                }
				
                const response = await fetch(url, requestOptions);
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    console.log(" Datos Empresas: ", data.results);
                    setStore({
                        tipo_evento: data.results,
                    });
                }
            },
			getEvento: async () => {
				
                const store = getStore();
                const host = process.env.BACKEND_URL;
                const url = "https://3001-jphafelin-bots-8ldo44emw7c.ws-eu95.gitpod.io/api/empresa/"+ localStorage.getItem("id_empresa");
                const requestOptions = {
                    method: "GET",
                    ContentType: "application/json",
                }
				
                const response = await fetch(url, requestOptions);
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    console.log(" Datos Empresa Actual: ", data.result);
                    setStore({
                        evento: data.result,
                    });
					
					
                }
            },
		//}
		
			
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
