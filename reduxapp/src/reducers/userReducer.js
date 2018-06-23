const userReducer = (state = {name: "Avinish", age: 26, address: 'Auraiya', users:[] }, action) => {
	switch(action.type) {
		case "ADD_NAME":     ///ADD_NAME_FULFILLED for promise
			state = {...state, name: action.payload};
			break;
		case "ADD_AGE":
			state = {...state, age: action.payload};
			break;
		case "SET_ADDRESS":
			state = {...state, address: action.payload};
		case "FETCH_USER":
			state = {...state, users:action.payload}
	}
	return state;
}

export default userReducer;