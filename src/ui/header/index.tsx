'use client';
import "./index.css";
import Container from "@/components/container";
import ActionButton from "@/components/action-button";
import {scrollToSection} from "@/util/ScrollSmoth";

export default function Header(){
    return(
        <header className="header">
            <Container>
                <div className="header-wrapper">
                    <div className="logo-content">
                        <a href="#">Gabriel Müller</a>
                    </div>
                    <ul>
                        <li><a onClick={() => scrollToSection("#home")}>Início</a></li>
                        <li><a onClick={() => scrollToSection("#about")}>Sobre</a></li>
                        <li><a onClick={() => scrollToSection("#services")}>Serviços</a></li>
                        <li><a onClick={() => scrollToSection("#home")}>Portfólio</a></li>
                        <li><a onClick={() => scrollToSection("#home")}>Experiência</a></li>
                        <li><a onClick={() => scrollToSection("#home")}>Social</a></li>
                        <ActionButton onClick={""} text="Contato" />
                    </ul>
                </div>
            </Container>
        </header>
    )
}