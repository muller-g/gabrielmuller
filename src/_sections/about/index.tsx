'use client';
import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import ArrowDown from "@/components/arrow-down";
import Title from "@/components/title";
import ActionButton from "@/components/action-button";
import {scrollToSection} from "@/util/ScrollSmoth";

export default function AboutSection() {
    return(
        <Section id="about" color="#fff">
            <Container>
                <div className="about">
                    <Title title="Sobre mim" color="#111418" />
                    <p>Me chamo <span>Gabriel Müller</span>, tenho {new Date().getFullYear() - 1998} anos e atuo como desenvolvedor Full Stack a quase <span>{new Date().getFullYear() - 2019}</span> anos. Conheci a programação com 16 anos e desde então sigo estudando e aprimorando minhas habilidades.</p>
                    <p>Atualmente trabalho apenas como freelancer, não tendo vincúlo com nenhuma empresa. Porém estou sempre aberto a propostas.</p>
                    <div className="action-address">
                        <div className="wrapper">
                            <p>Cidade: Balneário Camboriú</p>
                            <p>Estado: Santa Catarina</p>
                        </div>
                        <div className="wrapper">
                            <ActionButton onClick={() => scrollToSection("#contact")} text="Contato" />
                        </div>
                    </div>
                    <div className="projects-count">
                        <div className="project">
                            <h3>{new Date().getFullYear() - 2019} +</h3>
                            <span>Anos de experiência</span>
                        </div>
                        <div className="project">
                            <h3>4</h3>
                            <span>Empresas trabalhadas</span>
                        </div>
                        <div className="project">
                            <h3>10+</h3>
                            <span>Clientes satisfeitos</span>
                        </div>
                        <div className="project">
                            <h3>10+</h3>
                            <span>Projetos realizados</span>
                        </div>
                    </div>
                    <ArrowDown ancor="services"/>
                </div>
            </Container>
        </Section>
    )
}