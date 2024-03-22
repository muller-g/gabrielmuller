'use client';
import "./index.css";

interface LinksButton {
    text: string,
    url: string,
    icon: any
}

export default function LinksButton({text, url, icon}: LinksButton){
    return(
        <button className="my-link-button" onClick={() => window.open(url, '_blank')}>
            <div className="img-btn" style={{backgroundImage: `url("${icon.src}")`}}></div>
            <div className="text-btn">{text}</div>
        </button>
    )
}