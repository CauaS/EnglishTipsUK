import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, Stack, Drawer, Lightbox } from 'react-native-router-flux';
import App from './components/App';
import ViewConteudo from './components/ViewConteudo';
import ImageElement from './components/ImageElement.js';
import ViewConteudoPhrasal from './components/ViewConteudoPhrasal.js';
import ConteudoPhrasalVerb from './components/ConteudoPhrasalVerb.js';
import DrawerOptions from './components/Drawer/DrawerOptions.js';
import ImagePickerComponent from './components/ImagePicker.js'
import TesteScroll from './components/TesteScroll.js';
import Clothes from './components/Clothes.js';
import ScreemListExer from './components/exercicios/ScreemListExer.js';
import MainCheckBoxExer from './components/exercicios/checkboxExerc/MainCheckBoxExer.js';

const list_icon = require('../src/imgs/Icon/list_icon.png');

export default props => (
    <Router>
        <Stack key = "root">
            <Scene 
                key= "ViewConteudo" 
                component={ViewConteudo} 
                title='Conteúdo' 
                navigationBarStyle={styles.navigationBarStyle}
                tintColor= '#fff'
                navtransparent
            />
            <Scene 
                key= "ImageElement" 
                component={ImageElement} 
                title='Imagem' 
            />
            <Scene 
                key= "ViewConteudoPhrasal" 
                component={ViewConteudoPhrasal} 
                title='Phrasal Verbs' 
            />
            <Scene 
                key= "ConteudoPhrasalVerb" 
                component={ConteudoPhrasalVerb} 
                title='Phrasal Verbs' 
            />
            <Scene 
                key= "Clothes" 
                component={Clothes} 
                title='Clothes'
                navigationBarStyle={styles.navigationBarStyle}
                tintColor= '#fff'
                navtransparent
            />
            <Scene 
                key= "MainCheckBoxExer" 
                component={MainCheckBoxExer} 
                title='Clothes'
                navigationBarStyle={styles.navigationBarStyle}
                tintColor= '#fff'
                navtransparent
            />

            <Scene 
                drawer
                initial
                contentComponent={DrawerOptions}
                key="DrawerOptions"
                drawerIcon={list_icon}
                drawerWidth={300}
                hideNavBar
            >
                <Scene 
                    key="App" 
                    component={App} 
                    hideNavBar
                />                
                <Scene 
                    key="ScreemListExer" 
                    component={ScreemListExer} 
                    hideNavBar
                />                
            </Scene>            
        </Stack>
    </Router>
);

const styles = StyleSheet.create({ 
    navigationBarStyle: {
        position: 'absolute', 
        backgroundColor: '#4B2D73', 
        zIndex: 100, 
        top: 0, 
        left: 0, 
        right: 0,
        borderBottomWidth: 0, 
        elevation: 0,
        marginBottom: 50,
        zIndex: 0
    }
})