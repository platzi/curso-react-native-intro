import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <View>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={goToSettings} title="Ir a Ajustes" />
    </View>
  );
}
