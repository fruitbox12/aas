import authService from "src/services/authService";
import axios from "src/utils/axios";

export const LOGIN_REQUEST = "@account/login-request";
export const LOGIN_SUCCESS = "@account/login-success";
export const LOGIN_FAILURE = "@account/login-failure";
export const SILENT_LOGIN = "@account/silent-login";
export const LOGOUT = "@account/logout";
export const REGISTER = "@account/register";
export const UPDATE_PROFILE = "@account/update-profile";
export const UPDATE_USER = "@account/update-user";

export function loginUsingMetaMask() {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const user = await authService.loginWithMetaMask();
      // console.log("actions: ", user)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          // user: { ...user, ...walletInfo },
          user: user,
        },
      });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
      throw error;
    }
  };
}

export function loginUsingWeb3(account) {
  // console.log('log in account: ', account);
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const user = { account };
      localStorage.setItem("accessToken", JSON.stringify(user));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
      throw error;
    }
  };
}

export function login(email, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const user = await authService.loginWithEmailAndPassword(email, password);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
      throw error;
    }
  };
}

export function setUserData(user) {
  return (dispatch) =>
    dispatch({
      type: SILENT_LOGIN,
      payload: {
        user,
      },
    });
}

export function logout() {
  return async (dispatch) => {
    authService.logout();

    dispatch({
      type: LOGOUT,
    });
  };
}

export function register() {
  return true;
}

export function updateProfile(update) {
  const request = axios.post("/api/account/profile", { update });

  return (dispatch) => {
    request.then((response) =>
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data,
      })
    );
  };
}

export function updateUser(param, value) {
  // return (dispatch) => {
  return {
    type: UPDATE_USER,
    payload: { param: param, value: value },
  };
  // };
}
