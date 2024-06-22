import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  chakra
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
type ModalProps = {
  isOpen: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

type ContactProps = {
  name: string
  enterprise: string
  email: string
  phone: string
}

export default function ModalContact({ isOpen, setOpenModal }: ModalProps) {
  const [contact, setContact] = useState<ContactProps | null>(null)

  const handleSubmit = (e:any) => {
    e.preventDefault()
    setContact({
      email: e.target.email.value,
      enterprise: e.target.enterprise.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
    })
}

function close(){
  setOpenModal(false)
}

useEffect(() => {
  console.log(contact)
}, [contact])
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={close}
      >
        <ModalOverlay />
        <ModalContent w={"90%"}>
          <ModalHeader>Solicite uma demonstracao</ModalHeader>
            <chakra.form onSubmit={handleSubmit}>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl >
              <FormLabel>Nome</FormLabel>
              <Input  placeholder='Nome' id="name" />
              <FormLabel>Empresa</FormLabel>
              <Input placeholder='Empresa' id="enterprise"   />
              <FormLabel>Email</FormLabel>
              <Input  placeholder='Email' id="email"  type='email' />
              <FormLabel >Telefone</FormLabel>
              <Input  placeholder='Telefone' id="phone" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button background='#FFB800' mr={3} type='submit'>
              Enviar
            </Button>
            <Button onClick={close}>Cancelar</Button>
          </ModalFooter>
            </chakra.form>
        </ModalContent>
      </Modal>
    </>
  )
}