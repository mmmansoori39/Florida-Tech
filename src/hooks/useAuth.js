import { useContext } from "react";
import { AuthContex } from "../context/auth-context";

const useAuth= ()=>{
    return useContext(AuthContex);
};
export default useAuth;