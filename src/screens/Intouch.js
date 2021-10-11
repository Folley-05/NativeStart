import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { primaryColor, secondColor, tranparent2 } from '../data/Colors'
import { getIntouchBalance } from '../functions/getBalance'

const Intouch = ({navigation, route}) => {
    // console.log(props)
    const [state, setState]=useState({cm: route.params.cm, ci: route.params.ci, sn: route.params.sn})
    useEffect(() => {
        let interval=setInterval(() => {
            fetchData()
        }, 50000);
        return () => {
            clearInterval(interval)
            console.log("intouch demonte")
        }
    }, [])

    async function fetchData() {
        let data=await getIntouchBalance()
        console.log(data)
        console.log("la data", data)
        setState(data)
    }
    // const back=clea

    return (
        <View style={styles.intouch}>
        <TouchableOpacity style={styles.backArrow} onPress={()=>navigation.goBack()} >
            <MaterialIcons name="arrow-back" color={secondColor} size={30}  />
        </TouchableOpacity>
            <View style={styles.section}>
                    <Text style={styles.sectionName}>Cameroun</Text>
                    <Text style={styles.sectionAmount}> {Math.floor(state.cm/656)} <FontAwesome name="euro" color={secondColor} size={40} /></Text>
                    <View style={{...styles.legendeColor, backgroundColor: '#e67e22'}}></View>
            </View>
            <View style={styles.section}>
                    <Text style={styles.sectionName}>Cote d'Ivoire</Text>
                    <Text style={styles.sectionAmount}>{Math.floor(state.ci/656)} <FontAwesome name="euro" color={secondColor} size={40} /></Text>
                    <View style={{...styles.legendeColor, backgroundColor: '#d35400'}}></View>
            </View>
            <View style={styles.section} >
                    <Text style={styles.sectionName}>Senegal</Text>
                    <Text style={styles.sectionAmount}>{Math.floor(state.sn/656)} <FontAwesome name="euro" color={secondColor} size={40} /></Text>
                    <View style={{...styles.legendeColor, backgroundColor: '#2980b9'}}></View>
            </View>
        </View>
    )
}

export default Intouch

const styles = StyleSheet.create({
    intouch: {
        flex: 1,
        padding: 20,
        backgroundColor: primaryColor
    },
    backArrow: {
        width: 100,
        padding: 10,
        // borderColor: secondColor,
        // borderWidth: 2,

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
})
