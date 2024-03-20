import "./index.css";
import right from "../../assets/right2.svg";

interface ServiceComponent {
    title: string,
    info: any,
    icon: any,
    i: number
}

export default function ServiceComponent({title, info, icon, i}: ServiceComponent){
    return(
        <div className="service-component" key={`service-comp-${i}`}>
            <div className="title-component">
                <div className="img-title">
                    <img src={icon} alt=""/>
                </div>
                <h1>{title}</h1>
            </div>
            {
                info?.map((item: any) => (
                    <div className="line-component">
                        <img src={right.src} alt=""/>
                        <span>{item}</span>
                    </div>
                ))
            }
        </div>
    )
}