'use client';
import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import Title from "@/components/title";
import emailIcon from "../../assets/email.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import WppButton from "@/components/wpp-button";
import {useState} from "react";
import postData from "@/util/fetchPost";

export default function ContactSection() {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [msg, setMsg] = useState<string>();

    async function sendMail(){
        if(!name || !email || !phone || !msg){
            alert("Preencha todos os campos")
            return
        }
        document.querySelector<HTMLElement | any>('.contact .grid-info .form-send p').classList.add('send-success')
        await postData(`/send-mail`, {
            name: name,
            email: email,
            phone: phone,
            msg: msg
        })
    }

    return(
        <Section id="contact" color="#111418">
            <Container>
                <div className="contact">
                    <Title title="Contato" color="#fff" />
                    <div className="grid-info">
                        <div className="form-send">
                            <legend>Seu nome</legend>
                            <input type="text" onChange={(e) => setName(e.target.value)}/>
                            <legend>Seu e-mail</legend>
                            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                            <legend>Seu telefone</legend>
                            <input type="text" onChange={(e) => setPhone(e.target.value)}/>
                            <legend>Deixe sua mensagem</legend>
                            <textarea name="" id="" rows={10} onChange={(e) => setMsg(e.target.value)}></textarea>
                            <button onClick={sendMail}>Enviar</button>
                            <p>Enviado com sucesso!</p>
                        </div>
                        <div className="contact-info">
                            <h1>Me mande uma mensagem</h1>
                            <a className="wrapper" href="mailto:gabriel_muller98@hotmail.com.br" target="_blank">
                                <img src={emailIcon.src} alt=""/>
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