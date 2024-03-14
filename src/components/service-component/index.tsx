import "./index.css";

interface ServiceComponent {
    title: string,
    info: string,
    icon: any
}

export default function ServiceComponent({title, info, icon}: ServiceComponent){
    return(
        <div className="service-component">
            <div className="component-icon">
                <img src={icon} alt=""/>
            </div>
            <div className="component-info">
                <h3>{title}</h3>
                <p>{info}</p>
            </div>
        </div>
    )
}