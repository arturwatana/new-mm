import './App.css'
import MainImg from "../src/assets/aerial-view-container-cargo-ship-sea.jpg"
import SecondImg from "../src/assets/top-view-white-plane-boxes.jpg"
import ThirthImage from "../src/assets/aerial-view-cargo-ship-cargo-container-harbor1920.png"
import {  motion} from 'framer-motion'
import { Box, Flex, Heading, Image, Img, Text} from '@chakra-ui/react'
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
      y: -30,
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
                width: "80%",
                textAlign: `center`
              }}>Transforme a Gestão de Carga com o Atlantis</motion.span>
              <motion.button variants={animations} custom={1} animate={`render`} initial={{ y: 80, opacity: 0 }} style={{ height: `70px`, z: 20, padding: `20px`, background: `#FFB800`, border: `none`, borderRadius: `5px`, fontSize: `20px` }} whileHover={`hover`}>Solicite uma demonstracao</motion.button>
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
            <Flex flexDir={"column"} alignItems={"center"} h="90%" gap="80px" p={"10px 0"}>
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                <Heading letterSpacing={"3px"} fontSize={"45px"}>
                  Módulos diversos
                </Heading>
                <Flex  >
                  <Text letterSpacing={"1px"} fontSize={"18px"}>Conta ainda com um módulo Comercial sólido, com ferramentas que ajudam a gerenciar seu departamento de vendas e oferta de serviços. Os módulos Financeiros do Cheetah (Contas à Pagar, Contas à Receber e Contabilidade) são totalmente desenhados para atender a realidade financeira local para empresas deste segmento. É multi-moeda, facilitando o acerto de contas com qualquer país, e como também é multi-filial, atende perfeitamente empresas que possuem diversos escritórios.</Text>
                </Flex>
              </motion.div>
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                <Heading letterSpacing={"3px"} fontSize={"45px"}>
                  Relatórios
                </Heading>
                <Flex  >
                  <Text letterSpacing={"1px"} fontSize={"18px"}>Indicadores Comerciais: Lista de Cotações, Histórico de Fretes, Company/Routing Order, Atividades dos Clientes, Cotações Aprovadas por vendeddor,Indicadores Operacionais: Lista de Processos, Atracação e Faturamento, Protocolo Representante, Processos em andamento por cliente, Ocorrências de Produtividade,Indicadores Financeiros: Transações Bancárias, Fluxo de Caixa Detalhado, Demurrage, Totais dos Processos, Lista de Invoices, Detalhes do Statement, Invoices por Usuário, Performance Processos, Taxas sem Invoice, Taxas por Processos – Totais.</Text>
                </Flex>
              </motion.div>
              <motion.div variants={animations} custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{ width: "90%", zIndex: 100, gap: "10px", display: "flex", flexDirection: "column", border: "2px solid white", color: "white", backgroundColor: '#1A3A6D', borderRadius: "5px", padding: "30px 25px" }} >
                <Heading letterSpacing={"3px"} fontSize={"45px"}>
                  Suporte Humanizado
                </Heading>
                <Flex  >
                  <Text letterSpacing={"1px"} fontSize={"18px"}>Na MMCS Sistemas©, acreditamos que a tecnologia deve ser acompanhada por um atendimento humano de qualidade. Nossa equipe de suporte é composta por profissionais experientes e dedicados, prontos para entender suas necessidades e oferecer soluções personalizadas. Seja para esclarecer dúvidas técnicas, orientar sobre o uso do Cheetah X© ou oferecer consultoria em logística internacional, estamos aqui para ajudar você a maximizar os benefícios do nosso sistema. Conte conosco para um suporte eficiente, ágil e humano.</Text>
                </Flex>
              </motion.div>
              <motion.button variants={animations}  custom={1} viewport={{ once: true }} whileInView={"render"} initial={{ y: 80, opacity: 0 }} style={{zIndex: 100, height: `70px`, z: 20, padding: `20px`, background: `#FFB800`, border: `none`, borderRadius: `5px`, fontSize: `20px` }} whileHover={`hover`}>Solicite uma demonstracao</motion.button>
            </Flex>
          </div>
        </Flex>
      </Flex>

    </>
  )
}

export default App
