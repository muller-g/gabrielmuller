import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import ArrowDown from "@/components/arrow-down";

export default function HomeSection() {
    return(
        <Section id="home" color="#fff">
            <Container>
                <div className="home">
                    <h1 className="home-title">Desenvolvedor <span>Full Stack</span></h1>
                    <div className="home-wrapper">
                        <div className="img-content"></div>
                        <div className="text-content">
                            <p>Desenvolvo soluções tecnológicas de ponta para otimizar processos, impulsionar resultados e superar desafios em sua jornada.</p>
                            <span>"Inovação é a chave para o sucesso." - Bill Gates</span>
                        </div>
                    </div>
                    <ArrowDown ancor="about" />
                </div>
            </Container>
        </Section>
    )
}