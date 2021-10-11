import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Transactions = ({wallet, amount}) => {
    return (
        <TouchableOpacity style={styles.transaction}>
            <Text style={styles.transactionText}>1Fsdjsd1223jysduy          20 EUR      10h</Text>
        </TouchableOpacity>
    )
}

export default Transactions

const styles = StyleSheet.create({
    transaction: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#817f7f98',
    },
    transactionText: {
        fontSize: 20,
        color: '#fff'
    }
})
