import { TRY_AUTH } from './actionTypes';

export const onLogin = authData => {
    return {
        type: TRY_AUTH,
        authData: authData
    }
}

