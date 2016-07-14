let UseToken = {
  login: ({username, jwt}) => {
    localStorage.setItem("jwt", jwt);
    Dispatcher.dispatch({
      username: username,
      jwt: jwt
    });
  }
};

export default UseToken;
