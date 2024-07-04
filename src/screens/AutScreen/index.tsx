import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles"
import {MenuStackTypes} from "../../navigation/MenuStack.navigation";

export function AutScreen({navigation}: MenuStackTypes) {
    const image = require('../../assets/Aut.png')
 return (
    
      <ImageBackground source={image} style={Image}></ImageBackground>
          
               
   



}