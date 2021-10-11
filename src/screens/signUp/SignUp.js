import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { primaryColor, secondColor, tranparent2 } from '../../data/Colors'
import { SET_USER, setUser } from '../../store/action'

const SignUp = ({navigation, dispatch, user}) => {
    const [state, setState]=useState({name: "", password: ""})

    const handleChange=(field, text)=>{
        setState({...state, [field]: text})
    }

    const saveUser=()=>{
        dispatch(setUser(state))
        navigation.navigate('home')
    }

    console.log(user)
    return (
        <View style={styles.signup}>
            <View style={styles.form}>
                <View style={styles.name}>
                    <Text style={styles.text}>enter your name</Text>
                    <TextInput style={styles.textInput} placeholder="your name" onChangeText={(text)=>handleChange('name', text)} />
                </View>
                <View style={styles.password}>
                    <Text style={styles.text}>enter your pin code</Text>
                    <TextInput style={styles.textInput} secureTextEntry keyboardType="number-pad"  placeholder="your password" onChangeText={(text)=>handleChange('password', text)} />
                </View>
                <TouchableOpacity style={styles.button} onPress={saveUser} >
                    <Text style={styles.textButton}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps=state=>({user: state.userReducer.user})

export default connect(mapStateToProps)(SignUp)

const styles = StyleSheet.create({
    signup: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
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
    button: {
        display: 'flex',
        alignItems: 'center',
        width: 150,
        marginLeft: 75,
        padding: 10,
        backgroundColor: "#cc1616",
        borderRadius: 8,
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: secondColor,
        color: secondColor,
        fontSize: 35,
        fontWeight: 'bold',
    },
    text: {
        color: tranparent2,
        fontSize: 30,
    },
    textButton: {
        color: secondColor,
        fontSize: 30,
        fontWeight: 'bold'
    }

})
