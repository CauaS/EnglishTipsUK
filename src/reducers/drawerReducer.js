import { CHANGE_IMAGE } from '../actions/types.js';
import { AsyncStorage } from 'react-native';

const iconProfile = require('../imgs/Icon/user_image.png');

const INITIAL_STATE = { 
   avatarSource: iconProfile
}

export default (state = INITIAL_STATE, action) => {   

    if (action.type == CHANGE_IMAGE) {  
        //grava no async o conteúdo do action.payload;      
        AsyncStorage.setItem('@imagemUsuario:imageProfile', JSON.stringify(action.payload));       

        return { ...state, avatarSource: action.payload}
    }

    return state;
}