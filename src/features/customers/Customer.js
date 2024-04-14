import { useSelector } from "react-redux";

function Customer() {
  //IN ORDER TO READ DATA FROM THE REDUX STORE  ALL WE HAVE TO DO IS TO USE useSelect Hook that is provided by react-redux
  const customer = useSelector((store) => store.customer.fullName);
  const { fullName } = customer;
  return <h2>👋 Welcome,{fullName}</h2>;
}

export default Customer;
