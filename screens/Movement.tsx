import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { Button } from "react-native-elements";
import { ListMovement } from "./ListsMov/ListMovement";
import MBContext from "../contexts/MoneyBlinks/MBContext";
export const Movement = (props:any) => {
    console.log("props",props);
    const {navigation} = props;
    const transacciones = props?.route?.params?.transacciones;

    console.log("datos ya dentro de moviemto",transacciones)
 //   const {userVerify}: any = useContext(MBContext);

  const [suma, setSuma] = useState<any>();
  const [color, setColor] = useState<any>();
  const [size, setSize] = useState<any>();

  const calcularSaldo = () => {
    let totalSaldo = 0;
    for (let i = 0; i < transacciones?.length; i++) {
      setSize(transacciones?.length);
      let item = transacciones[i];
      if (item.tipo == "E") {
        totalSaldo -= item.monto;
      } else {
        totalSaldo += item.monto;
      }
      if (totalSaldo < 0) {
        setColor("#FF774F");
      } else {
        setColor("#EA8607");
      }
    }

    return totalSaldo;
  };
  React.useEffect(() => {
    let total:any=calcularSaldo();
    setSuma(total);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 40,
          paddingBottom: 5,
          marginBottom: 40,
          borderBottomWidth: 4,
          borderColor: "#ea8a3d",
          backgroundColor: "white",
        }}
      >
        <View style={{ justifyContent: "flex-start" }}>
          <Text Text style={[styles.title, { fontSize: 30 }]}>
            {" "}
            Saldo disponible:{" "}
          </Text>
        </View>
        <View style={{ position: "relative", left: 75 }}>
          <Text style={{ color: color, fontSize: 30, fontWeight: "bold" }}>
            {" "}
            {suma}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingBottom: 5,
          marginBottom: 10,
          borderColor: "#F5F6FA",
          borderWidth: 4,
          backgroundColor: "white",
          height: 70,
          justifyContent: "center",
          paddingLeft: 10,
        }}
      > 
        <View style={{position:"relative",right: 55}}>
        <Text style={[styles.title, { fontSize: 30,}]}> Movimientos: </Text>
        </View>
        <View>
        <Text style={{ color: "#ea8a3d", fontSize: 30,}}>
          {size}
        </Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={transacciones}
            style={{ paddingBottom: 30 }}
            renderItem={({ item }) => {
              return <ListMovement person={item} />;
            }}
            keyExtractor={(item) => item.id}
          />

          <View>
            <Button
              title="Regresar"
              buttonStyle={{
                backgroundColor: "#ea8a3d",
                borderRadius: 20,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 20,
              }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#ea8a3d",
  },
});
