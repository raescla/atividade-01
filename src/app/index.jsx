import { useState } from 'react'; //Importar o uso de estado
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
    const [email, setEmail] = useState(''); // Declarar os estados
    const [senha, setSenha] = useState('');
    const [autenticado, setAutenticado] = useState(false);
    const [tentativas, atualizarTentativas] = useState (0);

    const bloqueado = tentativas >= 5;


    // const admin = {
    //     nome: "Raescla",
    //     idade: 28,
    //     gender: "Fem",
    //     profissao: "Professora"
    // }
    
    const url = autenticado === true
    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymWJLDx6HxmQX66UW57SAJ4xPzt28s4RkKA&s"
    : "https://images.icon-icons.com/2972/PNG/512/instagram_logo_icon_186894.png"

    // let url = "https://images.icon-icons.com/2972/PNG/512/instagram_logo_icon_186894.png"

    // if (autenticado === true){ // depende da variável de estado
    //     url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymWJLDx6HxmQX66UW57SAJ4xPzt28s4RkKA&s"
    // }

    

    function login(email,senha) {
        atualizarTentativas(tentativas + 1);
        // if(bloqueado) return null;

        if(email === "raescla" && senha ==="12345"){
            setAutenticado (true)
        } else {
            setAutenticado (false)
        }
        console.log(email === "raescla", senha ==="12345")
    }

    return (

        <View style={styles.container}>
            <Image
                width={100}
                height={100}
                source={{
                    uri: url
                }}
                style={styles.logo}
            />

            {autenticado && (
        <View style={{ backgroundColor: 'green', borderRadius: 4, paddingHorizontal: 24, paddingVertical: 8}}>
          <Text style={{ color: "white" }}>Você está autenticado!</Text>
        </View>
      )}

    
    {bloqueado && (
        <View style={{ backgroundColor: 'red', borderRadius: 4, paddingHorizontal: 30, paddingVertical: 10 }}>
          <Text style={{ color: "white" }}>Você está bloqueado!</Text>
        </View>
      )}


           

        {!autenticado && (    
            <TextInput 
                style={styles.email}
                placeholder="Email:" // poderia ter declarado apenas como styles.input, que serviria para ambos
                value={email} // Aula 15
                onChangeText={(textoDigitado) => setEmail(textoDigitado)} // Aula 15
                
            />
        )}
            

        {!autenticado && (  
            <TextInput 
            placeholder="Senha:" //texto de fundo
                style={styles.senha} 
                value={senha}
                onChangeText={(textoDigitado) => setSenha(textoDigitado)}
                secureTextEntry
                /> 
        )}


        {(!autenticado || !bloqueado) && (
            <TouchableOpacity
            style={styles.button}
            onPress={() => login (email, senha)}
            >
                
                <Text style={styles.entrar}>Entrar</Text>
                
            </TouchableOpacity>
        )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    logo: {
        borderRadius: 100,
        padding: 35,
        alignItems: "center",
        marginTop: -250,
        marginLeft: 150,
    },
    email: {
        borderRadius: 30,
        padding: 36,
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: "center", 
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: "#f5f1f4",
        color: "#020202"
    },

    senha: {
        borderRadius: 30,
        padding: 36,
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: "center",
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: "#f5f1f4",
        color: "#020202"
    },

    entrar: {
        borderRadius: 50,
        padding: 35,
        paddingHorizontal: 25,
        paddingVertical: 25,
        alignItems: "center",
        marginTop: 20,
        marginLeft: 65,
        marginRight: 65,
        borderColor: "#818381",
        backgroundColor: "#3ba7ff",
        color: "#ffffff",

    },
})

//Módulo 2 (17/03)


// Contador de Cliques
// import {useState} from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';

// export default function Contador() {
//     const [count, setCount] = useState(0);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.texto}>Cliques: {count}</Text>
//             <Button
//             title='Adicionar'
//             onPress={() =>setCount(count + 1)}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         borderRadius: 50,
//         padding: 35,
//         flex: 1,
//         justifyContent: "center"
        
//     },
// }
// )














// CTRL + J para abrir o terminal, e npm start para iniciar o APP

