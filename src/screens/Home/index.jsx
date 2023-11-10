import { Alert, Button } from "react-native"
import { Container, Input, Titulo } from "./style"
import api from "../../services/axios"
import { useState } from "react"

function Home(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')

    function handleSave(){

        api.post('/vendedor/salvar', {
            nome, email, telefone, senha
        }
        ).then((response) => {
            const resposta = response.data
            
            console.log(resposta)
            Alert.alert("Vendedor cadastrado,", "UUID-" + resposta.uuid)
        }).catch((error) => {
            console.log(error)
            Alert.alert("Problema ao gravar")
        })
    }

    return(
        <Container>

            <Titulo>Cadastro</Titulo>

            <Input onChangeText={setNome} placeholder="Informe seu Nome"/>
            <Input onChangeText={setTelefone} placeholder="Informe seu Telefone"/>
            <Input onChangeText={setEmail} placeholder="Informe seu E-mail"/>
            <Input onChangeText={setSenha} secureTextEntry placeholder="Informe sua Senha"/>

            <Button onPress={handleSave} title="Cadastrar"/>
        </Container>
    )
}

export default Home