import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion} from "framer-motion"
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Nuno from "../../assets/nunofrachtwhite.svg"
type SwipeProps = {
    cards: number,
    cardInView: number
}

export default function Slider(){
    const [stopAnimation, setStopAnimation] = useState<boolean>(false)

    const [swipe, setSwipe] = useState<SwipeProps>({
        cards: 8,
        cardInView: 0
    })

    const variants = {
        swipe:(i: number) => ({
            x: 0 - (180 * i),
            transition: {
                duration: 0.5,
            }
        }),
    }

    function prevImg(){
            setStopAnimation(true)
        setSwipe((prev) => ({...prev, cardInView: prev.cardInView === 0 ? 4 : prev.cardInView -1}))

    }

    function nextImg(){
            setStopAnimation(true)
        setSwipe((prev) => ({...prev, cardInView: prev.cardInView === 4 ? 0 : prev.cardInView +1}))
    }


    useEffect(() => {

        const interval = setInterval(() => {
            nextImg()
        }, 4000)
        return () => clearInterval(interval)
    }, [])


    

    return (
        <>
            <Flex w="100%"  justifyContent={"center"} zIndex={999} >
                    <Box color="#222"  onClick={() => prevImg()}>
                        <Text fontSize={35} mt={4}  color="#ff6418"><IoIosArrowBack/></Text>
                    </Box>
                <Flex maxW="700px" overflow={"hidden"}  >
                    <motion.div animate={"swipe"}  style={{display:"flex", gap: "20px"}} custom={swipe.cardInView} variants={variants} >
                        <Image w="160px" fit={"contain"}  src={Nuno}/>
                        <Image w="160px" fit={"contain"} src={Nuno}/>
                        <Image w="160px" fit={"contain"} src={Nuno}/>
                        <Image w="160px" fit={"contain"} src={Nuno}/>
                        <Image w="160px" fit={"contain"} src={Nuno}/>
                        <Image w="160px" fit={"contain"} src={Nuno}/>
                        <Image w="160px" fit={"contain"} src={Nuno}/>
                        <Image w="160px" fit={"contain"} src={Nuno}/>
                    </motion.div>
                </Flex>
                <Box color="#222"  onClick={() => nextImg()}>
                        <Text fontSize={35} h="80%"  color="#ff6418"  transform="rotate(180deg)"><IoIosArrowBack/></Text>
                </Box>
             </Flex>
        </>
    )
}