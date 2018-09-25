import React,{ Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { clothes } from '../exercicios/icons/IconExer.js';
import EachExercice from './EachExercice.js';

class ScreemListExer extends Component {

    render(){
        return(
            <View style={styles.viewPrincipal}>
                <View style={styles.viewButtonBack}>
                    <Button 
                        onPress={() => Actions.pop()}
                        title='back'
                        color='#4B2D73'
                    />
                </View>
                <View style={styles.viewClothes}>
                    <EachExercice 
                        listSectionTitle='Clothes'
                        ListAccordion='Clothes section'
                        description='Exercices about clothes section.'
                        ListAccordionIcon={clothes}
                        ListItemTitle='Do the questions with timer.'
                        ListItemTitle2='Dot it!'
                    />
                </View>   
            </View>
        );
    }
}

export default ScreemListExer;

const styles =  StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        backgroundColor: '#4B2D73'
    },
    viewButtonBack:{
        width: 55
    },
    viewClothes:{
        marginTop: 0,
        backgroundColor: '#4B2D73',
        elevation: 2,
        marginBottom: 5
    }
})