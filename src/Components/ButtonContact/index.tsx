import { motion } from "framer-motion"
import Translator from "../Translator"

type ModalProps = {
    isOpen: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  }
export default function ButtonContact({isOpen,setOpenModal}: ModalProps) {


    const animations = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3
            }
        },
        renderItem: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.7
            }
        },

    }
    return (
        <motion.button variants={animations} onClick={() => !isOpen ? setOpenModal(true) : ""} custom={1} animate={`renderItem`} initial={{ y: 80, opacity: 0 }} style={{ zIndex: 5, display: "flex", alignItems: "center", height: `60px`, z: 20, padding: `20px`, background: `#FFB800`, border: `none`, borderRadius: `5px`, fontSize: `18px` }} whileHover={`hover`}>{Translator("button.text")}</motion.button>
    )
}