import { Button, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import MBContext from "../../contexts/MoneyBlinks/MBContext";

export default function SignUp1() {
  const { handleLogout, mbUser }: any = useContext(MBContext);
  async function onSalir() {
    await handleLogout();
}
  return (
    <View>
      <Text> //////////////////////// </Text>
      <Text> //////////////////////// </Text>
      <Text> //////////////////////// </Text>
      <Text> //////////////////////// </Text>
      <Text> ////////////////////////</Text>

      <Text> Bienvenido {mbUser?.nickname} {mbUser?.fullName} </Text>
      <Button title="salir"
      onPress={() =>{onSalir()}}
      >

      </Button>
    </View>
  );
}
