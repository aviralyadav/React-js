import { createSelector } from 'reselect';

const getError = state => state.authReducer.loginError;

export const getErrorState = createSelector(
    getError, 
    (err) => err
);

const getSuccess = state => state.authReducer.isLoginSuccess;

export const getLoginSuccessState = createSelector(
    getSuccess, 
    (success) => success
);

const getPending = state => state.authReducer.isLoginPending;

export const getLoginPendingState = createSelector(
    getPending, 
    (pending) => pending
);

// const getBar = (state, props) => {   //// for multiple intances
//     const id = props.id
//     const barById = state.foo.bar.find((item,i) => item.id === id)
//     return barById
//   }

// export const makeGetBarState = () => createSelector(  //// for multiple intances
//     getBar,
//     (bar) => bar
//   )


//   const makeMapStateToProps = () => {   //// in component
//     const getBarState = makeGetBarState()
//     return (state, props) => getBarState(state, props)
//   }