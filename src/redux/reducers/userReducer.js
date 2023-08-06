const userReducer = (
  state = {
    loggedIn: false,
  },
  action
) => {
  switch (action.type) {
    case "USER_LOGIN_PENDING":
      return {
        ...state,
        loading: true,
        loggedIn: false,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        loading: false,
      };
    case "USER_LOGIN_FAILED":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
