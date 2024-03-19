'use client';
import "./index.css";

interface InstagramComponent {
    image: string,
    link: string,
    title: string
}

export default function InstagramComponent({image, link, title}: InstagramComponent) {
    return(
        <div className="instagram-component" onClick={() => window.open(link, '_blank')} style={{backgroundImage: `url("${image}")`}}>
            <h1>{title.split("#")[0]}</h1>
        </div>
    )
}