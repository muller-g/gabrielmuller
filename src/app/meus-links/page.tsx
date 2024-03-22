import "./index.css";
import me from "../../assets/eu.jpeg";
import LinksButton from "@/components/links-button";
import www from "../../assets/www.png";
import wpp from "../../assets/wpp.jpg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export default function MeusLinks() {
    return (
        <main className="my-links">
            <div className="my-links-container">
                <div className="title-img" style={{backgroundImage: `url("${me.src}")`}}></div>
                <h1 className="instagram-title">@_muller.dev</h1>
                <p className="description">Vamos colocar seu projeto na internet e alcançar seus objetivos!</p>
                <div className="redirect-links">
                    <LinksButton text={'Acesse meu site'} url={'https://gabrielmullerdev.com.br'} icon={www} />
                    <LinksButton text={'Fale comigo'} url={'https://web.whatsapp.com/send?phone=5547997003649&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20%F0%9F%98%80'} icon={wpp} />
                    <LinksButton text={'Linkedin'} url={'https://www.linkedin.com/in/muller-g/'} icon={linkedin} />
                    <LinksButton text={'GitHub'} url={'https://github.com/muller-g'} icon={github} />
                </div>
            </div>
        </main>
    );
}
