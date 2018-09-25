import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Button } from 'react-native';
import { verifyResult } from '../funcoesVerificadoras/verifyResult.js';
import { connect } from 'react-redux';
import { verifyOption } from '../../../actions/questionAction.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class GridView extends Component {

    _renderIconRW(){
        if(this.props.check && this.props.answer) {
            return(
                <View style={styles.namePicIcon}>
                    <Icon name="check" size={30} color="#0066ff"/>
                    <View style={styles.ViewTextName}>
                        <Text style={styles.textName}>{this.props.name}</Text>
                    </View>
                </View>
                );
        } else if(!this.props.check && !this.props.answer && this.props.disabled) {
            return(
                <View style={styles.namePicIcon}>
                    <Icon name="remove" size={30} color="#ff0000"/>
                    <View style={styles.ViewTextName}>
                        <Text style={styles.textName}>{this.props.name}</Text>
                    </View>
                </View>
            );
        }
        return( 
            <Button
                title='Check'
                onPress={() => this.props.verifyOption(this.props.answer)}
                color='#311556'
                disabled={this.props.disabled}
            />);
    }

    render() {
        return(
            <View>
                <View style={styles.viewPrincipal}>
                    <View style={[
                            this.props.check && this.props.answer ? styles.gridViewRight : styles.gridView]}>
                        <TouchableOpacity>
                            <Image 
                                source={this.props.image}
                                style={styles.image}
                                resizeMode='contain'
                            />
                           <View style={styles.ViewIconRW}>{this._renderIconRW()}</View> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );s
    }
}

const mapStateToProps = state => {
    return (
        {
            check: state.questionReducer.check,
            disabled: state.questionReducer.disabled,
        }
    );
  }
  


const styles = StyleSheet.create({
    viewPrincipal: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridView: {
        height: (Dimensions.get('window').height/2.7) - 11,
        width: (Dimensions.get('window').width/2.5) - 4,
        margin: 5,
        borderColor: 'white',
        backgroundColor: "#fff"
    },
    gridViewRight: {
        height: (Dimensions.get('window').height/2.7) - 11,
        width: (Dimensions.get('window').width/2.5) - 4,
        margin: 5,
        borderColor: '#4B2D73',
        borderWidth: 5,
        backgroundColor: 'white'
    },
    namePicIcon: {
        flexDirection: 'row', 
        alignItems: 'flex-end'
    },
    textName: {
        fontSize: 18
    },
    image: {
        width: null, 
        height: 200
    },
    ViewIconRW: {
        margin: 5
    },
    ViewTextName: {
        width: '100%',
       justifyContent: 'center',
       alignItems: 'center' 
    }
})
export default connect(mapStateToProps, { verifyOption })(GridView);
