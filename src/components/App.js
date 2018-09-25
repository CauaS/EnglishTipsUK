import React, { Component } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Image,
    StatusBar,
    Animated
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import  { lista } from './Conteudo';
import Orientation  from 'react-native-orientation';
import DrawerOptions from './Drawer/DrawerOptions.js';
import { DrawerActions } from 'react-navigation';
import { 
    around_world,
    good_communication,
    success, 
    what_happened,
    change_plan,
    phrasal_verb,
    clothes
} from '../imgs/cards/ImagesCards.js'
import { ingLog } from '../imgs/Image.js'; 

const list_icon =  require('../imgs/Icon/list_icon.png');

class App extends Component {

    componentDidMount() {
       Orientation.lockToPortrait();       
    }

    render() { 
        const keys = [1, 2, 3, 4, 5];

        return (
            <View style={styles.container}>
                <View style={styles.viewImageDrawer}>
                    <TouchableOpacity
                        onPress={() => Actions.drawerOpen()}
                    >
                        <Image source={list_icon}/>
                    </TouchableOpacity>                        
                </View>
                <ScrollView>
                    <Image
                        style = {styles.ImageLogo}
                        resizeMode="contain" 
                        source={ingLog}
                    />
                    <StatusBar 
                        backgroundColor='#311556'
                        barStyle='light-content'
                    />          
                
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => Actions.ViewConteudo({key: keys[0], title:'Media around the world'})}
                    >
                        <View>
                            <Image
                                source={around_world}
                                ImageResizeMode = 'contain'
                                style={styles.card_imageBackground}
                            />
                            <View style={styles.card_view_text}>
                                <Text style={styles.card_title}> 
                                    Media around the world.
                                </Text>
                                <Text style={styles.card_subtitle}> 
                                    Come and enjoy are special food and playground!
                                </Text>
                            </View>                            
                        </View>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => Actions.ViewConteudo({key: keys[1], title:'Good communication'})}
                    >
                        <View>
                            <Image
                                source={good_communication}
                                ImageResizeMode = 'contain'
                                style={styles.card_imageBackground}
                            />
                            <View style={styles.card_view_text}>
                                    <Text style={styles.card_title}> 
                                        Good communication.
                                    </Text>
                                    <Text style={styles.card_subtitle}> 
                                        Come and enjoy are special food and playground!
                                    </Text>
                                </View>                                
                        </View>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => Actions.ViewConteudo({key: keys[2], title:'Success'})}
                    >
                        <View>
                            <Image
                                source={success}
                                ImageResizeMode = 'contain'
                                style={styles.card_imageBackground}
                            />
                            <View style={styles.card_view_text}>
                                <Text style={styles.card_title}> 
                                    Success.
                                </Text>
                                <Text style={styles.card_subtitle}> 
                                    Come and enjoy are special food and playground!
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => Actions.ViewConteudo({key: keys[3], title:'What happened?'})}
                    >
                        <View>
                            <Image
                                source={what_happened}
                                ImageResizeMode = 'contain'
                                style={styles.card_imageBackground}
                            />
                            <View style={styles.card_view_text}>
                                <Text style={styles.card_title}> 
                                    What Happened.
                                </Text>
                                <Text style={styles.card_subtitle}> 
                                    Come and enjoy are special food and playground!
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>            

                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => Actions.ViewConteudo({key: keys[4], title:'A change of plan'})}
                    >
                        <View>
                            <Image
                                source={change_plan}
                                ImageResizeMode = 'contain'
                                style={styles.card_imageBackground}
                            />
                            <View style={styles.card_view_text}>
                                <Text style={styles.card_title}> 
                                    A Change of Plan
                                </Text>
                                <Text style={styles.card_subtitle}> 
                                    Come and enjoy are special food and playground!
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>   
                
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => Actions.ViewConteudoPhrasal({key: keys[5], title:'Phrasal Verbs'})}
                    >
                        <View>
                            <Image
                                source={phrasal_verb}
                                ImageResizeMode = 'contain'
                                style={styles.card_imageBackground}
                            />
                                <View style={styles.card_view_text}>
                                    <Text style={styles.card_title}> 
                                        Phrasal Verbs
                                    </Text>
                                    <Text style={styles.card_subtitle}> 
                                        Come and enjoy are special food and playground!
                                    </Text>
                                </View>
                        </View>
                    </TouchableOpacity>                                                         
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => Actions.Clothes()}
                    >
                        <View>
                            <Image
                                source={clothes}
                                ImageResizeMode = 'contain'
                                style={styles.card_imageBackground}
                            />
                                <View style={styles.card_view_text}>
                                    <Text style={styles.card_title}> 
                                        Clothes Vocabulary
                                    </Text>
                                    <Text style={styles.card_subtitle}> 
                                        Come and enjoy are special food and playground!
                                    </Text>
                                </View>
                        </View>
                    </TouchableOpacity>                                                         
                </ScrollView>
            </View>
        );
    }
}
export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4B2D73'
    },
    ImageLogo: {
        height: 100, 
        marginLeft: 95
    },
    viewImageDrawer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    card: {
        marginHorizontal: 7,
        marginVertical: 5,
        flex: 1,
        borderWidth: 1,
        borderColor: '#311556',
        backgroundColor: '#311556',
        borderRadius: 8,
        elevation: 3
    },
    card_imageBackground: {
        width: '100%', 
        height: 120 ,
        justifyContent:'flex-end',
        borderTopRightRadius: 5,        
        borderTopLeftRadius: 5,        
    },
    card_view_text: {
        margin: 6
    },
    card_title: {
        fontSize: 15, 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'Quicksand Bold',
    },
    card_subtitle: {
        fontSize: 12, 
        color: 'white',
    }
})
