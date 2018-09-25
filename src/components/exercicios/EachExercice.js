import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListAccordion, ListItem, ListSection } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

export default props => {
    return(
        <View style={styles.viewClothes}>
            <ListSection 
                title={props.listSectionTitle}
            >
                <ListAccordion
                    description={props.description}
                    title={props.ListAccordion}
                    icon={props.ListAccordionIcon}
                >
                    <ListItem 
                        title={props.ListItemTitle}
                        icon='alarm'
                        onPress={() => console.log('Clicou')} 
                    />
                    <ListItem 
                        title={props.ListItemTitle2}
                        icon='alarm-off'
                        onPress={() => Actions.MainCheckBoxExer({ title:'Select the correct option!'})} 
                    />
                </ListAccordion>
            </ListSection>
        </View>
    );
}

const styles =  StyleSheet.create({
    viewClothes:{
        marginTop: 0,
        backgroundColor: 'white',
        elevation: 2,
        marginBottom: 10
    }
})