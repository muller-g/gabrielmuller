'use client';
import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import ArrowDown from "@/components/arrow-down";
import {scrollToSection} from "@/util/ScrollSmoth";
import me from "../../assets/8640627.png";

export default function HomeSection() {
    return(
        <Section id="home" color="#111418">
            <Container>
                <div className="home">
                    <div className="home-about">
                        <h3>Full Stack</h3>
                        <h1>Gabriel Muller</h1>
                        <p>Sou um apaixonado desenvolvedor que se dedica a criar soluções inovadoras para uma variedade de áreas, focando em excelência e comprometimento para garantir resultados sólidos e confiáveis</p>
                    </div>
                    <div className="home-social">
                        <h3>Serviços</h3>
                        <p>Veja os serviços que ofereço, posso te ajudar a melhorar suas vendas ou soluções</p>
                        <a onClick={() => scrollToSection("#services")}>
                            Confira
                            <svg fill="#000000" width="800px" height="800px" viewBox="-8.5 0 32 32" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>right</title>
                                <path
                                    d="M7.75 16.063l-7.688-7.688 3.719-3.594 11.063 11.094-11.344 11.313-3.5-3.469z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="highlight">
                        {/*<img src={me.src} alt=""/>*/}
                    </div>
                    <ArrowDown ancor="about"/>
                </div>
            </Container>
            {/*<span>"Inovação é a chave para o sucesso." - Bill Gates</span>*/}
        </Section>
    )
}