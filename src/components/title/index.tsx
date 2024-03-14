import "./index.css";

interface Title {
    title: string,
    color: string
}

export default function Title({title, color}: Title){
    return(
        <div className="title-section">
            <h1 style={{color: color}}>{title}</h1>
        </div>
    )
}