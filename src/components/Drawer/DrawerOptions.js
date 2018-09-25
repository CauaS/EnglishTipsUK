import React,  { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HeaderUserDrawer from '../ImagePicker.js';

const home = require('../../imgs/Icon/home.png');
const exercicios = require('../../imgs/Icon/exercicios.png');

class DrawerOptions extends Component {
    render() {
        return (
            <View style={styles.viewPrincipal}>
                <View style={styles.viewHeader}>                    
                    <HeaderUserDrawer />                   
                </View>
                <View style={styles.viewOption}>
                    <ScrollView>
                        <TouchableOpacity
                            onPress={() => Actions.App()}
                            style={styles.TouchableOpacity} 
                        >
                            <Image source={home}/>
                            <Text 
                                style={styles.text}>
                                Home
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.ScreemListExer()}
                            style={styles.TouchableOpacity} 
                        >
                            <Image source={exercicios}/>
                            <Text 
                                style={styles.text}>
                                Exercicios
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewPrincipal: {
        flex:1
    },
    viewHeader: {
        flex:1,
        backgroundColor: '#4B2D73',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    viewOption: {
        flex: 2,
        marginTop:10
    },
    TouchableOpacity: {
        flexDirection: 'row', 
        marginBottom: 5, 
        paddingVertical: 10, 
        paddingHorizontal: 10 
    },
    text: {
        fontSize: 15, 
        marginLeft: 15, 
        fontWeight:'bold'
    },
    icon: {
        marginLeft: 15
    },
   
})

export default DrawerOptions;