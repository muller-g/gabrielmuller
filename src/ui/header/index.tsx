'use client';
import "./index.css";
import Container from "@/components/container";
import ActionButton from "@/components/action-button";
import {scrollToSection} from "@/util/ScrollSmoth";
import {useEffect, useState} from "react";
import burger from "../../assets/burger.svg";
import close from "../../assets/close.svg";

export default function Header(){
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [visibleAction, setVisibleAction] = useState<boolean>(false);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(scrollPosition >= 120){
            setVisibleAction(true)
        } else {
            setVisibleAction(false)
        }

    }, [scrollPosition,]);

    function showMenu(){
        document.querySelector<HTMLElement | any>('.header .header-wrapper ul').classList.toggle('show-mob');
    }

    return(
        <header className="header" style={visibleAction ? {borderBottom: '2px solid #AD00FF'} : {borderBottom: '0px'}}>
            <Container>
                <div className="header-wrapper">
                    <div className="logo-content">
                        <a onClick={() => scrollToSection("#home")}>Gabriel Müller</a>
                    </div>
                    <ul>
                        <button className="burger-menu" onClick={showMenu}><img src={close.src} alt=""/></button>
                        <li><a onClick={() => scrollToSection("#home")}>Início</a></li>
                        <li><a onClick={() => scrollToSection("#about")}>Sobre</a></li>
                        <li><a onClick={() => scrollToSection("#services")}>Serviços</a></li>
                        <li><a onClick={() => scrollToSection("#portfolio")}>Portfólio</a></li>
                        <li><a onClick={() => scrollToSection("#resume")}>Experiência</a></li>
                        <li><a onClick={() => scrollToSection("#social")}>Social</a></li>
                        <ActionButton onClick={() => scrollToSection("#contact")} text="Contato"/>
                    </ul>
                    <button className="burger-menu" onClick={showMenu}><img src={burger.src} alt=""/></button>
                </div>
            </Container>
        </header>
    )
}