import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import Crypto from '../screens/Crypto'
import SignUp from '../screens/signUp/SignUp'
import SignIn from '../screens/signIn/SignIn'
import Home from '../screens/home/Home'
import Details from '../screens/Details'
import Intouch from '../screens/Intouch'

const Stack=createStackNavigator()

const Navigation = ({user}) => {

    console.log(user)
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{headerShown: false}}
            >
                {!user && <Stack.Screen name="signup" component={SignUp} />}
                <Stack.Screen name="signin" component={SignIn} />
                <Stack.Screen name="home" component={Home} options={{title: "hello"}} />
                <Stack.Screen name="details" component={Details} />
                <Stack.Screen name="intouch" component={Intouch} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps=state=>({user: state.userReducer.user})

export default connect(mapStateToProps)(Navigation)
