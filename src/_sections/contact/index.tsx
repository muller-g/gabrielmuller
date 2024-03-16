'use client';
import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import Title from "@/components/title";
import email from "../../assets/email.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import WppButton from "@/components/wpp-button";

export default function ContactSection() {
    return(
        <Section id="contact" color="#111418">
            <Container>
                <div className="contact">
                    <Title title="Contato" color="#fff" />
                    <div className="grid-info">
                        <div className="form-send">
                            <legend>Seu nome</legend>
                            <input type="text"/>
                            <legend>Seu e-mail</legend>
                            <input type="email"/>
                            <legend>Seu telefone</legend>
                            <input type="text"/>
                            <legend>Deixe sua mensagem</legend>
                            <textarea name="" id="" rows={10}></textarea>
                            <button>Enviar</button>
                        </div>
                        <div className="contact-info">
                            <h1>Me mande uma mensagem</h1>
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
                            <WppButton />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}