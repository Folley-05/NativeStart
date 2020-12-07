import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class Third extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title} > Third </Text>
                <Text style={styles.text} >le troisieme composant</Text>
                <Text style={styles.text} >c'est ici que vont s'afficher les props (...)</Text>
            </View>
        )
    }
}

export default Third

const styles=StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: "bold"
    },
    text: {
        fontSize: 20
    }
})
