import React from 'react';
import { Alert, View, Text } from 'react-native';

export const verifyResult = (answered) => {
    answered === true ? null : Alert.alert("Errado", "Sua resposta está incorreta");
} 