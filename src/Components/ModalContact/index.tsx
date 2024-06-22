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
import {  useState } from 'react'
import { toast } from 'react-toastify';
import Translator from '../Translator';

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
    toast.success(`Obrigado ${contact?.name.split(" ")[0]}! Nosso time entrara em contato`)
}

function close(){
  setOpenModal(false)
}

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
              <FormLabel>{Translator("modal.name")}</FormLabel>
              <Input  placeholder={Translator("modal.name")}  id="name" />
              <FormLabel>{Translator("second.empresa")}</FormLabel>
              <Input placeholder={Translator("modal.empresa")}  id="enterprise"   />
              <FormLabel>Email</FormLabel>
              <Input  placeholder='Email' id="email"  type='email' />
              <FormLabel >{Translator("modal.phone")}</FormLabel>
              <Input  placeholder={Translator("modal.phone")} id="phone" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button background='#FFB800' mr={3} type='submit'>
            {Translator("modal.text2")}
            </Button>
            <Button onClick={close}>{Translator("modal.cancel")}</Button>
          </ModalFooter>
            </chakra.form>
        </ModalContent>
      </Modal>
    </>
  )
}