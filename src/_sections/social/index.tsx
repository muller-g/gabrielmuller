'use client';
import "./index.css";
import Section from "@/components/section";
import Container from "@/components/container";
import ArrowDown from "@/components/arrow-down";
import Title from "@/components/title";
import InstagramComponent from "@/components/instagram-component";
import {useEffect, useState} from "react";
import axios from "axios";

export default function SocialSection() {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API + "/posts", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_TOKEN
            }
        }).then((res: any) => {
            console.log(res)
            setData(res.data)
        })
    }, []);

    return(
        <Section id="social" color="#fff">
            <Container>
                <div className="social">
                    <Title title="Acompanhe no Instagram" color="#111418" />
                    <div className="grid-portfolio">
                        {
                            data?.data?.slice(0, 10)?.map((item: any, i: number) => (
                                <InstagramComponent link={item.permalink} image={item.media_url} title={item.caption} key={`insta-component-${i}`}/>
                            ))
                        }
                    </div>
                    <ArrowDown ancor="contact"/>
                </div>
            </Container>
        </Section>
    )
}