import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BrowserRouter as Router } from 'react-router-dom'
import { useNavigation } from "@react-navigation/native";

export default function SearchButt(){
  const navigation = useNavigation();
    return(
      <Router>
        <View style= {styles.container}>
            <Text style={styles.title}>
            </Text>
        {/* <Link to="./SearchResult"> */}
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('SearchResult')}>
        <Text style={{fontFamily:'SCDream'}}>체육관 검색</Text>
        </TouchableOpacity>
        {/* </Link> */}
        </View>
        </Router>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonSize: {
        margin : 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    buttonStyle: {
        minWidth: 200,
        marginBottom: 5,
        height: 40,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "#f3f3f3",
        borderRadius: 10
      },
  });