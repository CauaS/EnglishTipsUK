import React, { Component } from 'react';
import { View, Text, Animated, ScrollView, StyleSheet, Image, Button } from 'react-native';

export default class TesteScroll extends Component {

    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
      }
    
    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 1900,              // Make it take a while
             }
        ).start();                        // Starts the animation
    }

    render() {

        let { fadeAnim } = this.state;

        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Animated.View                 // Special animatable View
                   style={{ width: 250, height: 50, backgroundColor: 'powderblue',opacity: fadeAnim }}
                >
                        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </Animated.View>   
            </View>
        );
    }
}
