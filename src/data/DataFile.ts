import monitor from "../assets/monitor.svg";
import database from "../assets/database.svg";
import integration from "../assets/node.svg";
import resp from "../assets/cellphone.svg";
import bug from "../assets/bug.svg";
import chip from "../assets/chip.svg";
import fast from "../assets/fastsale.png";
import datacrazy from "../assets/datacrazy.png";
import anavargas from "../assets/anavargas.png";
import gcapp from "../assets/gc-app.png";

interface Data {
    me: string,
    services: object[],
    portfolio: object[]
}

const data: Data = {
    me: '',
    services: [
        {
            title: "Web design",
            info: ["Sites", "Landing Pages", "Otimização", "Formulários", "E-commerce", "Blogs", "Responsividade", "Sistemas Web"],
            icon: monitor
        },
        {
            title: "Back End",
            info: ["Integrações", "APIs", "Criação de Sistemas", "Banco de Dados", "Plataformas", "Sistemas Legados", "Webhooks", "Aplicações"],
            icon: integration
        },
        {
            title: "Bugs/Ajustes",
            info: ["Depuração", "Resolução de Problemas", "Correção de Bugs", "Ajustes de Funcionalidades", "Otimização de Desempenho", "Manutenção de Software", "Atualizações de Software"],
            icon: bug
        },
        {
            title: "Consultoria",
            info: ["Análise de Negócios", "Consultoria em Tecnologia", "Regras de Negócio", "Consultoria em Design de APIs"],
            icon: chip
        },
    ],
    portfolio: [
        {
            title: "Fast Sale",
            img: fast,
            link: "https://fastsaleimoveis.com.br/home"
        },
        {
            title: "CRM Datacrazy",
            img: datacrazy,
            link: "https://datacrazy.io/"
        },
        {
            title: "Ana Vargas",
            img: anavargas,
            link: "https://anavargas.com.br/"
        },
        {
            title: "Green Coast",
            img: gcapp,
            link: "https://app.cervejariagreencoast.com.br/"
        },
    ]
}

export default { data };