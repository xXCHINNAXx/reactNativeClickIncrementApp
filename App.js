import React, { useState } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Alert,
  Text,
  View,
} from "react-native";

export default function App() {
  let [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.textConn}>
        <Text style={styles.textStyle}>{count}</Text>
        <Text style={styles.txtStyle}>Long press '+' button to make count Zero.</Text>
      </View>

      <View style={styles.btnCon}>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount((count = 0))}
        >
          <Text style={styles.btnText}> + </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
const win = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#0000FF",
    fontSize: 30,
    borderRadius: 100,
    height: 50,
    alignSelf: "center",
    width: 50,
    justifyContent: "center",
  },
  btnCon: {
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  btnText: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 35,
    marginBottom: 3,
  },
  textStyle: {
    backgroundColor: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textConn: {
    height: win.height / 2,
    justifyContent: "flex-end",
  },
  txtStyle: {
	  color:'#5e6360',
  },
});
