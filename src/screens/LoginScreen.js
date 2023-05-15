import React, { useState } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { login } from "../redux/actions/authActions";
import { fetchPrescriptions } from "../redux/actions/prescriptionsActions";
import { fetchDrugsTakenRecord } from "../redux/actions/drugsTakenRecordActions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "skyblue",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

const LoginScreen = ({ login, fetchPrescriptions, fetchDrugsTakenRecord }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    const userId = await login(username, password);
    // await dispatch(fetchPrescriptions(userId));
    await fetchPrescriptions(userId);
    await fetchDrugsTakenRecord(userId);
    navigation.navigate("MainTabs");
  };
  return (
    <View style={styles.container}>
      <Text>Novo Nordisk</Text>
      <Text>Medication Management App</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, { login, fetchPrescriptions, fetchDrugsTakenRecord })(LoginScreen);
