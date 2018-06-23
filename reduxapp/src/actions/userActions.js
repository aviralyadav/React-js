import axios from 'axios';

export const setName = (name) =>{
	// return {            /////////for promise middle ware
	// 	type: "ADD_NAME",
	// 	payload: new Promise((resolve, reject) => {
	// 		setTimeout(()=> {
	// 			resolve(name);
	// 		}, 2000);
	// 	})
	// };
	return dispatch => {
		setTimeout(()=>
			dispatch({
				type:"ADD_NAME",
				payload: name
			})
			, 2000);
	};
};
export const setAge = (age) => {
	return {
		type: "ADD_AGE",
		payload: age
	};
};
export const setAddress = (address) => {
	return {
		type: "SET_ADDRESS",
		payload: address
	}
};
export const getUsers = () => {
	let url = 'http://localhost:8080/users';
	
	return function(dispatch) {
    //axios.get(url)
    axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
    .then(response => {
    	console.log(response.data);
      dispatch({
        type: "FETCH_USER",
        payload: response.data
      });
    })
}
};
