import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
function LoginScreen(): JSX.Element {

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");

    function login(){
        const dados = {
            email: email,
            password: password,

        }

        console.log(dados);
    }
return(
    <View style={styles.container}>
        <Image
        style={styles.logo}
         resizeMode='contain'
        source={require('../assets/images/user.png')} />

        
            
    
        <View style={styles.card}>
            <Text style={styles.title}>Login</Text>
           < TextInput
           style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#8f299d" 
            onChangeText={(textEmail) => setEmail(textEmail)}
            />
          < TextInput
          style={styles.input}
           placeholder="Senha"
            placeholderTextColor="#8f299d" 
             onChangeText={(textPassword) => setPassword(textPassword)}
             secureTextEntry
             />


        <TouchableOpacity style={styles.button}
            onPress={()=>{login()}}>
            <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        
        <TouchableOpacity>
            <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>Não possui conta? Cadastre-se!</Text>
        </TouchableOpacity>

        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#b95dc6'
    },
    logo:{
        width: 80,
        height: 80,
        marginBottom: 20,
        marginTop: -180
    },

    card: {backgroundColor: '#c17dcb',
    width: 300,
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: { width:0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151413',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor:"#D7D4D8",
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    button: {
        backgroundColor: '#8f299d',
        height: 40,
        borderRadius: 8
    },
    buttonText: {
        color: 'FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
    },
    forgotPassword: {
        color: '#94bbe9',
        textAlign: 'center',
        marginTop: 10,
    }
    }


);

export default LoginScreen;
