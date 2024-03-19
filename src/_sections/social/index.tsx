import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import ArrowDown from "@/components/arrow-down";
import Title from "@/components/title";
import fetchData from "@/util/fetchData";
import InstagramComponent from "@/components/instagram-component";

export default async function SocialSection() {
    const posts: Response | any = await fetchData(`/posts`);

    return(
        <Section id="social" color="#fff">
            <Container>
                <div className="social">
                    <Title title="Acompanhe no Instagram" color="#111418" />
                    <div className="grid-portfolio">
                        {
                            posts?.data?.slice(0, 10)?.map((item: any, i: number) => (
                                <InstagramComponent link={item.permalink} image={item.media_url} title={item.caption}/>
                            ))
                        }
                    </div>
                    <ArrowDown ancor="contact"/>
                </div>
            </Container>
        </Section>
    )
}