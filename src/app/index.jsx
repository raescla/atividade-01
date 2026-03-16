import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function App() {
    return (

        <View style={styles.container}>
            <Image
                width={100}
                height={100}
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljqaDsIkzZQsQ01cpqsnbJ4TF75ZfXhVHQg&s"
                }}
                style={styles.logo}
            />
            <TextInput 
                placeholder="Email:" // poderia ter declarado apenas como styles.input, que serviria para ambos
                style={styles.email} 
            />
            <TextInput placeholder="Senha:"
                style={styles.senha} /> 

            <TouchableOpacity>
                <Text style={styles.entrar}>Entrar</Text>
                
            </TouchableOpacity>

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
        backgroundColor: "#000000",
        color: "#FFF",
        

    },



})






























// flexDirection: "column",
// alignItems: "center",
// paddingVertical: 48,
// paddingHorizontal: 32,
// backgroundColor: "#fdfffe",
// gap: 32


// CTRL + J para abrir o terminal, e npm start para iniciar o APP

// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     paddingVertical: 48,
//     paddingHorizontal: 32,
//     backgroundColor: "#fdfffe",
//     gap: 32
//   },
//   card: {
//     width: "100%",
//     borderRadius: 16,
//     padding: 24,
//     gap: 16,
//     backgroundColor: "#ececec",
//     alignItems: "center"
//   },
//    circle: {
//     width: 100,
//     height: 100,
//     backgroundColor: "#151316",
//     borderRadius: "100%"
//   },

//   titulo: {
//     fontSize: 22,
//     fontWeight: "700"
//   },
//   button: {
//     width: "100%",
//     paddingVertical: 16,
//     backgroundColor: "#9900ff",
//     borderRadius: 16,
//     alignItems: "center"
//   },
//   text: {
//     color: "#ebe3e3",
//     fontWeight: "bold",
//     fontSize: 16
//   }
// })