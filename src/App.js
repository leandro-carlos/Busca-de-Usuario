import React, { useState } from "react";
import { View, Image, Text, Button, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'

import { buscaUsuario } from "./requisicoes/buscaUsuario";

export default function App() {

  const [nomeUsuario, setNomeUsuario] = useState('')
  const [usuario, setUsuario] = useState(null)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [seguidores, setSeguidores] = useState('')
  const [seguindo, setSeguindo] = useState('')



  async function busca() {
    const resultado = await buscaUsuario(nomeUsuario)

    if (resultado) {
      setUsuario(resultado.avatar_url)
      setNome(resultado.name)
      setEmail(resultado.email)
      setSeguidores(resultado.followers)
      setSeguindo(resultado.following)
    } else {
      Alert.alert("Ops...", "Usuario não encontrado!")
      setNome('')
    }
  }

  return (
    <View style={style.background}>

      {
        nome &&

        <>
          <Text style={style.tittle}> Perfil </Text>
          <Image source={{ uri: usuario }} style={style.imagePerfil} />


          <Text style={style.name}>{nome}</Text>
          <Text style={style.email}> {email}</Text>


          <View style={style.areaSeguidor}>

            <Text style={style.follows}>{seguidores} Seguidores</Text>
            <Text style={style.following}>{seguindo} seguindo</Text>

          </View>

          <TouchableOpacity>
            <Text>Ver repositórios</Text>
          </TouchableOpacity>
        </>
      }
      <TextInput placeholder="Busque por um usuario" style={style.campoBusca} onChangeText={(text) => { setNomeUsuario(text) }}></TextInput>
      <Button title="Buscar" onPress={busca} />
    </View>

  )
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  tittle: {
    paddingVertical: 30,
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  },
  imagePerfil: {
    marginTop: 70,
    height: 150,
    width: 150,
    borderRadius: 150,
  },
  name: {
    color: "black",
    fontSize: 21,
    paddingTop: 15
  },
  email: {
    color: "gray",
    fontSize: 15,
    paddingBottom: 15
  },
  areaSeguidor: {
    flexDirection: "row",
    paddingVertical: 20
  },

  follows: {
    paddingHorizontal: 50
  },
  following: {
    paddingHorizontal: 50

  },
  campoBusca: {
    borderWidth: 1,
    borderColor: "#F3F3F3",
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
    width: "50%",
    paddingHorizontal: 10,
    marginVertical: 15,
  }

})