import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ListItemProps,
  ListItem,
  Button,
  Icon,
  FAB,
} from "react-native-elements";

export const ListMovement = ({ person }:any) => {
  console.log("**************** RECARGA List ****************");
  let icono;
  let color;
  if (person.tipo == "R") {
    icono = "plus";
    color = "#B4FF4F";
  } else {
    icono = "minus";
    color = "#FF544F";
  }
  return (
    <ListItem
      containerStyle={{
        minWidth: 350,
        borderRadius: 7,
        borderColor: "#F5F6FA",
        borderWidth: 4,
        marginVertical: 2,
      }}
    >
      <ListItem.Content style={{ flexDirection: "row" }}>
        <ListItem.Content>
          <ListItem.Title
            style={{
              color: "#0b57a5",
              fontSize: 17,
              fontWeight: "bold",
              paddingBottom: 5,
            }}
          >
            {person.fecha} {person.hora}
          </ListItem.Title>
          <ListItem.Content style={{ flexDirection: "column" }}>
            <ListItem.Title
              style={{ color: "#0b57a5", fontWeight: "bold", paddingBottom: 5 }}
            >
              {person.nombre}
            </ListItem.Title>
            <ListItem.Title style={{ color: "#0b57a5", fontWeight: "bold" }}>
              {person.id}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem.Content>
        {/* SEGUNDA PARTE DEL CODIGO */}

        <ListItem.Content>
          <ListItem.Content
            style={{
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              left: 70,
            }}
          >
            <ListItem.Title
              style={{
                color: "#0B2460",

                fontSize: 25,
              }}
            >
              <Icon name={icono} type="font-awesome" color={color} size={15} />{" "}
              {person.monto}
            </ListItem.Title>

            <ListItem.Title
              style={{ color: "#0B2460", paddingLeft: 10, fontWeight: "bold" }}
            >
              {person.codigo}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem.Content>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
