import "./index.css";
import {ReactElement} from "react";

interface Container {
    children: ReactElement
}

export default function Container({children}: Container){
    return(
        <div className="container">
            {children}
        </div>
    )
}