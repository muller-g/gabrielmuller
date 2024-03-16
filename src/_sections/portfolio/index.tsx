'use client';
import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import ArrowDown from "@/components/arrow-down";
import Title from "@/components/title";
import PortfolioComponent from "@/components/portfolio-component";
import data from "../../data/DataFile";

export default function PortfolioSection() {
    return(
        <Section id="portfolio" color="#fff">
            <Container>
                <div className="portfolio">
                    <Title title="Portfólio" color="#111418" />
                    <div className="grid-portfolio">
                        {
                            data.data.portfolio.map((item: any, i: number) => (
                                <PortfolioComponent link={item.link} image={item.img.src} title={item.title}/>
                            ))
                        }
                    </div>
                    <ArrowDown ancor="resume"/>
                </div>
            </Container>
        </Section>
    )
}