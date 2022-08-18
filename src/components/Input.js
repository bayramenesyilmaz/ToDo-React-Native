import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, TouchableHighlight, TouchableOpacity, Text } from "react-native";

const Input = (props) => {

    return (

        <View style={styless.container}>
            <TextInput
                style={styless.input}
                placeholder="Yapılacak..."
                placeholderTextColor="#B4A5A5"
                onChangeText={props.onChange}
                value={props.value}
            />
            <TouchableHighlight
                underlayColor="orange"
                style={styless.button}
                onPress={props.onClick}
            >
                <Text style={styless.text}>Kaydet</Text>
                
            </TouchableHighlight>
        </View>

    )
}
export default Input;

const styless = StyleSheet.create({
    container: {
        backgroundColor: "#444444",
        borderRadius: 10,
        padding: 15,
        paddingBottom: 20
    },
    input: {
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        marginBottom: 15,
        color: "white"
    },
    button: {
        backgroundColor: "#B4A5A5",
        borderRadius: 10,
        padding: 7,
        alignItems:"center"
    },
    text:{
        fontSize:25
    }
})