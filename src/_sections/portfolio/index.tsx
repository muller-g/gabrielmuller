'use client';
import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import ArrowDown from "@/components/arrow-down";
import Title from "@/components/title";
import PortfolioComponent from "@/components/portfolio-component";

export default function PortfolioSection() {
    const services = [1,2,3,4,5,6]
    return(
        <Section id="portfolio" color="#fff">
            <Container>
                <div className="portfolio">
                    <Title title="Portfólio" color="#111418" />
                    <div className="grid-portfolio">
                        {
                            services.map((item: any, i: number) => (
                                <PortfolioComponent link={""} image={"https://s3.amazonaws.com/images.seroundtable.com/google-amp-1454071566.jpg"} title={"Fast Sale"}/>
                            ))
                        }
                    </div>
                    <ArrowDown ancor="resume"/>
                </div>
            </Container>
        </Section>
    )
}