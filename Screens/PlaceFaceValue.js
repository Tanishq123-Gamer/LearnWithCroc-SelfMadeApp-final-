import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView, ImageBackground, Image} from 'react-native';
import MyHeader from '../components/MyHeader'

import PlaceButton from '../components/PlaceButton';
import firebase from 'firebase';

export default class PlaceValue extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      digit:0,
     name: null,
     place:[]
     
    };
  }
  
 
    
  
 
  
  render(){
    return (     

        <ImageBackground source= {require("../assets/animal_back.jpg")} style={styles.container}>
            <MyHeader title="Find the Place Value of a Number" navigation ={this.props.navigation}/>

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
          }}
        />
      
        <TextInput
          style={styles.inputBox}
          placeholder={"Enter the number"}
          onChangeText={(text) => {
          
            this.setState({ number: text });
          }}
          value={this.state.number}
        />
       
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var number = parseInt(this.state.number)
            var digit = parseInt(this.state.digit)
            this.setState({
                number: number, digit:digit
            })
         
            var splitNumber = (number, arr = [], m = 1) => {
              if(number){
                return splitNumber(Math.floor(number / 10),[m * (number % 10)].concat(arr), m * 10);
              }
              return arr;
          };
        
         
            this.setState({
              place:splitNumber(number)
            })
            console.log(this.state.place)
           
          }}>

          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
        {this.state.place.map((item, index) => {
                  return (
                    <PlaceButton
                      numberChunk={this.state.place[index]}
                      
                    />
                  );
                })}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
    width: '100%',
    height: '100%',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    fontSize:20,
    borderWidth: 4,
    outline: 'none',
    borderRadius:20,
    backgroundColor:'whitesmoke'
  },
  goButton: {
    width: '30%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 20,
    backgroundColor: 'green',
    borderWidth: 4,
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color:'yellow'
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
});
