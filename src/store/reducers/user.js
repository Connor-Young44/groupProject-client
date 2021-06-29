const initialState = {
  token: localStorage.getItem("token"),
  email: null,
  id: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/loginSuccess":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
