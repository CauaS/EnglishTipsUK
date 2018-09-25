import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ListView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Questionclothes } from '../../Conteudo.js';
import GridView from './GridView';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

class MainCheckBoxExer extends Component {
    
    constructor(props){
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        })

        this.state = {
            dataSource: ds.cloneWithRows(Questionclothes),
        }
    }

    _renderMessage() {
        if(this.props.disabled && this.props.check) {
            return <Text style={styles.text}> RIGHT! </Text>
        }else if(this.props.disabled && !this.props.check) {
            return <Text style={styles.text}> WRONG! </Text>
        }
        return <Text style={styles.text}> ... </Text>;
    }

    _renderRow(rowData){
        return(
            <View style={styles.viewPrincipal}>
                <View style={styles.viewText}>
                    <Text style={styles.text}> Which imagem below is a Cap? </Text>
                </View>
                <GridView 
                    image={rowData.questionOne.opinions.opt1.name}
                    answer={rowData.questionOne.opinions.opt1.answer}
                    name={rowData.questionOne.opinions.opt1.nameT}
                />
                <GridView 
                    image={rowData.questionOne.opinions.opt2.name}
                    answer={rowData.questionOne.opinions.opt2.answer}
                    name={rowData.questionOne.opinions.opt2.nameT}
                />
                <GridView 
                    image={rowData.questionOne.opinions.opt3.name}
                    answer={rowData.questionOne.opinions.opt3.answer}
                    name={rowData.questionOne.opinions.opt3.nameT}
                />
                <GridView 
                    image={rowData.questionOne.opinions.opt4.name}
                    answer={rowData.questionOne.opinions.opt4.answer}
                    name={rowData.questionOne.opinions.opt4.nameT}
                />
            </View>
        );
    }

    render() {
        return(
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.state.dataSource}
                    renderRow={rowData => this._renderRow(rowData)}
                />
                <View style={styles.message}>{this._renderMessage()}</View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            disabled: state.questionReducer.disabled,
            check: state.questionReducer.check,
        }
    );
  }
  
export default connect(mapStateToProps, null)(MainCheckBoxExer);

const styles = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        marginTop: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Quicksand Bold',
        fontSize: 25
    },
    viewText: {
        marginBottom: 5
    },
    message: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
