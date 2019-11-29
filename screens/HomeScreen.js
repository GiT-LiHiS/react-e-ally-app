import * as WebBrowser from 'expo-web-browser';
import { useState, useEffect} from 'react';
import { FlatList} from 'react-native';
import axios from 'axios';
import React from 'react';
import { ListItem, } from 'react-native-elements'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailsScreen from '../screens/DetailScreen';
import { useNavigation } from '@react-navigation/core';
import { SearchBar } from 'react-native-elements'



import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';



class HomeScreen extends React.Component{
  state = {
  
    error: null,
    isLoaded: false,
    isLoading:true,
    item: [], 
    promo:[], 
     isLoading: false
  };



   
  
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
     
      
    
    
        return fetch('http://192.168.43.33:8000/clothing/?format=json')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: true,
              item: responseJson,
              
            }, function () {
    
            });
    
          })
          .catch((error) => {
            
            alert("Scan item first")
          });
    
       
    });

    this.getPromo()

  }

  



  getPromo(){

    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
     
      
    
    
        return fetch('http://192.168.43.33:8000/promo/?format=json')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
             
              promo: responseJson,
              isLoading:false
            }, function () {
    
            });
    
          })
          .catch((error) => {
            
          });
    
       
    });

  }
  

 
 
  



render(){
  const { navigation } = this.props;
  console.log(this.state.promo[1])
  
  
  
    

  
  return (
      <View style={{backgroundColor: '#f2f1ef',}}>
        
          <SearchBar
          containerStyle={{backgroundColor: '#f2f1ef',borderWidth:0,borderBottomColor: 'lightgray',
          borderTopColor: 'transparent',width:'100%',paddingTop:28,margin:0}}
         lightTheme
 placeholder='Type Here...' />
         


          <ScrollView>
        <View style={styles.container}>
          <View style={styles.topcontainer3}>
          <Text style={styles.h1}>WELCOME to Ethic-ally</Text>
          </View>
       

        { this.state.promo.length > 1 ?
        <View style={styles.containerPromo}>

<TouchableOpacity onPress={() => {
    alert('You tapped the button!');
  }}>
         <ImageBackground
                  source={{ uri: this.state.promo[0].image }}
                  imageStyle={{ borderRadius: 200 }}
                  style={{
                    height: 280,
                    width: 280,
                    position: 'relative', // because it's parent
                    top: 2,
                    left: 2,
                    
                    
                  }}
                >
                  <Text
                    style={{
                      fontSize:50,
                      color:'white',
                      textShadowColor:'#697184',
                      textShadowRadius:5,
                      textShadowOffset: {width: 2, height: 2},
                      fontStyle: 'italic',
                      position: 'absolute', // child
                      bottom: 220, // position where you want
                      left: 5
                    }}
                  >
                    {this.state.promo[0].name}
                  </Text>  

                  <Text
                    style={{
                      
                      fontSize:35,
                      color:'white',
                      textShadowColor:'#697184',
                      textShadowRadius:10,
                      textShadowOffset: {width: 2, height: 2},
                      fontStyle: 'italic',
                      position: 'absolute', // child
                      bottom: 20, // position where you want
                      left: 90
                    }}
                  >
                    {this.state.promo[0].desc}
                  </Text>
</ImageBackground>
    </TouchableOpacity>

                      
          
        </View>
         : null }



      <View style={styles.topcontainer2}>
     
      <Text style={styles.h1}>Trending right now</Text>
     
      </View>
      {this.isLoading ? (
        <View style={{backgroundColor:'#f2f1ef'}}></View>
      ) : (
        <View style={{flex:1,justifyContent:'center',alignItems:'center', paddingTop:0,paddingLeft:10,paddingRight:10,backgroundColor:'#f2f1ef'}}>
        <FlatList
             style={styles.flatlist}
             data={this.state.item}
           horizontal
           
      
             renderItem={({ item}) => 
             
             <ListItem 
            containerStyle={{
              backgroundColor:'#f2f1ef',
              marginLeft:0,
              marginRight:0,
            
            
            }}
               title={
                 <View style={styles.list2}>
                   <TouchableOpacity onPress={()=> this.props.navigation.navigate('Detail',
                   {
                    itemId: 'http://192.168.43.33:8000/itemname/'+item.itemid+'/?format=json' 

                  }
                   
                   )}>
                   <Image
                     style={{width: 200, height: 200,borderRadius:5,borderWidth:0.5,borderColor:'#d8cfd0' ,}}
                     source={{uri: item.image}}
                          />
                  </TouchableOpacity>
                
                   <Text style={styles.date}>{item.itemname}</Text>
                   <Text style={styles.date}>{item.price}$</Text>
                   
                 </View>
               }
  
               subtitle={
                 <View style={styles.list}>
               <Text style={styles.subtitle}>{item.Brand.name}</Text>
                 </View>
                 }
             
               bottomDivider
               />
          
             }
             keyExtractor={item => item.id}
           />
   
   </View>
      )}



{ this.state.promo.length > 1 ?
        <View style={styles.containerPromo2}>

<TouchableOpacity onPress={() => {
    alert('You tapped the button!');
  }}>
         <ImageBackground
                  source={{ uri: this.state.promo[1].image }}
                  style={{
                    height: 300,
                    width: 300,
                    position: 'relative', // because it's parent
                    top: 2,
                    left: 2
                  }}
                  imageStyle={{ borderRadius: 5 }}
                >
                  <Text
                    style={{
                      fontSize:35,
                      color:'white',
                      textShadowColor:'#b1a6a4',
                      textShadowRadius:5,
                      textShadowOffset: {width: 2, height: 2},
                      fontStyle: 'italic',
                      position: 'absolute', // child
                      bottom: 250, // position where you want
                      left: 10
                    }}
                  >
                    {this.state.promo[1].name}
                  </Text>  

                  <Text
                    style={{
                      
                      fontSize:35,
                      color:'white',
                      textShadowColor:'#b1a6a4',
                      textShadowRadius:5,
                      textShadowOffset: {width: 2, height: 2},
                      fontStyle: 'italic',
                      position: 'absolute', // child
                      bottom: 20, // position where you want
                      left: 25
                    }}
                  >
                    {this.state.promo[1].desc}
                  </Text>
</ImageBackground>
    </TouchableOpacity>

                      
          
        </View>
         : null }




        </View>
       
 
     
    </ScrollView>


      </View>
      
    
    
  );


}

 
}

HomeScreen.navigationOptions = {
  header: null,
};





const styles = StyleSheet.create({
  containerPromo2: {
    paddingTop:20,
    paddingBottom:100,
    backgroundColor:'#f2f1ef',
    flex: 1,

  },
  containerPromo: {
    paddingTop:80,
    paddingBottom:30,
    backgroundColor:'#f2f1ef',
    flex: 1,

  },

  h1: {
    fontSize:30,
    color:'#697184',
    textShadowColor:'#b1a6a4',
    textShadowRadius:5,
    textShadowOffset: {width: 2, height: 2},
    fontStyle: 'italic',

  },
  topcontainer3:{
    backgroundColor:'#f2f1ef',
    marginTop:40,
     
      paddingBottom:5,
      alignItems:'center',
      justifyContent:'center',
    
    },
  topcontainer2:{
    backgroundColor:'#f2f1ef',
      paddingTop:10,
      paddingBottom:5,
      height:100,
      alignItems:'center',
      justifyContent:'center',
    
    },
  topcontainer:{
    backgroundColor:'black',
    height:100,
    alignItems:'center',
    justifyContent:'center'

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
  date: {
    paddingLeft: 0,
    letterSpacing: 1.5,
    fontSize:15,
    textAlign:"center"
  },
  title: {
    paddingLeft: 40,
    maxWidth: 280,
    letterSpacing: 0.5
  },
  start: {
   paddingLeft: 5,
   color: 'gray',
   letterSpacing: 1.5
  },
  url: {
    paddingLeft: 40,
    maxWidth: 280,
    letterSpacing: 0.5,
    color: 'lightskyblue'
  },
  container: {
    backgroundColor:'#f2f1ef',
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'

  },
  
});
export default HomeScreen
