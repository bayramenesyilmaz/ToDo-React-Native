import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import Note from "./Note";

const App = () => {

  const [noteList, setNotList] = useState([]);
  const [value, setValue] = useState("");

  function handleClick() {
    if (value != "") {
      setNotList([...noteList, value]);
    }

    setValue("");
  }

  function removeNote(item) {
    let newList = noteList.filter(note => note != item);
    setNotList(newList);
  }

  return (

    <SafeAreaView style={styless.container}>
      <View style={styless.header}>
        <Text style={styless.title}>Yapılacaklar</Text>
        <Text style={styless.title}>{noteList.length}</Text>
      </View>

      <View style={styless.body}>
        {
          noteList.map((note, index) => (<Note key={index} note={note} onDelete={removeNote} />))
        }

      </View>

      <View style={styless.footer}>
        <Input onChange={setValue} onClick={handleClick} value={value} />
      </View>


    </SafeAreaView>

  )
}

export default App;

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
    padding: 10
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
    color: "orange"
  },
  body: {
    flex: 7
  },
  footer: {
    flex: 2
  }

})