export const SET_USER='SET_USER';
export const CLEAR_USER='CLEAR_USER';

export const SignIn = (user:any) => {
    return{
        type: SET_USER,
        payload: user
    }
};

export const SignOut = () => ({
    type: CLEAR_USER
});