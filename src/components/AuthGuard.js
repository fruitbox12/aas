import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "src/actions/accountActions";

function AuthGuard({ children }) {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("accessToken"));
    console.log(user);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user,
      },
    });
  }, []);

  if (!account.user) {
    return <Redirect to="/home" />;
  }

  return children;
}

AuthGuard.propTypes = {
  children: PropTypes.any,
};

export default AuthGuard;
