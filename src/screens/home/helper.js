import React from 'react'
import { View,  } from 'react-native'

const cryptoMin=200 // in euro
const CryptoFull=2000 // in euro

const intouchMin=500 // in euro
const intouchFull=5000 // in euro

const setParams=(crypto, amount)=>{
    if(crypto) {
        let red=amount<=cryptoMin
        let percent
        if(red) percent=1
        else {
            percent=Math.floor(amount*10/CryptoFull)
        }
        return [red, percent]
    } else {
        let red=amount<=intouchMin
        let percent
        if(red) percent=1
        else {
            percent=Math.floor(amount*10/intouchFull)
        }
        return [red, percent]
    }
}

const setBar=(type, amount, style, color)=>{
    const [red, percent]=setParams(type, amount)
    console.log(percent)
    return (
        <View style={{...style, backgroundColor: color+'70'}}>
            <View style={{backgroundColor: red ? "#fd0505" : color ,
                 height: 20, flex: percent}}
            ></View>
            <View style={{backgroundColor: "#00000000", height: 20, flex: 10-percent}}></View>
        </View>
    )
}

const setIntouchBar=()=>{

}

export { setBar }