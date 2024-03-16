'use client';
import "./index.css";
import Container from "@/components/container";
import email from "@/assets/email.svg";
import instagram from "@/assets/instagram.svg";
import linkedin from "@/assets/linkedin.svg";
import github from "@/assets/github.svg";
import {scrollToSection} from "@/util/ScrollSmoth";

export default function Footer(){
    return(
        <footer className="footer">
            <Container>
                <>
                    <div className="footer-content">
                        <div className="footer-logo">
                            <h1>Gabriel</h1>
                            <h1>Müller</h1>
                        </div>
                        <div className="footer-nav">
                            <a onClick={() => scrollToSection("#home")}>Início</a>
                            <a onClick={() => scrollToSection("#about")}>Sobre</a>
                            <a onClick={() => scrollToSection("#services")}>Serviços</a>
                            <a onClick={() => scrollToSection("#portfolio")}>Portfólio</a>
                            <a onClick={() => scrollToSection("#resume")}>Experiência</a>
                            <a onClick={() => scrollToSection("#social")}>Social</a>
                            <a onClick={() => scrollToSection("#contact")}>Contato</a>
                        </div>
                        <div className="footer-social">
                            <a className="wrapper" href="mailto:gabriel_muller98@hotmail.com.br" target="_blank">
                                <img src={email.src} alt=""/>
                                <p>gabriel_muller98@hotmail.com</p>
                            </a>
                            <a className="wrapper" href="https://instagram.com/_muller.dev" target="_blank">
                                <img src={instagram.src} alt=""/>
                                <p>_muller.dev</p>
                            </a>
                            <a className="wrapper" href="https://www.linkedin.com/in/muller-g/" target="_blank">
                                <img src={linkedin.src} alt=""/>
                                <p>muller-g</p>
                            </a>
                            <a className="wrapper" href="https://github.com/muller-g" target="_blank">
                                <img src={github.src} alt=""/>
                                <p>muller-g</p>
                            </a>
                        </div>
                    </div>
                    <p>Criado e desenvolvido por Gabriel Müller, 2024</p>
                </>
            </Container>
        </footer>
    )
}