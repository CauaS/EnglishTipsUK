import React,{ Component } from 'react';
import Router from './Router.js';
import SplashScreen from 'react-native-splash-screen';

import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index.js';

export default class App extends Component {   
    
    componentDidMount() {
        SplashScreen.hide();
    }
    
    render() {       
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        )        
    }
}