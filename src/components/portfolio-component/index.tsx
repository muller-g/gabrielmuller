import "./index.css";

interface PortfolioComponent {
    image: string,
    link: string,
    title: string
}

export default function PortfolioComponent({image, link, title}: PortfolioComponent) {
    return(
        <div className="portfolio-component" onClick={() => window.open(link, '_blank')} style={{backgroundImage: `url("${image}")`}}>
            <h1>{title}</h1>
        </div>
    )
}