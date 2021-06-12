import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import AppHeader from "../assets/AppHeader"
import db from "../config";
import firebase from "firebase";
import { Alert } from "react-native";

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }
  submitStory = () => {
    db.collection("stories").add({
      title: this.state.title,
      author: this.state.author,
      story: this.state.story,
    });
    this.setState({
      title: "",
      author: "",
      story: "",
    });
    Alert.alert("Submitted!");
  };
  render() {
    return (
      <KeyboardAvoidingView>
        <AppHeader/>
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            placeholder={"title"}
            onChangeText={(text) => {
              this.setState({ title: text });
            }}
          />
          <TextInput
            style={styles.inputBox}
            placeholder={"author"}
            onChangeText={(text) => {
              this.setState({ author: text });
            }}
          />
          <TextInput
            placeholder={"Write your story"}
            multiline
            style={[styles.inputBox, { height: 200 }]}
            onChangeText={(text) => {
              this.setState({ story: text });
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.submitStory();
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    alignItems: "center",

    height: "100%",
  },
  inputBox: {
    marginTop: 20,
    width: "80%",
    height: 50,
    textAlign: "center",
    borderWidth:4,
    borderColor:"black",
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    width: "50%",
    height: 50,
    textAlign: "center",
    borderWidth:4,
    borderColor:"black",
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