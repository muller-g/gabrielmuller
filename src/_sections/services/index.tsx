'use client';
import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import ArrowDown from "@/components/arrow-down";
import Title from "@/components/title";
import ServiceComponent from "@/components/service-component";
import monitor from "../../assets/monitor.svg";

export default function ServicesSection() {
    const services = [1,2,3,4,5,6]
    return(
        <Section id="services" color="#111418">
            <Container>
                <div className="services">
                    <Title title="Meus serviços" color="#fff" />
                    <div className="grid-services">
                        {
                            services.map((item: any, i: number) => (
                                <ServiceComponent title="Web design" info="Criação de sistema web, atraente, responsivo." icon={monitor} />
                            ))
                        }
                    </div>
                    <ArrowDown ancor="portfolio"/>
                </div>
            </Container>
        </Section>
    )
}