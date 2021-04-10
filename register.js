import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,Button,TextInput,TouchableOpacity
} from 'react-native';


export default class register extends Component {
   static navigationOptions= ({navigation}) =>({
    title: 'Register',
    headerRight:
    <TouchableOpacity
    onPress={() => navigation.navigate('Home')}
    style={{margin:10,backgroundColor:'orange',padding:10}}>
    <Text style={{color:'#ffffff'}}>Home</Text>
    </TouchableOpacity>

});

constructor(props){
  super(props)
  this.state={
    userName:'',
    userEmail:'',
    userPassword:'',
    userConfPassword:'',
    userNumber:'',
    userType:'',
    userFiliere:''
  }
}

userRegister = () =>{
  //alert('ok'); // version 0.48

  const {userName} = this.state;
  const {userEmail} = this.state;
  const {userPassword} = this.state;
  const {userConfPassword} = this.state;
  const {userNumber} = this.state;
  const {userType} = this.state;
  const {userFiliere} = this.state;



  fetch('http://172.20.10.2:8080/webApp/register.php',  {
    method: 'post',
    headers:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      name: userName,
      email: userEmail,
      password: userPassword,
      confirm_password: userConfPassword,
      number: userNumber,
      user: userType,
      filiere: userFiliere
    })

  })
  .then((response) => response.json())
    .then((responseJson) =>{
      alert(responseJson);
    })
    .catch((error)=>{
      console.error(error);
    });

}

render() {
  return (
<View style={styles.container}>


  <TextInput
  placeholder="Enter Name"
  style={{width:250,margin:10, borderColor:"#333",
  borderWidth:1}}
  underlineColorAndroid="transparent"
onChangeText= {userName => this.setState({userName})}

  />

  <TextInput
  placeholder="Enter Email"
  style={{width:250,margin:10, borderColor:"#333",
  borderWidth:1}}
  underlineColorAndroid="transparent"
  onChangeText= {userEmail => this.setState({userEmail})}
  />

  <TextInput
  placeholder="Enter Password"
  style={{width:250,margin:10, borderColor:"#333",
  borderWidth:1}}
  underlineColorAndroid="transparent"
  onChangeText= {userPassword => this.setState({userPassword})}
  />
  <TextInput
  placeholder="Confirm Password"
  style={{width:250,margin:10, borderColor:"#333",
  borderWidth:1}}
  underlineColorAndroid="transparent"
  onChangeText= {userConfPassword => this.setState({userConfPassword})}
  />
  <TextInput
  placeholder="Enter Number"
  style={{width:250,margin:10, borderColor:"#333",
  borderWidth:1}}
  underlineColorAndroid="transparent"
  onChangeText= {userNumber=> this.setState({userNumber})}
  />
  <TextInput
  placeholder="Etes vous un parrain ou un filleul ?"
  style={{width:250,margin:10, borderColor:"#333",
  borderWidth:1}}
  underlineColorAndroid="transparent"
  onChangeText= {userType => this.setState({userType})}
  />
  <TextInput
  placeholder="quel est votre filière ? ex : genie informatique"
  style={{width:250,margin:10, borderColor:"#333",
  borderWidth:1}}
  underlineColorAndroid="transparent"
  onChangeText= {userFiliere => this.setState({userFiliere})}
  />

  <TouchableOpacity
  onPress={this.userRegister}
  style={{width:250,padding:10, backgroundColor:'magenta',
  alignItems:'center'}}>
  <Text style={{color:'#fff'}}>Signup</Text>
  </TouchableOpacity>


   </View>

 );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
},
welcome: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
},
instructions: {
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
},
});

AppRegistry.registerComponent('register', () => register);
