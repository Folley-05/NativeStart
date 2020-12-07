import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

export class First extends Component {
    nav=()=>{
        this.props.navigation.navigate('second')
    }
    dispatch=this.props.dispatch
    testAction=()=>({
            type: 'ADD',
            value: this.props.test.length + 1
    })
    displayStore=()=>{
        let storeText=""
        this.props.test.map(item=>{
            storeText=storeText+item+', '
        })
        return storeText
    }
    render() {
        console.log('le store', this.props.test)
        return (
            <View>
                <Text style={styles.title} > Hello </Text>
                <Text style={styles.text} >le premier composant</Text>
                <Text style={styles.text} >le store contient : {this.displayStore()}</Text>
                <Button title="acceder au second screen" onPress={this.nav} />
                <Button title="envoyer" onPress={()=>this.dispatch(this.testAction())} />
            </View>
        )
    }
}

const mapStateToProps=state=>({
    test: state.test
})

export default connect(mapStateToProps)(First)

const styles=StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: "bold"
    },
    text: {
        fontSize: 20
    }
})
