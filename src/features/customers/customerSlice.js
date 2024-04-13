const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
export function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}
/*
store.dispatch(createCustomer("shubham goswami", "254848"));
console.log(store.getState());
store.dispatch(deposit(250));
console.log(store.getState());
*/
