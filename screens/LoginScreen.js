import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "firebase";
import AppHeader from '../assets/AppHeader'
export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

  userLogin=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      this.props.navigation.navigate("ReadStory")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    })
  }
 
  render() {
    return (
   
      <View style={styles.container}>
           <AppHeader/>
        <TextInput
          style={styles.inputBox}
          placeholder={"Username"}
          onChangeText={(text) => {
            this.setState({ emailId: text });
          }}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.userLogin(this.state.emailId, this.state.password);
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F3337",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  inputBox: {
    marginTop: 20,
    width: "80%",
    height: 50,
    textAlign: "center",
    borderWidth: 0.5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    width: "50%",
    height: 50,
    textAlign: "center",
    borderWidth: 0.5,
    backgroundColor: "grey",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
