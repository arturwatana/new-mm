import { motion } from "framer-motion"


type BurgerProps = {
    isActive: boolean
    setRenderBurger: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuBurger({ isActive, setRenderBurger }: BurgerProps) {   
    const menuItens = [{name: "Inicio", href: "#firstSection"}, {name: "Atlantis", href: "#secondSection"}, {name: "Clientes", href: "#thirthSection"}, {name: "Fale Conosco", href: "#fifthSection"}]
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
        renderLi: (i: number)=>({
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5 + (i / 5)
            }
        })
    }

    return (
        <>
            <motion.div onClick={() => setRenderBurger(false)} style={{ width: "100%", height: "100%",background: "rgb(34, 2, 0, 0.4)", position: "absolute", zIndex: 900 }}>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} animate={isActive ? "render" : "hide"} variants={variants} style={{position: "fixed", zIndex: 999, background: "#f6f6f6", height: "100vh", width: "330px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "start", left: "30%", padding: "85px 35px" }}>
                <motion.ul style={{ gap: "20px", display: "flex", flexDirection: "column", listStyle: "none", textAlign: "left", fontSize: "20px"}}>
                    {menuItens.map((item, index) => <motion.a key={index} href={item.href} initial={{ x: 200, opacity: 0 }} variants={variants} custom={index} animate={isActive ? "renderLi" : ""} style={{cursor: "pointer"}}>{item.name}</motion.a> )}
                </motion.ul>
                <motion.div style={{border: "1px solid red", width: "100px", height: "80px", borderRadius: "10px"}}>

                </motion.div>
            </motion.div>
        </>
    )
}