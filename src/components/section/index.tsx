import "./index.css";
import {ReactElement} from "react";

interface Section {
    children: ReactElement,
    id: string,
    color: string
}

export default function Section({children, id, color}: Section) {
    return(
        <section className="section" id={`${id}`} style={{backgroundColor: color}}>
            {children}
        </section>
    )
}