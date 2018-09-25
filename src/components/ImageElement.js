import React,{ Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class ImageElement extends Component {
    render() {
        return (
            <View style={styles.viewPrincipal}>
                <Image 
                    resizeMode="contain"
                    source={this.props.data}
                    style={styles.image}
                >
                </Image>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    viewPrincipal: {
        flex: 1, 
        backgroundColor: '#fff'
    },
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        backgroundColor: '#FFF'
    }
})