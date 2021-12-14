const initialState = {
    token: "",
    userId: "",
    userName: "",
  };
  
  export const giveToken = (token, userId, userName) => {
    return {
      type: "SET_TOKEN",
      payload: { token, userId, userName },
    };
  };
  
  const tokenX = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_TOKEN":
        return {
          token: payload.token,
          userId: payload.userId,
          userName: payload.userName,
        };
  
      default:
        return state;
    }
  };
  
  export default tokenX;