import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export class Second extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title} > Second </Text>
                <Text style={styles.text} >le deuxieme composant</Text>
                <Text style={styles.text} >c'est ici que vont s'afficher les props (...)</Text>
                <Button title="acceder au first screen" onPress={()=>this.props.navigation.navigate('first')} />
                <Button title="acceder au third screen" onPress={()=>this.props.navigation.navigate('third')} />
            </View>
        )
    }
}

export default Second

const styles=StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: "bold"
    },
    text: {
        fontSize: 20
    }
})
