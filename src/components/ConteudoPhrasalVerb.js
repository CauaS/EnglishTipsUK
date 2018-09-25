import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    Button
} from 'react-native';
import { Actions }from 'react-native-router-flux';

export default class ConteudoPhrasalVerb extends Component {
    render() {
        return(
            <View style={{ marginTop: 5 }}>
                <ScrollView>
                    <View style={styles.ViewBackgroud}>
                        <Text style={styles.conteudoBold}> Meaning: </Text>
                        <Text style={styles.conteudo}>{this.props.rowData.meaning}</Text>
                    </View>
                    <View style={styles.ViewBackgroud}>
                        <Text style={styles.conteudoBold}> Example: </Text>
                            <Text style={styles.conteudo}>{this.props.rowData.example}</Text>
                            <Text style={styles.conteudo}>{this.props.rowData.example1}</Text>
                            <Text style={styles.conteudo}>{this.props.rowData.example2}</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <TouchableWithoutFeedback>
                            <Image 
                                source={this.props.rowData.img} 
                                resizeMode="contain"
                                style={styles.image}
                                overflow='hidden'
                                borderRadius={5}
                            />                    
                        </TouchableWithoutFeedback> 
                        <Button 
                            color="#54579E"
                            title='Ver imagem.'
                            onPress={() => Actions.ImageElement(this.props.rowData.img)}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({    
    image: {
        width: 337, 
        height:312, 
        backgroundColor: '#CCC', 
        marginBottom: 5
    },    
    subTitles: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5,
        fontSize: 18,
    },
    subTitlesIn:{
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 17,
        paddingLeft: 5
    },
    conteudo: {
        marginLeft: 6,
        fontSize: 16,
        marginBottom: 5,
        paddingTop: 3
    },
    conteudoBold: {
        fontWeight:'bold',
        fontSize: 17
    },
    conteudoBoldEx: {
        fontWeight:'bold',
        fontSize: 16
    },
    ViewBackgroud: {
        backgroundColor: 'white',
        paddingLeft: 4,
        paddingBottom: 3,
        marginBottom: 9,
        marginHorizontal: 10,
        borderRadius: 5,
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: {
        width: 3,
        height: 3
        },
        shadowRadius: 1,
        shadowOpacity: 1
    }
});