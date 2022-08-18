import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Note = (props) => {
    const [textStyle, setTextStyle] = useState(styless.text)

    return (
        <View>

            <Text
                style={textStyle}
                onPress={() => setTextStyle(style => (

                    style == styless.text ? style = styless.line_text : style = styless.text

                ))}
                onLongPress={()=> props.onDelete(props.note)}
            >
                {props.note}
            </Text>

        </View>


    )
}
export default Note;

const styless = StyleSheet.create({

    text: {
        fontSize: 20,
        color: "white",
        backgroundColor: "#4E9F3D",
        padding: 15,
        borderRadius: 10,
        marginBottom: 7
    },

    line_text: {
        fontSize: 20,
        color: "#73777B",
        textDecorationLine: "line-through",
        backgroundColor: "#444444",
        padding: 15,
        borderRadius: 10,
        marginBottom: 7
    }
})