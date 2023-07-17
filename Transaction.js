import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
  constructor(props) {
    super(props)
    this.state={
      domState : "normal",
      hasCameraPermissions : null,
      scanned : false,
      scannedData : ""
      }
  }
  render() {
    const {domState, hasCameraPermissions, scanned, scannedData} = this.state 

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Transaction Screen</Text>
      </View>
    );
  }

  getCameraPermissions =async(domState)=>{
    const{status}=await Permissions.askAsync(Permission.CAMERA)
    this.setState({
      hasCameraPermissions : status==="granted",
      domState : domState,
      scanned : false
    })
  }

  hasBarCodeScanned =async({type, data})=>{
    this.setState({
      domState : "normal",
      scanned : true,
      scannedData : data
    })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
