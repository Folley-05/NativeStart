import React, { useEffect, useState, } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { primaryColor, secondColor, tranparent2 } from '../../data/Colors'
import { setBar } from './helper'
import { getBalance } from '../../functions/getBalance'
import { totalIntouchAmount, amountCrypto } from '../../functions/calculAmount'

const Home = ({navigation, user, dispatch}) => {
    const [state, setState]=useState({intouch: null, bc1: 0, bc2: 0, rate: 0})
    useEffect(() => {
        fetchData()
        let interval=setInterval(() => {
            fetchData()
        }, 50000)
        return () => {
            clearInterval(interval)
            console.log("home demonte")
        }
    }, [])

    async function fetchData() {
        let data=await getBalance()
        console.log(data)
        setState(data)
    }
    const nav=(route, params)=>{
        navigation.navigate(route, params)
    }
    

    console.log(state, user, dispatch)
    return (
        <View style={styles.home}>
            {state.intouch ? (
                <>
                <TouchableOpacity style={styles.section}>
                        <Text style={styles.sectionName}>wallet de distribution</Text>
                        <Text style={styles.sectionAmount}>{amountCrypto(state.bc1, state.rate)} <FontAwesome name="euro" color={secondColor} size={40} /></Text>
                        {setBar(true, amountCrypto(state.bc1, state.rate), styles.legendeColor, "#e67e22")}
                        {/* <View style={{...styles.legendeColor, backgroundColor: '#e67e2270'}}>
                            <View style={{backgroundColor: "#e67e22", height: 20, flex: 1}}></View>
                            <View style={{backgroundColor: "#00000000", height: 20, flex: 1}}></View>
                        </View> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.section}>
                        <Text style={styles.sectionName}>wallet de reception</Text>
                        <Text style={styles.sectionAmount}>{amountCrypto(state.bc2, state.rate)} <FontAwesome name="euro" color={secondColor} size={40} /></Text>
                        <View style={{...styles.legendeColor, backgroundColor: '#d35400'}}>
                            {/* <View style={{backgroundColor: "#d35400", height: 20, flex: 1}}></View>
                            <View style={{backgroundColor: "#00000000", height: 20, flex: 1}}></View> */}
                        </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.section} onPress={()=>nav('intouch', state.intouch)}>
                        <Text style={styles.sectionName}>comptes intouch</Text>
                        <Text style={styles.sectionAmount}>{totalIntouchAmount(state.intouch)} <FontAwesome name="euro" color={secondColor} size={40} /></Text>
                        {setBar(false, totalIntouchAmount(state.intouch), styles.legendeColor, "#2980b9")}
                        {/* <View style={{...styles.legendeColor, backgroundColor: '#2980b970'}}>
                            <View style={{backgroundColor: "#2980b9", height: 20, flex: 1}}></View>
                            <View style={{backgroundColor: "#00000000", height: 20, flex: 1}}></View>
                        </View> */}
                </TouchableOpacity>
                </>
            ) : (<View style={styles.activityContainer}><ActivityIndicator size={120} color={secondColor} /></View> )}
        </View>
    )
}

const mapStateToProps=state=>({user: state.userReducer.user})

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 15,
        backgroundColor: primaryColor,
        // borderWidth: 2,
        // borderColor: secondColor
    },
    activityContainer :{
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
    },
    title: {
        marginBottom: 10,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    section: {
        marginBottom: 30,
        borderBottomWidth: 1,
        borderColor: '#817f7f98',
    },
    sectionName: {
        fontSize: 25,
        fontWeight: '400',
        color: tranparent2,
        textAlign: 'left',
    },
    sectionAmount: {
        margin: 10,
        fontSize: 40,
        fontWeight: 'bold',
        color: secondColor,
    },
    footer: {
        padding: 5,
    },
    legende: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginBottom: 10,
        borderBottomWidth: 0.2,
        borderColor: '#817f7f98',
    },
    legendeColor: {
        display: 'flex',
        flexDirection: 'row',
        // width: 20,
        marginBottom: 10,
        height: 20,
        borderRadius: 10,
    },
    legenteText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
})
