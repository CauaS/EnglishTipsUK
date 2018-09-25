import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { changeImage } from '../actions/drawerAction.js'

//Icon
const camera = require('../imgs/Icon/camera_white.png');
const ImageProfile = require('../imgs/Icon/user_image.png');

class HeaderUserDrawer extends Component {
   
  componentWillMount() { 
    //AsyncStorage.removeItem('@imagemUsuario:imageProfile'); 
  }

  componentDidMount() {
  //Assim que o compenent é monstado dispara o função abaixo para buscar do async a imagem salda no reducer.
    AsyncStorage.getItem('@imagemUsuario:imageProfile').then(value => {
      if(value !== null ){
          image = value ? JSON.parse(value) : [];
          this.props.changeImage(image);      
        }
        else{
        }
      });
  } 

  _retrieveData() {
    console.log("_retrieveData prosp => "+ this.props);
  } 

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
  
    ImagePicker.showImagePicker(options, (response) => {

        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };           
          this.props.changeImage(source);     
        }
      });
    } 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewIconImage}>
          <View style={{ zIndex: 0, elevation: 1}}>
            <Image style={styles.avatar} source={this.props.avatarSource}/>
          </View>
          <View style={styles.viewButtonCamera}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <Image source={camera}  /> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

//retorna estatos do redux como sendo props do componente
const mapStateToProps = state => {
  return (
      {
        avatarSource: state.drawerReducer.avatarSource,
      }
  );
}

export default connect(mapStateToProps, { changeImage })(HeaderUserDrawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    zIndex: 0
  },
  viewIconImage: {
    alignItems: 'flex-end',
    zIndex: 0,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 85,
    borderWidth: 3,
    borderColor: 'white',
  },  
  viewButtonCamera: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    //backgroundColor: '#311556',
    backgroundColor: '#5959AB',
    borderRadius: 80,
    zIndex: 1,
    elevation: 2,
    marginTop: -40
  }
});

