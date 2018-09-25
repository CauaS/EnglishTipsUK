import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ListView, 
    StyleSheet, 
    CheckBox,
    TouchableOpacity,
} from 'react-native';
import  { phrasalVerbs } from './Conteudo';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import Orientation  from 'react-native-orientation';
import { Searchbar } from 'react-native-paper';

export default class ViewConteudoPhrasal extends Component{
    
    componentWillMount(){
        Orientation.unlockAllOrientations();
    }

    componentWillUnmount() {
        Orientation.lockToPortrait();
    }

    constructor(props) {
        super(props)

        this.changeState = this.changeState.bind(this);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

        this.state = { 
            dataSource : ds.cloneWithRows(phrasalVerbs),
            text: '',
            check: true
        }
    }
    
    changeState() {
        this.setState({
            check: !this.state.check
        })
    }

    filterSearch(texto) {
        // newLista a função filter que por sua vez recebe o array e uma function;
        // A function olha cada item chave assunto do array lista faz um indexOf com texto (compara) de texto existir em assunto é maior que -1;
        const newLista = _.filter(phrasalVerbs, a => {
            if(this.state.check == true){
                return a.descricao.toLowerCase().indexOf(texto.toLowerCase()) >-1;
            }            
            return a.descricao.indexOf(texto) >-1;            
        })

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newLista),
            text: texto
        })        
    }
    onListPressed(rowData) {
        Actions.ConteudoPhrasalVerb({ rowData, title:rowData.descricao });
    }
    _renderRow(rowData) {
        return (
            <View style={styles.listView}>
                <View style={styles.viewRight}>
                    <View>
                        <Text style={styles.textViewRight}>{rowData.contracao}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.viewText}
                    onPress={() => this.onListPressed(rowData)}
                >
                    <Text style={styles.textList}>{rowData.descricao}</Text>
                </TouchableOpacity>
            </View >
        ); 
    }
    
    render() {        
        return (
            <View style={{marginTop: -5}}>                
                <Searchbar
                    placeholder="Buscar termo..."
                    onChangeText={texto => this.filterSearch(texto)}
                    value={this.state.text}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox
                        value={this.state.check}
                        onChange={this.changeState}
                    /> 
                    <Text> Levar em considerção maiúsculas e minúscula na procura. </Text>
                </View> 
                <ListView
                    enableEmptySections
                    dataSource={this.state.dataSource}
                    renderRow={rowData => this._renderRow(rowData)}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        marginBottom: 5
    },
    listView: {
        flex: 1, 
        elevation:2,
        borderBottomWidth: 1, 
        borderColor: '#CCC', 
        marginVertical: 6,
        marginHorizontal: 8, 
        borderRadius: 4,
        flexDirection:'row',
        backgroundColor: 'white'
    },
    viewRight: {
        justifyContent: 'center',
        backgroundColor: '#54579E',
        borderRadius: 4
    },
    textViewRight: {
        color: 'white', 
        fontWeight: 'bold', 
        transform: [{ rotate: '90deg'}],
        fontSize: 13,        
    },
    viewText:{
        padding: 20,
    },
    textList: {
        marginLeft: 20,
        fontSize: 18,
    }
})