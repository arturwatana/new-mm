
import { motion } from 'framer-motion'
import { BiSupport } from "react-icons/bi";


export default function FloatButton() {
    const animations = {
        renderNav: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.3
          }
        },
        float: {
            y: [0, 10, 0],
            transition: {
                repeat: Infinity,
                duration: 4,
            }
        }
      }

    return (
        <>
            <motion.div variants={animations} animate={"float"} style={{ width: "70px", borderRadius: "40px",display: "flex", alignItems:"center", background: "#222", height: "70px", border: "1px solid white", position: "fixed", zIndex: 900, top: "85%", left: "80%" }}>
                <BiSupport style={{width:"100%", color: "#fff", height: "70%"}} />
            </motion.div>
        </>
    )
}