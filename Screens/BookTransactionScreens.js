import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
export default class BookTransactionScreen extends React.Component {
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            Scaned:false,
            ScanedData:'',
        }
    }
  render(){
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.dispalyText}>Issue/Return for dummy Qr code output</Text>
        <TouchableOpacity
        style={styles.ScanButton}
        >
            <Text
            style={styles.buttonText}
            >Scan QR code</Text>
        </TouchableOpacity>
    </View>
  );
}
}
const styles=StyleSheet.create({
    dispalyText:{
        fontSize:15,
        textDecorationLine:'underline'
    },
    ScanButton:{
        backgroundColor:'blue',
        padding:10,
        margin:10,
    },
    buttonText:{
        fontSize:15,
        color:'white'
    }
})