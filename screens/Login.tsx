import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";


const Login: React.FC = (props: any) => {
  const [isName, setUserName] = useState<string>();
  const [isPassword, setPassword] = useState<string>()
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    // console.log(isLoading, data);
    // (async () => {
    //   const {data} = await fetch('https://reactnative.dev/movies.json')
    //   console.log(data);
    // })()
    // debugger
    // fetch('https://reactnative.dev/movies.json').then(({ data }: any) => {
    //   // todo
    //   // console.log(data);
    // });
  }, [])

  const onPress = (() => {
    if (isName === '123' && isPassword === '123') {
      props.navigation.push('Details')
    } else {
      alert('您输入的账号或密码有误，请重新输入')
    }

    // setLoading(true)
    // fetch('https://reactnative.dev/movies.json')
    //   .then((response) => response.json())
    //   .then((json) => setData(json.movies))
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
  })


  return (
    <View style={styles.container}>
      {/* {isLoading ? <ActivityIndicator /> : '123'} */}
      <View style={styles.lineTopBottom}>
        <Text>账号:</Text>
        <TextInput style={styles.textInput}
          onChangeText={(account) => setUserName(account)} />
      </View>
      <View style={styles.lineTopBottom}>
        <Text>密码:</Text>
        <TextInput style={styles.textInput} secureTextEntry={true}
          onChangeText={(password) => setPassword(password)} />
      </View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>登录</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 5,
    width: 200,
  },
  lineTopBottom: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
  },
  button: {
    justifyContent: 'center',
    marginTop: 10,
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1E90FF",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  }
})

export default Login;