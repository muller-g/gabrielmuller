'use client';
import "./index.css";
import {scrollToSection} from "@/util/ScrollSmoth";

interface ArrowDown {
    ancor: string
}

export default function ArrowDown({ancor}: ArrowDown){
    return(
        <a className="arrow-down" onClick={() => scrollToSection(`#${ancor}`)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="Double down">
                    <path
                        d="M12 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 14.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 17z"
                        style={{fill:"#AD00FF"}}/>
                    <path
                        d="M12 13a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 12 13z"
                        style={{fill:"#AD00FF"}}/>
                </g>
            </svg>
        </a>
    )
}