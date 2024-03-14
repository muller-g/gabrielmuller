'use client';
import "./index.css";

interface ActionButton {
    onClick: any,
    text: string
}

export default function ActionButton({onClick, text}: ActionButton) {
    return(
        <button className="action-button" onClick={onClick}>{text}</button>
    )
}