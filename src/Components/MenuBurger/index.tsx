import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import Translator from "../Translator"
import BrazilFlag from "../../assets/brazil-flag-icon.svg"
import USFlag from "../../assets/united-states-flag-icon.svg"
import { Img } from "@chakra-ui/react"
import { useEffect } from "react"

type BurgerProps = {
    isActive: boolean
    setRenderBurger: React.Dispatch<React.SetStateAction<boolean>>
}

type MenuItemProps = {
    name: string
    href: string
}

export default function MenuBurger({ isActive, setRenderBurger }: BurgerProps) {
    const { i18n } = useTranslation()
        function handleChangeLanguage(language: string) {
            i18n.changeLanguage(language)
            setRenderBurger(false)
        }
       
        const menuItens: MenuItemProps[] = [{ name: Translator("burger.home"), href: "#firstSection" }, { name: Translator("burger.aboutUs"), href: "#secondSection" }, { name: Translator("burger.atlantis"), href: "#thirdSection" }, { name: Translator("burger.reviews"), href: "#fourthSection" }, { name: Translator("burger.contactUs"), href: "#fifthSection" }]
        const variants = {
            render: {
                x: 0,
                opacity: 1
            },
            hide: {
                x: 1000,
            },
            hideLayer: {
                display: "none"
            },
            renderLi: (i: number) => ({
                x: 0,
                opacity: 1,
                transition: {
                    delay: 0.2 + (i / 5)
                }
            })
        }
        function scrollToTarget(e: any) {
            const id = e.target.className
            const element = document.getElementById(id)
            element?.scrollIntoView({ behavior: 'smooth' });
        }

        useEffect(() => {
            if (isActive) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
            return () => {
                document.body.classList.remove('no-scroll');
            };
        }, [isActive]);

        return (
            <>
                <motion.div onClick={() => setRenderBurger(false)} style={{ width: "100%", height: "100%", background: "rgb(34, 2, 0, 0.4)", position: "absolute", zIndex: 900 }}>
                </motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }} animate={isActive ? "render" : "hide"} variants={variants} style={{ position: "fixed", zIndex: 999, background: "#f6f6f6", height: "100vh", width: "330px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "start", left: "30%", padding: "85px 35px 125px 35px" }}>
                    <motion.ul style={{ gap: "20px", display: "flex", flexDirection: "column", listStyle: "none", textAlign: "left", fontSize: "20px" }}>
                        {menuItens.map((item: MenuItemProps, index: any) => <motion.a className={item.href.replace("#", "")} onClick={(e) => { scrollToTarget(e); setRenderBurger(false) }} key={index} initial={{ x: 200, opacity: 0 }} variants={variants} custom={index} animate={isActive ? "renderLi" : ""} style={{ cursor: "pointer" }}>{item.name}</motion.a>)}
                    </motion.ul>
                    <motion.div initial={{ x: 200, opacity: 0 }} variants={variants} custom={5} animate={isActive ? "renderLi" : ""}  style={{ height: "80px", borderRadius: "10px", display:  "flex", right:"30%", top:"0%", flexDirection: "column", gap: "20px"}}>
                        <button style={{width: "60px", borderRadius: "20px"}} onClick={() => handleChangeLanguage("pt-BR")}><Img borderRadius="10px" src={BrazilFlag}/></button>
                        <button style={{width: "60px", borderRadius: "20px"}} onClick={() => handleChangeLanguage("en-US")}><Img borderRadius="10px" src={USFlag}/></button>
                    </motion.div>
                </motion.div>
            </>
        )
    }