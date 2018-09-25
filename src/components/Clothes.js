import React,  { Component } from 'react';
import { 
    View, 
    Text , 
    Image, 
    Dimensions, 
    StyleSheet, 
    ListView, 
    ScrollView, 
    TouchableOpacity 
} from 'react-native';
import { clothes } from './Conteudo';
import { Actions }from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

//o method slice retorna somente o intervalo do array selecionado.

class Clothes extends Component {

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

        this.state = { 
            dataSource : ds.cloneWithRows(clothes.slice(0,9)),
            dataSource2 : ds.cloneWithRows(clothes.slice(9,18)),
            dataSource3 : ds.cloneWithRows(clothes.slice(18,27)),
            dataSource4 : ds.cloneWithRows(clothes.slice(27,31)),
        }
    }

    _renderRow(rowData){
        return(
            <TouchableOpacity style={styles.item}
                onPress={() => Actions.ImageElement({ title:rowData.name, data: rowData.img })}
            >
                <Image 
                    source={rowData.img}
                    ImageResizeMode='contain'
                    style={styles.imageItem}
                />
                <View style={styles.viewtText}>
                    <Text style={styles.text}>
                        {rowData.name}
                    </Text>
                </View>
            </TouchableOpacity> 
        ) 
    }

    render() {
        const renderPagination = (index, total, context) => {
            return (
              <View style={styles.paginationStyle}>
                <Text style={{ color: '#ffffff' }}>
                  <Text style={styles.paginationText}>{index + 1}</Text>/{total}
                </Text>
              </View>
            )
          }   

        return (
            <View style={styles.container}>
                <Swiper 
                    style={styles.wrapper} 
                    showsButtons={false}
                    loop={false}
                    renderPagination={renderPagination}
                >
                    <ListView
                        contentContainerStyle={styles.listView}
                        enableEmptySections
                        dataSource={this.state.dataSource}
                        renderRow={rowData => this._renderRow(rowData)}
                    />
                    <ListView
                        contentContainerStyle={styles.listView}
                        enableEmptySections
                        dataSource={this.state.dataSource2}
                        renderRow={rowData => this._renderRow(rowData)}
                    />
                    <ListView
                        contentContainerStyle={styles.listView}
                        enableEmptySections
                        dataSource={this.state.dataSource3}
                        renderRow={rowData => this._renderRow(rowData)}
                    />
                    <ListView
                        contentContainerStyle={styles.listView}
                        enableEmptySections
                        dataSource={this.state.dataSource4}
                        renderRow={rowData => this._renderRow(rowData)}
                    />
                </Swiper>
            </View>
        )
    }
}

export default Clothes;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
      },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    paginationStyle: {
        position: 'absolute',
        top: 17,
        right: 5,
        backgroundColor: '#311556',
        marginBottom: 5,
        borderRadius: 20,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    paginationText: {
        fontSize: 20
    },    
    container: {
        flex: 1,
        backgroundColor: '#4B2D73',
        paddingTop: 40,        
    },
    listView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        height: (Dimensions.get('window').height/3) - 11,
        width: (Dimensions.get('window').width/3) - 4,
    },
    imageItem: {
      borderRadius: 100,
      borderWidth: 3,
      height: 105,
      width: 105,
      borderColor: 'white',
    },
    viewtText: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})