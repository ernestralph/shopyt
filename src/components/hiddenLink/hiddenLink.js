import { useSelector } from "react-redux"

const ShowOnLogin = ({children})=>{
 const { isLoggedIn} = useSelector((state)=> state.auth);
 if(isLoggedIn){
  return children;
 }
 return null;
}
export const ShowOnLogOut = ({children})=>{
 const { isLoggedIn} = useSelector((state)=> state.auth);
 if(!isLoggedIn){
  return children;
 }
 return null;
}

export default ShowOnLogin