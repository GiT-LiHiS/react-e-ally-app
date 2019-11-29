import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ActivityIndicator,
  Modal,
  FlatList
} from 'react-native';

import { MonoText } from '../components/StyledText';



class DetailScreen extends React.Component {


    state = {
        modalVisible: false,
        modalVisible2: false,
        modalVisible3: false,
        error: null,
        isLoaded: false,
        item: [],
        itemid: this.props.navigation.getParam('itemId') ,
        url:'http://192.168.43.33:8000/itemname/'+this.props.navigation.getParam('itemId')+'/?format=json' ,
         isLoading: false
      };
      

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
      setModalVisible2(visible) {
        this.setState({modalVisible2: visible});
      }
      setModalVisible3(visible) {
        this.setState({modalVisible3: visible});
      }


      componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
         
          
            
            this.setState({itemid: this.props.navigation.getParam('itemId')});
            this.setState({url: 'http://192.168.43.33:8000/itemname/'+this.props.navigation.getParam('itemId')+'/?format=json'});
        
            return fetch(this.props.navigation.getParam('itemId'))
              .then((response) => response.json())
              .then((responseJson) => {
        
                this.setState({
                  isLoading: true,
                  item: responseJson,
                  
                }, function () {
        
                });
        
              })
              .catch((error) => {
                console.error("ERRRORORORORO");
                alert("Scan item first")
              });
        
           
        });
      }

      
  
    render() {

        if (!this.state.isLoading) {
            return (
              <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
              </View>
            )
          }
        return (
            
    
          <ScrollView style={styles.container}>
            
            <View style={[styles.modalcont, this.state.modalVisible || this.state.modalVisible2 || this.state.modalVisible3 ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '', {borderColor:'rgba(0,0,0,0.5)'}]}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                }}>
                <View style={{justifyContent:'center',alignItems:'center',textAlign:'center',paddingTop:80,}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                     <Image
                  style={{width: 400, height: 400,borderRadius:10,alignItems:'center',alignSelf:'center',paddingTop:20,marginTop:20,paddingBottom: 20,}}
                   source={{uri: this.state.item.image}}
               />
                    </TouchableOpacity>
                  </View> 
             </Modal>

             <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible2}
                onRequestClose={() => {
                }}>
                <View style={{justifyContent:'center',alignItems:'center',textAlign:'center',paddingTop:80,}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible2(!this.state.modalVisible2);
                      }}>
                     <Image
                  style={{width: 400, height: 400,borderRadius:10,alignItems:'center',alignSelf:'center',paddingTop:20,marginTop:20,paddingBottom: 20,}}
                   source={{uri: this.state.item.image2}}
               />
                    </TouchableOpacity>
                  </View> 
             </Modal>


             <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible3}
                onRequestClose={() => {
                }}>
                <View style={{justifyContent:'center',alignItems:'center',textAlign:'center',paddingTop:80,}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible3(!this.state.modalVisible3);
                      }}>
                     <Image
                  style={{width: 400, height: 400,borderRadius:10,alignItems:'center',alignSelf:'center',paddingTop:20,marginTop:20,paddingBottom: 20,}}
                   source={{uri: this.state.item.image3}}
               />
                    </TouchableOpacity>
                  </View> 
             </Modal>











                      



          <View style={{paddingTop:10}}>
          <Text style={styles.title}>{this.state.item.itemname}</Text> 
          </View>
        
              <TouchableOpacity onPress={() => {
                 this.setModalVisible(true);
                 }}>
              <Image
                 style={[styles.image, this.state.modalVisible || this.state.modalVisible2 || this.state.modalVisible3 ? {tintColor:'rgba(0,0,0,0.5)'} : '', {borderColor:'rgba(0,0,0,0.5)'}]}
                 source={{uri: this.state.item.image}}
               />
              </TouchableOpacity>
            
              
              <Text style={styles.title}>{'By '+this.state.item.Brand.name}</Text> 
              <Text style={styles.title}>{this.state.item.price}$</Text>


                  <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>


                  <View style={{paddingLeft:20,paddingRight:20}}>
                  <TouchableOpacity onPress={() => {
                 this.setModalVisible2(true);
                 }}>
              <Image
                 style={[styles.image2, this.state.modalVisible || this.state.modalVisible2 || this.state.modalVisible3 ? {tintColor:'rgba(0,0,0,0.5)'}  : '' , {borderColor:'rgba(0,0,0,0.5)'}]}
                 source={{uri: this.state.item.image2}}
               />
              </TouchableOpacity>


                  </View>
                 
                  <View style={{paddingLeft:20,paddingRight:20}}>
                  <TouchableOpacity onPress={() => {
                 this.setModalVisible3(true);
                 }}>
              <Image
                 style={[styles.image2, this.state.modalVisible || this.state.modalVisible2 || this.state.modalVisible3 ? {tintColor:'rgba(0,0,0,0.5)'} : '', {borderColor:'rgba(0,0,0,0.5)'}]}
                 source={{uri: this.state.item.image3}}
               />
              </TouchableOpacity>


                  </View>


                  </View>



             







              <View style={{justifyContent:'center',alignContent:'center',paddingTop: 14}}>
              <Text style={styles.desc}>{this.state.item.desc}</Text>

              </View>
           
           
            
           

            </View>
             
            
            
            </ScrollView>
        )
    
      }


}
  
DetailScreen.navigationOptions = {

 headerStyle: {
    backgroundColor: '#faf6f2',
    
  },
  
};



 




const styles = StyleSheet.create({
  image2:{
    width: 120, height: 120,borderRadius:5,alignItems:'center',alignSelf:'center',paddingTop:20,marginTop:20,paddingBottom: 20,
    borderWidth:0.5, borderColor:'lightgray',

  },

    image:{
      width: 300, height: 300,borderRadius:10,alignItems:'center',alignSelf:'center',paddingTop:20,marginTop:20,paddingBottom: 20,
      borderWidth:0.5, borderColor:'lightgray'
    },

  modalcont:{
    justifyContent:'center',alignContent:'center',paddingBottom: 14,backgroundColor:'#f2f1ef',

  },
  flatlist: {
    
    flex: 1,
    width:400
  },
  list: {
  
    backgroundColor:'#f2f1ef',
    
    alignItems:"center",
    justifyContent:"center",
    textAlign:'center'

  },
  list2: {
   
    backgroundColor:'#f2f1ef',
    alignItems:"center",
    justifyContent:"center",
    textAlign:'center'


  },


    desc:{
        color: '#697184',
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    },
    title:{
        color: '#413f3d',
        fontSize: 25,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        alignContent:'center'
      },
  developmentModeText: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 30,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
export default DetailScreen;