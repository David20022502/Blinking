import React, {useContext, useEffect, useState} from "react";
import { StyleSheet, View, Alert, Dimensions } from "react-native";
import { Button, Text, Input, Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import MBContext from "../contexts/MoneyBlinks/MBContext";
import { date } from "../functions/Date";
import { UserVerifyType } from "../functions/enums";
import { getData } from "../src/Services/DataTransaction";

export default function VerifyInformation (props:any) {
    const { navigation } = props;

  //CURP: código alfanumérico de identificación que consta de 18 dígitos
  const { handleLogout, handleLoadUserVerify,userVerify,mbUser}: any = useContext(MBContext);
  const [step, setStep] = useState(UserVerifyType.WITHOUT_DATA);
  const [curp, setCurp] = useState<any>(null);
  const [text, setText] = useState<any>(null);
  useEffect(()=>{
    console.log("datos ya dentro de verify",userVerify)
    if(userVerify!=null) {
      if(userVerify?.id.length > 0) {
        setText("");
        setStep(UserVerifyType.WITH_DATA)
      }
      else{
        setStep(UserVerifyType.WITHOUT_DATA)
        setText("El código es incorrecto.");
      }
    }
    
  },[userVerify])
  async function onExit() {
    await handleLogout();
}
async function loadUserVerifyInformation() {
  await handleLoadUserVerify(curp);
  
}
  let validar = () => {
    let fecha = date();
    let d = new Date();
    let hora = d.getHours();
    let minutos = d.getMinutes();

    let horaMinutos = hora + ":" + minutos;
    let monto = parseFloat(userVerify?.valor);
    let tipo;
    if (userVerify?.carga == "RECIBIR DINERO") {
      tipo = "R";
    } else if (userVerify?.carga == "ENTREGAR DINERO") {
      tipo = "E";
    }
    let arregloGlobal = {
      nombre: userVerify?.name,
      id: userVerify?.id,
      codigo: userVerify?.codigo,
      fecha: fecha,
      hora: horaMinutos,
      monto: monto,
      tipo: tipo,
    };
    let transacciones=[]
    transacciones.push(arregloGlobal);
    navigation.navigate("Movement",{transacciones:transacciones});

    //arrgelo de datos
   // global.transacciones.push(arregloGlobal);
  };
  let Content =()=>{
    return <>
    <View>
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <Image
              source={{
                uri: userVerify?.image,
              }}
              style={{ width: 120, height: 120, borderRadius: 100 }}
            />
          </View>
    
          <View style={styles.containerInput}>
            <View>
              <Text style={styles.text}>Nombre: </Text>
            </View>
            <Text style={styles.dato}>{userVerify?.name}</Text>
          </View>
          <View style={styles.containerInput}>
            <View>
              <Text style={styles.text}>Identificación: </Text>
            </View>
            <Text style={styles.dato}>{userVerify?.id}</Text>
          </View>
          <View style={styles.containerInput}>
            <View>
              <Text style={styles.text}>Carga de Saldo: </Text>
            </View>
            <Text style={styles.dato}>{userVerify?.carga}</Text>
          </View>
          <View style={styles.containerInput}>
            <View>
              <Text style={styles.text}>Valor:</Text>
            </View>
            <Text style={styles.dato}> US$ {userVerify?.valor}</Text>
          </View>
          <Button
            title="APLICAR"
            buttonStyle={{
              backgroundColor: "#ea8a3d",
              borderRadius: 20,
            }}
            icon={{
              name: "check",
              type: "ant-design",
              size: 15,
              color: "white",
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 20,
            }}
            onPress={() => {
              validar();
            }}
          />
        </View>
        </>
  }

  return (
    <View style={styles.container}>
     
           
      
      <View style={{ marginTop: 1 }}>
        <Text style={styles.titleStyle}> TRANSACCIONES </Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"center",marginBottom:50}}>
      <Text style={styles.textStyleHeader1}>
             Bienvenido: 
            </Text>
      <Text style={styles.textStyleHeader}>
             {mbUser?.fullName}
            </Text>
      </View>
           
      <ScrollView>
        <View style={styles.view2}>
          <View>
            <View>
              <Text style={styles.text}> Código de Transacción: </Text>
            </View>
            <Input
              placeholder="Ingrese el código"
              style={styles.input}
              value={curp}
              onChangeText={(e) => {
                setCurp(e);
              }}
              autoCapitalize={("sentences", "words", "characters")}
              maxLength={40}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.textStyle}>
              Revisa que esté correcto, puedes corregirlo si es necesario.
            </Text>
          </View>
          <Text h5 style={{ color: "red" }}>
            {"\n"}
            {text}
          </Text>
          <Button
            title="Verificar"
            buttonStyle={{
              backgroundColor: "#ea8a3d",
              borderRadius: 20,
            }}
            icon={{
              name: "check",
              type: "ant-design",
              size: 15,
              color: "white",
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 20,
            }}
            onPress={() => {
             // validateCURP();
             loadUserVerifyInformation(); 
              
            }}
          />
          <Button
            title="Cerrar Sesión"
            buttonStyle={{
              backgroundColor: "#ea8a3d",
              borderRadius: 20,
            }}
            icon={{
              name: "back",
              type: "ant-design",
              size: 15,
              color: "white",
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 20,
            }}
            onPress={() => {
              onExit();
              
            }}
          />
          {
            step===UserVerifyType.WITH_DATA && (
              <Content></Content>
            )
          }
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  view2: {
    flex: 2,
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  indicator: {
    position: "absolute",
    top: 30,
    minWidth: Dimensions.get("window").width,
  },
  titleStyle: {
    color: "#0b57a5",
    fontSize: 24,
    marginVertical:20,
    marginBottom: 5,
    textAlign: "center",
  },
  textStyle: {
    color: "#979797",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "justify",
  },
  textStyleTitle: {
    color: "#979797",
    fontSize: 16,
    marginVertical: 2,
    textAlign: "justify",
  },
  textStyleHeader:{
    color: "#979797",
    fontSize: 17,
    paddingTop:10,
    textAlign: "justify",
    marginHorizontal:30
  },
  textStyleHeader1:{
    color: "#979797",
    fontSize: 21,
    paddingTop:6,
    textAlign: "justify",
    marginLeft:30
  },
  buttons: {
    backgroundColor: "#00C7B1",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#00C7B1",
    width: 190,
    marginTop: 20,
    marginLeft: 5,
  },
  titleButtons: {
    letterSpacing: 1.25,
    fontWeight: "bold",
    fontSize: 14,
  },
  fieldSet: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.12)",
    height: 50,
    marginBottom: 20,
  },
  col: {
    flexDirection: "column",
    maxHeight: 4,
    maxWidth: 30,
    minHeight: 4,
    minWidth: 30,
    borderRadius: 4,
  },
  legend: {
    fontSize: 12,
    position: "absolute",
    top: -10,
    left: 8,
    backgroundColor: "#FFFFFF",
    color: "rgba(0, 0, 0, 0.38)",
  },
  text: {
    color: "#0b57a5",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dato: {
    fontSize: 18,
  },
});
