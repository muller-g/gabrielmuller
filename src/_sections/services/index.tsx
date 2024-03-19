'use client';
import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import ArrowDown from "@/components/arrow-down";
import Title from "@/components/title";
import ServiceComponent from "@/components/service-component";
import data from "../../data/DataFile";

export default function ServicesSection() {
    return(
        <Section id="services" color="#111418">
            <Container>
                <div className="services">
                    <Title title="Meus serviços" color="#fff" />
                    <div className="grid-services">
                        {
                            data.data.services.map((item: any, i: number) => (
                                <ServiceComponent key={`service-comp-${i}`} title={item.title} info={item.info} icon={item.icon.src} />
                            ))
                        }
                    </div>
                    <ArrowDown ancor="portfolio"/>
                </div>
            </Container>
        </Section>
    )
}