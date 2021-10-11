import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Pie from 'react-native-pie'

import { getBalance } from '../functions/getBalance'

const OldHome = ({navigation}) => {
    useEffect(()=>{
        getBalance()
        console.log("hello")
        return ()=>{
            console.log("home se demonte")
        }
    }, [])

    console.log(navigation)
    return (
        <View style={styles.home}>
            <View style={styles.header}>
                <Text style={styles.title}>Accounts/Wallets</Text>
                <Text style={styles.headerText}>Total sold is 200 EUR shared like this</Text>
            </View>
            <View style={styles.body}>
                <Pie
                    radius={145}
                    innerRadius={73}
                    // dividerSize={1}
                    // strokeCap='round'
                    backgroundColor='#000'
                    sections={[
                      {
                        percentage: 20,
                        color: '#e67e22',
                      },
                      {
                        percentage: 20,
                        color: '#d35400',
                      },
                      {
                        percentage: 20,
                        color: '#2ecc71',
                      },
                      {
                        percentage: 20,
                        color: '#8e44ad',
                      },
                      {
                        percentage: 20,
                        color: '#2980b9',
                      },
                    ]}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.legende} onPress={()=>navigation.navigate('details', {item: 'btc1'})}>
                    <View style={{...styles.legendeColor, backgroundColor: '#e67e22'}} />
                    <Text style={styles.legenteText}>Distribution bitcoin wallet</Text>
                    <Text style={styles.legenteText}>200 Eur</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.legende} onPress={()=>navigation.navigate('details', {item: 'btc2'})}>
                    <View style={{...styles.legendeColor, backgroundColor: '#d35400'}} />
                    <Text style={styles.legenteText}>Receive bitcoin wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.legende} onPress={()=>navigation.navigate('details', {item: 'bch'})}>
                    <View style={{...styles.legendeColor, backgroundColor: '#2ecc71'}} />
                    <Text style={styles.legenteText}>BitcoinCash wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.legende} onPress={()=>navigation.navigate('details', {item: 'usdt'})}>
                    <View style={{...styles.legendeColor, backgroundColor: '#8e44ad'}} />
                    <Text style={styles.legenteText}>USDT wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.legende}>
                    <View style={{...styles.legendeColor, backgroundColor: '#2980b9'}} />
                    <Text style={styles.legenteText}>Intouch accounts sold</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OldHome

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        
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
    body: {
        display: 'flex',
        alignItems: 'center',
        margin: 20,
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
        width: 20,
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
