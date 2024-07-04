import { KITTY_URL } from "../utils/constants";
import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err = useRouteError();
    return(
        <div className="errorpage">
            <img className="kittyimg" src={KITTY_URL}></img>
            <h1>Oops!</h1>
        <h2>Something went wrong!</h2> <h2>Try Again !!</h2>
        <h4>{err.status}:{err.statusText}</h4>
        </div>
    )
}
export default Error;