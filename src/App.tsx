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
function App() {

  const animations = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    },
    render: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.7
      }
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

      <motion.header variants={animations} animate={`renderNav`} initial={{ y: -100, opacity: 0 }} className='navbar'>
        <Flex justifyContent={'space-between'} zIndex={100} p={`0 15px`} >
          <Box position={'relative'} w='150px' h="100px"  >
            <Img src={MactekLogo} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`contain`} />
          </Box>
          <Box>
            <CiMenuBurger style={{ width: `55px`, height: `100px`, color: 'white' }} />
          </Box>
        </Flex >
      </motion.header>
      <Flex flexDir={`column`} w={`100%`} justifyContent={`center`} alignItems={`center`}>
        <Flex justifyContent={`center`} alignItems={`center`} flexDir={`column`} maxW={"1920px"} w="100%">
          <div className='wrapper '>
            <div className='layer'></div>
            <Img src={MainImg} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`cover`} maxW={`1920px`} />
            <div className="main mt">
              <motion.span variants={animations} initial={{ y: 100, opacity: 0 }} animate={`render`} style={{
                fontSize: "44px",
                letterSpacing: `4px`,
                color: `white`,
                width: "85%",
                textAlign: `center`
              }}>Transforme a Gestão de Carga com o Atlantis</motion.span>
              <motion.button variants={animations} custom={1} animate={`render`} initial={{ y: 80, opacity: 0 }} style={{ display: "flex", alignItems: "center", height: `60px`, z: 20, padding: `20px`, background: `#FFB800`, border: `none`, borderRadius: `5px`, fontSize: `18px` }} whileHover={`hover`}>Solicite uma demonstracao</motion.button>
            </div>
          </div>
        </Flex>
        <Flex justifyContent={`center`} alignItems={`center`} flexDir={`column`} maxW={"1920px"} w="100%" zIndex={0}>
          <div className='wrapper'>
            <div className='layer'></div>
            <Image src={SecondImg} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`cover`} maxW={`1920px`} />
            <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
              <Heading letterSpacing={"3px"} fontSize={"45px"}>
                Sobre nós
              </Heading>
              <Flex  >
                <Text letterSpacing={"1px"} fontSize={"18px"}>Fundada em 2004, a MMCS Sistemas© é hoje uma empresa 100% brasileira. A idéia do desenvolvimento de um software para atender as necessidades dos freight forwarder surgiu ainda antes, em 1997. Pela participação ativa em um escritório de agenciamento de cargas local, a MMCS Sistemas© vislumbrou a necessidade de uma ferramenta que controle os embarques e os faturamentos dos serviços prestados.</Text>
              </Flex>
            </motion.div>
          </div>
        </Flex>
        <Flex justifyContent={`center`} alignItems={`center`} flexDir={`column`} maxW={"1920px"} w="100%" zIndex={0}>
          <div className='wrapper2'>
            <div className='layer'></div>
            <Image src={ThirthImage} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`cover`} maxW={`1920px`} />
            <Flex flexDir={"column"} alignItems={"center"} h="90%" gap="60px" p={"35px 0"}>
              <motion.span variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ color: "white", zIndex: 100, fontSize: "30px", }}>Conheca o Atlantis</motion.span>
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                <Heading letterSpacing={"3px"} fontSize={"30px"}>
                  Módulos diversos
                </Heading>
                <Flex  >
                  <Text letterSpacing={"1px"} fontSize={"14px"}>Conta ainda com um módulo Comercial sólido, com ferramentas que ajudam a gerenciar seu departamento de vendas e oferta de serviços. Os módulos Financeiros do Cheetah (Contas à Pagar, Contas à Receber e Contabilidade) são totalmente desenhados para atender a realidade financeira local para empresas deste segmento. É multi-moeda, facilitando o acerto de contas com qualquer país, e como também é multi-filial, atende perfeitamente empresas que possuem diversos escritórios.</Text>
                </Flex>
              </motion.div>
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                <Heading letterSpacing={"3px"} fontSize={"30px"}>
                  Relatórios
                </Heading>
                <Flex  >
                  <Text letterSpacing={"1px"} fontSize={"14px"}>Indicadores Comerciais: Lista de Cotações, Histórico de Fretes, Company/Routing Order, Atividades dos Clientes, Cotações Aprovadas por vendeddor,Indicadores Operacionais: Lista de Processos, Atracação e Faturamento, Protocolo Representante, Processos em andamento por cliente, Ocorrências de Produtividade,Indicadores Financeiros: Transações Bancárias, Fluxo de Caixa Detalhado, Demurrage, Totais dos Processos, Lista de Invoices, Detalhes do Statement, Invoices por Usuário, Performance Processos, Taxas sem Invoice, Taxas por Processos – Totais.</Text>
                </Flex>
              </motion.div>
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                <Heading letterSpacing={"3px"} fontSize={"30px"}>
                  Suporte Humanizado
                </Heading>
                <Flex  >
                  <Text letterSpacing={"1px"} fontSize={"14px"}>Na MMCS Sistemas©, acreditamos que a tecnologia deve ser acompanhada por um atendimento humano de qualidade. Nossa equipe de suporte é composta por profissionais experientes e dedicados, prontos para entender suas necessidades e oferecer soluções personalizadas. Seja para esclarecer dúvidas técnicas, orientar sobre o uso do Cheetah X© ou oferecer consultoria em logística internacional, estamos aqui para ajudar você a maximizar os benefícios do nosso sistema. Conte conosco para um suporte eficiente, ágil e humano.</Text>
                </Flex>
              </motion.div>
            </Flex>
          </div>
        </Flex>
        <Flex justifyContent={`center`} alignItems={`center`} flexDir={`column`} maxW={"1920px"} w="100%" zIndex={0}>
          <div className='wrapper3'>
            <div className='layer'></div>
            <Image src={DepoImg} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`cover`} maxW={`1920px`} />

            <Flex flexDir={"column"} alignItems={"center"} h="90%" gap="50px" p={"35px 0"}>
              <motion.span variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ color: "white", zIndex: 100, fontSize: "30px", }}>Depoimentos</motion.span>
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                <Text>Na MMCS Sistemas©, acreditamos que a tecnologia deve ser acompanhada por um atendimento humano de qualidade. Nossa equipe de suporte é composta por profissionais experientes e dedicados, prontos para entender suas necessidades e oferecer soluções personalizadas. Seja para esclarecer dúvidas técnicas, orientar sobre o uso do Cheetah X© ou oferecer consultoria em logística internacional, estamos aqui para ajudar você a maximizar os benefícios do nosso sistema. Conte conosco para um suporte eficiente, ágil e humano.</Text>
                <Flex alignItems={"center"} gap="20px" >
                  <Box border="1px solid white" borderRadius={"60px"} p="10px" background={"#fff"} h="50px" w="50px"></Box>
                  <Flex flexDir={"column"}>
                    <Text>Fulano de tal</Text>
                    <Text>Empresa X</Text>
                  </Flex>
                </Flex>
              </motion.div>
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                <Text>Na MMCS Sistemas©, acreditamos que a tecnologia deve ser acompanhada por um atendimento humano de qualidade. Nossa equipe de suporte é composta por profissionais experientes e dedicados, prontos para entender suas necessidades e oferecer soluções personalizadas. Seja para esclarecer dúvidas técnicas, orientar sobre o uso do Cheetah X© ou oferecer consultoria em logística internacional, estamos aqui para ajudar você a maximizar os benefícios do nosso sistema. Conte conosco para um suporte eficiente, ágil e humano.</Text>
                <Flex alignItems={"center"} gap="20px" >
                  <Box border="1px solid white" borderRadius={"60px"} p="10px" background={"#fff"} h="50px" w="50px"></Box>
                  <Flex flexDir={"column"}>
                    <Text>Fulano de tal</Text>
                    <Text>Empresa X</Text>
                  </Flex>
                </Flex>
              </motion.div>
              <motion.button variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ zIndex: 100, height: `70px`, z: 20, padding: `20px`, background: `#FFB800`, border: `none`, borderRadius: `5px`, fontSize: `20px` }} whileHover={`hover`}>Solicite uma demonstracao</motion.button>
            </Flex>
          </div>
        </Flex>
      </Flex>
      <Flex justifyContent={`center`} alignItems={`center`} flexDir={`column`} maxW={"1920px"} w="100%" zIndex={0}>
        <div className='wrapper3'>
          <div className='layer'></div>
          <Image src={ContactImg} w={`100%`} h={`100%`} pos={`absolute`} objectFit={`cover`} maxW={`1920px`} />
          <Flex flexDir={"column"} alignItems={"center"} h="90%" w="100%" gap="50px" p={"35px 0"}>
            <motion.span variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ color: "white", zIndex: 100, fontSize: "30px", }}>Fale Conosco</motion.span>
            <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "80%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "15px 10px" }} >
              <Heading fontSize={"14px"} textAlign={"center"}>
                Entre em contato por e-mail
              </Heading>
              <Flex position={"relative"} justifyContent={"center"} >
                <motion.input style={{ color: "black", border: "none", borderRadius: "5px", width: "80%" }} />
                <motion.button style={{ position: "absolute", background: "#FFB800", borderRadius: "10px 5px 5px 10px", left: "60%", width: "30%" }} >Enviar</motion.button>
              </Flex>
            </motion.div>
            <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "80%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "15px 10px" }} >
              <Heading fontSize={"14px"} textAlign={"center"}>
                Ou por nossos canais oficiais
              </Heading>
              <Flex position={"relative"} justifyContent={"start"} flexDir={"column"} gap="10px" >
                <Flex flexDir={"row"} gap="10px" >
                  <motion.span style={{ color: "white", zIndex: 100, fontSize: "15px", }}>Telefone:</motion.span>
                  <motion.span style={{ color: "white", zIndex: 100, fontSize: "15px", }}>(11) 3159.3665</motion.span>
                </Flex>
                <Flex flexDir={"row"} gap="10px" alignItems={"center"} >
                  <motion.span style={{ color: "white", zIndex: 100, fontSize: "15px", }}>Skype:</motion.span>
                  <motion.button style={{ border: "1px solid black", borderRadius: "5px", padding: "3px", background: "#32E1EC", fontSize: "13px" }}>Administracao</motion.button>
                  <motion.button style={{ border: "1px solid black", borderRadius: "5px", padding: "3px", background: "#32E1EC", fontSize: "13px" }}>Administracao</motion.button>
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
          <motion.button variants={animations} custom={1} animate={`render`} initial={{ y: 80, opacity: 0 }} style={{ display: "flex", alignItems: "center", height: `60px`, z: 20, padding: `20px`, background: `#FFB800`, border: `none`, borderRadius: `5px`, fontSize: `18px` }} whileHover={`hover`}>Solicite uma demonstracao</motion.button>
          <Flex flexDir={"column"} gap="5px" justifyContent={"center"} alignItems={"center"}>
            <Text color={"white"}>Links Rapidos</Text>
            <ul style={{ color: "white", listStyle: "none", textAlign: "center" }} >
              <li>Sobre nos</li>
              <li>Conheca o Atlantis</li>
              <li>Clientes</li>
              <li>Fale Conosco</li>
            </ul>
          </Flex>
          <Flex w="100%" alignItems={"center"} justifyContent={"center"}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.688398269135!2d-46.647820923914864!3d-23.54370726094536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584f16be4b11%3A0x4e78065440a55d9a!2sR.%20Marqu%C3%AAs%20de%20Itu%2C%2094%20-%20Higien%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001223-001!5e0!3m2!1spt-BR!2sbr!4v1716779903755!5m2!1spt-BR!2sbr" width="300" height="150" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Flex>
          <Flex flexDirection={"column"} w="80%">
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

    </>
  )
}

export default App
