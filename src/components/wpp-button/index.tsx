'use client';
import "./index.css";
import wpp from "../../assets/whatsapp.svg";
import {useState} from "react";

export default function WppButton() {
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
    function sendMessage(){
        if(windowSize >= 700){
            window.open('https://web.whatsapp.com/send?phone=5547997003649&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20%F0%9F%98%80', '_blank');
        } else {
            window.open('https://api.whatsapp.com/send?phone=5547997003649&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20%F0%9F%98%80', '_blank');
        }
    }

    return(
        <button className="wpp-button" onClick={sendMessage}><img src={wpp.src} alt=""/>Whatsapp</button>
    )
}