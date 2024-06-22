import './App.css'
import MainImg from "../src/assets/aerial-view-container-cargo-ship-sea886.jpg"
import SecondImg from "../src/assets/high-angle-forklift-carrying-boxes.jpg"
import ThirthImage from "../src/assets/1380.jpg"
import DepoImg from "../src/assets/supply-chain-representation-still-life (2).jpg"
import ContactImg from "../src/assets/2149853139.jpg"
import { motion } from 'framer-motion'
import { Box, Flex, Heading, Image, Img, Text } from '@chakra-ui/react'
import MactekLogo from "../src/assets/logo-mmcs.png"
import { CiMenuBurger } from "react-icons/ci";
import Slider from './Components/Slider'
import MenuBurger from './Components/MenuBurger'
import { useState } from 'react'
import ModalContact from './Components/ModalContact'
import ButtonContact from './Components/ButtonContact'
import Translator from './Components/Translator'

function App() {
  const [renderBurguer, setRenderBurger] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)

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
    render: {
      y: 0,
      opacity: 1,
    },
    renderNav: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3
      }
    }
  }


  return (
    <>
      <Flex flexDirection={"column"} id="wrapperLayout" h={"100%"} pos={"relative"} >
        {
          renderBurguer ? <MenuBurger setRenderBurger={setRenderBurger} isActive={renderBurguer} /> : ""
        }
        <ModalContact isOpen={openModal} setOpenModal={setOpenModal} />
        <motion.header variants={animations} animate={`renderNav`} initial={{ y: -100, opacity: 0, position: "fixed" }} className='navbar'>
          <Flex justifyContent={'space-between'} zIndex={100} p={`0 15px`} >
            <Box position={'relative'} w='150px' h="100px"  >
              <Img src={MactekLogo} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`contain`} />
            </Box>
            <Box onClick={() => setRenderBurger(!renderBurguer)}>
              <CiMenuBurger style={{ width: `55px`, height: `100px`, color: 'white' }} />
            </Box>
          </Flex >
        </motion.header>
        <Flex flexDir={`column`} w={`100%`} justifyContent={`center`} alignItems={`center`}>
          <Flex justifyContent={`center`} id="firstSection" alignItems={`center`} flexDir={`column`} maxW={"1920px"} w="100%">
            <div className='wrapper '>
              <div className='layer'></div>
              <Img src={MainImg} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`cover`} maxW={`1920px`} />
              <div className="main mt">
                <motion.span variants={animations} initial={{ y: 100, opacity: 0 }} animate={`renderItem`} style={{
                  fontSize: "42px",
                  letterSpacing: `4px`,
                  color: `white`,
                  width: "85%",
                  textAlign: `center`
                }}>{Translator("first.tittle")}</motion.span>
                <ButtonContact isOpen={openModal} setOpenModal={setOpenModal} />
              </div>
            </div>
          </Flex>
          <Flex justifyContent={`center`} id="secondSection" scrollMarginTop={"100px"} alignItems={`center`} flexDir={`column`} maxW={"1920px"} w="100%" zIndex={0}>
            <div className='wrapper'>
              <div className='layer'></div>
              <Image src={SecondImg} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`cover`} maxW={`1920px`} />
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                <Heading letterSpacing={"3px"} fontSize={"45px"}>
                {Translator("second.tittle")}
                </Heading>
                <Flex  >
                  <Text letterSpacing={"1px"} fontSize={"18px"}>{Translator("second.text")}</Text>
                </Flex>
              </motion.div>
            </div>
          </Flex>
          <Flex justifyContent={`center`} id="thirdSection" scrollMarginTop={"100px"} alignItems={`center`} flexDir={`column`} maxW={"1920px"} w="100%" zIndex={0}>
            <div className='wrapper2'>
              <div className='layer'></div>
              <Image src={ThirthImage} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`cover`} maxW={`1920px`} />
              <Flex flexDir={"column"} alignItems={"center"} h="90%" gap="60px" p={"35px 0"}>
                <motion.span variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ color: "white", zIndex: 100, fontSize: "30px", }}>{Translator("third.tittle")}</motion.span>
                <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                  <Heading letterSpacing={"3px"} fontSize={"30px"}>
                  {Translator("third.cardTittle")}
                  </Heading>
                  <Flex  >
                    <Text letterSpacing={"1px"} fontSize={"14px"}>{Translator("third.cardText")}</Text>
                  </Flex>
                </motion.div>
                <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                  <Heading letterSpacing={"3px"} fontSize={"30px"}>
                  {Translator("third.cardTittle2")}
                  </Heading>
                  <Flex  >
                    <Text letterSpacing={"1px"} fontSize={"14px"}>{Translator("third.cardText2")}</Text>
                  </Flex>
                </motion.div>
                <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                  <Heading letterSpacing={"3px"} fontSize={"30px"}>
                  {Translator("third.cardTittle3")}
                  </Heading>
                  <Flex  >
                    <Text letterSpacing={"1px"} fontSize={"14px"}>{Translator("third.cardText3")}</Text>
                  </Flex>
                </motion.div>

              </Flex>
            </div>
          </Flex>
          <Flex justifyContent={`center`} id="fourthSection" scrollMarginTop={"100px"} alignItems={`center`} flexDir={`column`} maxW={"1920px"} w="100%" zIndex={0}>
            <div className='wrapper3'>
              <div className='layer'></div>
              <Image src={DepoImg} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`cover`} maxW={`1920px`} />

              <Flex flexDir={"column"} alignItems={"center"} h="90%" gap="50px" p={"35px 0"}>
                <motion.span variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ color: "white", zIndex: 100, fontSize: "30px", }}>{Translator("fourth.tittle")}</motion.span>
                <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                  <Text>{Translator("fourth.cardText")}</Text>
                  <Flex alignItems={"center"} gap="20px" >
                    <Box border="1px solid white" borderRadius={"60px"} p="10px" background={"#fff"} h="50px" w="50px"></Box>
                    <Flex flexDir={"column"}>
                      <Text>Fulano de tal</Text>
                      <Text>Empresa X</Text>
                    </Flex>
                  </Flex>
                </motion.div>
                <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                  <Text>{Translator("fourth.cardText")}</Text>
                  <Flex alignItems={"center"} gap="20px" >
                    <Box border="1px solid white" borderRadius={"60px"} p="10px" background={"#fff"} h="50px" w="50px"></Box>
                    <Flex flexDir={"column"}>
                      <Text>Fulano de tal</Text>
                      <Text>Empresa X</Text>
                    </Flex>
                  </Flex>
                </motion.div>
                <Flex zIndex={999} flexDir={"column"} gap={"15px"}>
                  <Heading textAlign={'center'} color={"#fff"}>{Translator("fourth.partners")}</Heading>
                  <Slider />
                </Flex>
                <ButtonContact isOpen={openModal} setOpenModal={setOpenModal} />
              </Flex>
            </div>
          </Flex>
        </Flex>
        <Flex justifyContent={`center`} id="fifthSection" scrollMarginTop={"100px"} alignItems={`center`} flexDir={`column`} maxW={"1920px"} w="100%" zIndex={0}>
          <div className='wrapper3'>
            <div className='layer'></div>
            <Image src={ContactImg} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`cover`} maxW={`1920px`} />
            <Flex flexDir={"column"} alignItems={"center"} h="90%" w="100%" gap="50px" p={"35px 0"}>
              <motion.span variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ color: "white", zIndex: 100, fontSize: "30px", }}>{Translator("fifth.tittle")}</motion.span>
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "80%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "25px 5px" }} >
                <Heading fontSize={"14px"} textAlign={"center"}>
                {Translator("fifth.text")}
                </Heading>
                <Flex position={"relative"} justifyContent={"center"} >
                  <motion.input style={{ color: "black", border: "none", borderRadius: "5px", width: "80%" }} />
                  <motion.button style={{ position: "absolute", background: "#FFB800", borderRadius: "10px 5px 5px 10px", left: "60%", width: "30%" }} >{Translator("fifth.text2")}</motion.button>
                </Flex>
              </motion.div>
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "80%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "25px 25px" }} >
                <Heading fontSize={"14px"} textAlign={"center"}>
                {Translator("fifth.text3")}
                </Heading>
                <Flex position={"relative"} justifyContent={"start"} flexDir={"column"} gap="10px" >
                  <Flex flexDir={"row"} gap="10px" >
                    <motion.span style={{ color: "white", zIndex: 100, fontSize: "15px", }}>{Translator("fifth.phone")}:</motion.span>
                    <motion.span style={{ color: "white", zIndex: 100, fontSize: "15px", }}>(11) 3159.3665</motion.span>
                  </Flex>
                  <Flex flexDir={"row"} gap="10px" alignItems={"center"} >
                    <motion.span style={{ color: "white", zIndex: 100, fontSize: "15px", }}>Skype:</motion.span>
                    <motion.button style={{ borderRadius: "5px", padding: "5px", background: "#00aff0", fontSize: "13px" }}>Administracao</motion.button>
                    <motion.button style={{ borderRadius: "5px", padding: "5px", background: "#00aff0", fontSize: "13px" }}>Administracao</motion.button>
                  </Flex>
                </Flex>
              </motion.div>
            </Flex>
          </div>
        </Flex>
        <footer style={{ background: "#222" }}>
          <Flex minH={"500px"} flexDir={"column"} alignItems={"center"} justifyContent={"center"} p="25px 0" gap="20px" >
            <Box position={'relative'} w='150px' h="100px"  >
              <Img src={MactekLogo} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`contain`} />
            </Box>
            <ButtonContact isOpen={openModal} setOpenModal={setOpenModal} />
            <Flex flexDir={"column"} gap="5px" justifyContent={"center"} alignItems={"center"}>
              <Text color={"white"}>{Translator("fifth.text4")}</Text>
              <ul style={{ color: "white", listStyle: "none", textAlign: "center" }} >
                <li>{Translator("second.tittle")}</li>
                <li>{Translator("third.tittle")}</li>
                <li>{Translator("fourth.tittle")}</li>
                <li>{Translator("fifth.tittle")}</li>
              </ul>
            </Flex>
            <Flex w="100%" alignItems={"center"} justifyContent={"center"}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.688398269135!2d-46.647820923914864!3d-23.54370726094536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584f16be4b11%3A0x4e78065440a55d9a!2sR.%20Marqu%C3%AAs%20de%20Itu%2C%2094%20-%20Higien%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001223-001!5e0!3m2!1spt-BR!2sbr!4v1716779903755!5m2!1spt-BR!2sbr" width="300" height="150" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Flex>
            <Flex flexDirection={"column"} alignItems={"start"} justifyContent={"center"} >
              <Text color="white">
                Telefone: (11) 3159.3665
              </Text>
              <Text color="white">
                Rua marques de Itu, 94 - CJ 92
              </Text>
              <Text color="white">
                mmcs@mactek.net
              </Text>
            </Flex>
          </Flex>
        </footer>
      </Flex>

    </>
  )
}

export default App
