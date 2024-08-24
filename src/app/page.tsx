'use client';
import LinksButton from "@/components/links-button";
import Service from "@/components/service";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DevicesIcon from '@mui/icons-material/Devices';
import HandymanIcon from '@mui/icons-material/Handyman';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import StoreIcon from '@mui/icons-material/Store';
import WebIcon from '@mui/icons-material/Web';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import me from "../assets/eu.jpeg";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import telegram from "../assets/telegram.png";
import wpp from "../assets/wpp.jpg";
import "./index.css";

export default function MeusLinks() {
    const [selectedTab, setSelectedTab] = React.useState<any>('tab1');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <main className="my-links" style={selectedTab === 'tab1' ? {height: '100vh'} : {height: 'auto'}}>
            <div className="my-links-container">
                <div className="fixed-section">
                    <div className="title-img" style={{backgroundImage: `url("${me.src}")`}}></div>
                    <h1 className="instagram-title">@_muller.dev</h1>
                    <p className="description">👨‍💻 Atuando desde 2019</p>
                    <p className="description">❤️ Apaixonado por tecnologia</p>
                    <p className="description">🚀 Desenvolvedor Fullstack</p>
                    <Tabs value={selectedTab} className="tab-selector"
                        sx={{
                            '& .MuiTabs-indicator': {
                                backgroundColor: 'white',
                            },
                            '& .MuiTab-root': {
                                color: 'white',
                                fontSize: '1.1rem'
                            },
                            '& .Mui-selected': {
                                color: 'white!important',
                            },
                        }}
                        onChange={handleChange} centered>
                        <Tab label="Links" value={"tab1"} />
                        <Tab label="Serviços" value={"tab2"} />
                        <Tab label="Skills" value={"tab3"} />
                    </Tabs>
                </div>
                <div className="content-tab">
                {
                    selectedTab === "tab1" &&
                    <div className="redirect-links">
                        <LinksButton text={'Whatsapp'} url={'https://api.whatsapp.com/send?phone=5547997003649&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20%F0%9F%98%80'} icon={wpp} />
                        <LinksButton text={'Telegram'} url={'https://t.me/muller_dev'} icon={telegram} />
                        <LinksButton text={'Linkedin'} url={'https://www.linkedin.com/in/muller-g/'} icon={linkedin} />
                        <LinksButton text={'GitHub'} url={'https://github.com/muller-g'} icon={github} />
                        <LinksButton text={'Instagram'} url={'https://instagram.com/_muller.dev'} icon={instagram} />
                    </div>
                }
                {
                    selectedTab === "tab2" &&
                    <div className="redirect-links">
                        <Service title={'Sites'} text={'Desenvolvo sites personalizados para sua marca e/ou empresa'} icon={<WebIcon />}/>
                        <Service title={'E-commerces'} text={'Crio lojas virtuais para vender seus produtos online customizadas ou shopify'} icon={<StoreIcon />}/>
                        <Service title={'Sistemas'} text={'Construo um sistema sob medida para o seu negócio'} icon={<SettingsSuggestIcon />}/>
                        <Service title={'Integrações'} text={'Conecto diferentes plataformas para trabalharem juntas, importando ou exportando seus dados'} icon={<AccountTreeIcon />}/>
                        <Service title={'Landing Pages'} text={'Crio páginas focada em conversão de leads'} icon={<DevicesIcon />}/>
                        <Service title={'Manutenção e Correções'} text={'Ofereço suporte e correção de problemas em seu sistema'} icon={<HandymanIcon />}/>
                    </div>
                }
                {
                    selectedTab === "tab3" &&
                    <div className="technology">
                        <h1>Front End</h1>
                        <div className="tec-list">
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" />}
                                label="ReactJS"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" />}
                                label="NextJS"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBTJD040TLCM3QJUyXatY6_CliSbFTuWQTw&s" />}
                                label="VueJs"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />}
                                label="HTML"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" />}
                                label="CSS"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://www.svgrepo.com/show/374118/tailwind.svg" />}
                                label="Tailwind CSS"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://miro.medium.com/v2/resize:fit:318/1*7jRD5QhgARucFKvRHFxpOg.png" />}
                                label="Styled Components"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                        </div>
                        <h1>Back End</h1>
                        <div className="tec-list">
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://cdn-icons-png.flaticon.com/512/919/919825.png" />}
                                label="NodeJS"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://www.svgrepo.com/show/330398/express.svg" />}
                                label="Express"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgh0cmaLPqUaZd6iuo7D_iaOeLYb1QUdjMiA&s" />}
                                label="Javascript"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />}
                                label="Typescript"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXeHmYqamiKUUFZ_34jLIiyqf3BDVLN0e9Lw&s" />}
                                label="PHP"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLusrEhuGwyB6Heq_sOUBnRbgXlm0iDF42A&s" />}
                                label="Laravel"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOW8dJIWuL8rkIWugVrhwFzAv4YwAQHjYAg&s" />}
                                label="NestJS"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-G2ClmfT0_7x7jxCsEh9U9hIWFb4PJdPeYw&s" />}
                                label="Socket.IO"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                        </div>
                        <h1>Banco de dados</h1>
                        <div className="tec-list">
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://cdn-icons-png.flaticon.com/512/919/919836.png" />}
                                label="MYSQL"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png" />}
                                label="PostgreSQL"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://www.svgrepo.com/show/331488/mongodb.svg" />}
                                label="MongoDB"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                        </div>
                        <h1>Devops</h1>
                        <div className="tec-list">
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://cdn-icons-png.flaticon.com/512/888/888879.png" />}
                                label="Ubuntu"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5-AR8zEFdITxwcsvta1oOd5jZifM4Ryjlw&s" />}
                                label="Nginx"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://www.iconshock.com/image/RealVista/Communications/apache_server" />}
                                label="Apache"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSObhWW7gEGNs1r3kbEXIeWuIDC74C6p5RVQ&s" />}
                                label="AWS"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://cdn-icons-png.flaticon.com/512/8047/8047704.png" />}
                                label="VPS"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                        </div>
                        <h1>Outras</h1>
                        <div className="tec-list">
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFno_zTio15YuAhoiqDh0y0DPMsqsZNMG4Q&s" />}
                                label="Docker"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://cdn.icon-icons.com/icons2/2148/PNG/512/prisma_icon_132076.png" />}
                                label="Prisma"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSJmlNYGBG0wZYVdNpEFAPzVSnGM3LdOIBw&s" />}
                                label="Jest"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" />}
                                label="GIT"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" />}
                                label="Figma"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                            <Chip
                                avatar={<Avatar alt="Natacha" src="https://www.svgrepo.com/show/354202/postman-icon.svg" />}
                                label="Postman"
                                variant="outlined"
                                style={{backgroundColor: "#fff", fontSize: '16px'}}
                            />
                        </div>
                    </div>
                }
                </div>
            </div>
        </main>
    );
}
