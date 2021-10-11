import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { primaryColor, secondColor } from '../data/Colors'
import Transactions from '../components/Transactions'


const Details = ({navigation, route}) => {
    console.log(route)
    return (
        <View style={styles.details}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backArrow} onPress={()=>navigation.goBack()} >
                    <MaterialIcons name="arrow-back" color={secondColor} size={30}  />
                </TouchableOpacity>
                <View >
                    <Text style={styles.headerText}>Details Of {route.params.item} </Text>
                    <Text style={styles.headerText2}>20 transactions done today </Text>
                </View>
            </View>
            <View>
                <ScrollView style={styles.transactions} >
                    <Transactions />
                    <Transactions />
                    <Transactions />
                    <Transactions />
                    <Transactions />
                    <Transactions />
                </ScrollView>
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    details: {
        flex: 1,
        backgroundColor: primaryColor,
    },
    header: {
        marginBottom: 30,
    },
    backArrow: {
        width: 100,
        padding: 10,
        // borderColor: secondColor,
        // borderWidth: 2,

    },
    headerText: {
        marginBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: secondColor,
        textDecorationLine: 'underline',
    },
    headerText2: {
        fontSize: 15,
        textAlign: 'center',
        color: secondColor,
    },
    body: {

    },
    transactions: {
        padding: 20,
    }
})
