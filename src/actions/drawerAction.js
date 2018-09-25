import { CHANGE_IMAGE } from './types.js';

export const changeImage = ( source ) => {
    return {
        type: CHANGE_IMAGE,
        payload: source
    }
}