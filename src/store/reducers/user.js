const initialState = {
  token: localStorage.getItem("token"),
  email: null,
  id: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/fetchFromValidToken":
      return { ...state, ...action.payload };
    case "user/loginSuccess":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    case "user/remove":
      localStorage.setItem("token", null);
      return initialState;
    default:
      return state;
  }
}
