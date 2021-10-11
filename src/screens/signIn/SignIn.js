import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { primaryColor, secondColor, tranparent2 } from '../../data/Colors'

const SignIn = ({user, navigation}) => {
    const [state, setState]=useState("")

    const sigIn=(text)=>{
        if(text===user.password) navigation.navigate('home')
    }

    console.log(user)
    return (
        <View style={styles.signin}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{user.name}</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.password}>
                    <Text style={styles.text}>enter your pin code</Text>
                    <TextInput style={styles.textInput} secureTextEntry keyboardType="number-pad"  placeholder="your password" onChangeText={(text)=>sigIn(text)} />
                </View>
                {/* <TouchableOpacity style={styles.button} onPress={saveUser} >
                    <Text style={styles.textButton}>Save</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

const mapStateToProps=state=>({user: state.userReducer.user})

export default connect(mapStateToProps)(SignIn)

const styles = StyleSheet.create({
    signin: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
    },
    header: {

    },
    headerText: {
        marginBottom: 50,
        fontSize: 40,
        fontWeight: 'bold',
        color: secondColor,
        textTransform: 'capitalize'
    },
    form: {
        // borderWidth: 1,
        // borderColor: secondColor,
        width: 300,
    },
    name: {
        marginBottom: 35
    },
    password: {
        marginBottom: 35,
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: secondColor,
        color: secondColor,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        color: tranparent2,
        fontSize: 30,
        textAlign: 'center'
    },
})
