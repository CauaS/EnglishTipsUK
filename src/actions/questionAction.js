import { CHECK } from './types.js';

export const verifyOption = (answer) => {
    return {
        type: CHECK,
        payload: answer
    }
}