'use client';
import "./index.css";

interface Service {
    text: string,
    title: string,
    icon: any
}

export default function Service({text, title, icon}: Service){
    return(
        <div className="service">
            <div className="service-img">
                {icon}
            </div>
            <div className="service-content">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}