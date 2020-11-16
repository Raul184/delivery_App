import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import styles from "./login.styles";

export default function Login() {
  const [display, setDisplay] = useState("none");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.logo}>
        <Image source={require('../../assets/icon.png')} />
      </View>
      <View>
        <Text style={styles.error(display)}>Invalid user or password</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="User" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btn} onPress={()=> console.log('pressed')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
