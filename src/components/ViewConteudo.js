import React,  { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { capituloCinco, capituloQuatro, capituloTres, capituloDois, capituloUm } from './funcoes/Funcoes.js';
import { lista } from './Conteudo';
import Orientation  from 'react-native-orientation';



export default class ViewConteudo extends Component {

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

        this.state = {
            dataSource: ds.cloneWithRows(lista),
            capituloRender: this.props.navigation.state.params.key
        }
    }

    componentDidMount() {
        Orientation.unlockAllOrientations();       
     }
     componentWillUnmount() {
         Orientation.lockToPortrait();
     }

    _caption(rowData, cap) {
        if(cap == 1) {
            return <View>{capituloUm(rowData)}</View>  
        }

        if (cap == 2) {
            return <View>{capituloDois(rowData)}</View>  
        }

        if (cap == 3) {
            return <View>{capituloTres(rowData)}</View>  
        }

        if (cap == 4) {
            return <View>{capituloQuatro(rowData)}</View>  
        }

        if (cap == 5) {
            return <View>{capituloCinco(rowData)}</View>
        }
    }
    _renderRow(rowData, capituloRender) {
        if (rowData.cap == capituloRender) {
            return (
                <View style={styles.viewPrincipal} >
                        <Text style={styles.titulo}>{rowData.assunto}</Text>
                        <View>{this._caption(rowData, capituloRender)}</View>
                </View>
            );
        }
        return (
           null
        );
    }

    render() {
        return(            
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this._renderRow(rowData, this.state.capituloRender)}
            />
        );
    }
}

const styles = StyleSheet.create({
    viewPrincipal: {
        flex: 1, 
        paddingHorizontal: 10, 
        borderBottomWidth: 1, 
        borderColor: '#CCC',
        marginTop:50,
        backgroundColor:'#4B2D73'
    },
    titulo: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
        color:'white'
    }
})