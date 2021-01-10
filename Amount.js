import React from 'react'; 
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Amount = ({amount, handleChangeText}) => {
  return(
    <View>
      <Text style={styles.amount}>Amount</Text>
      <TextInput 
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleChangeText}
      >{amount}</TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  amount: {
    fontSize: 24, 
    color: '#fff',
    textAlign: 'center', 
    marginTop: 10, 
  },
  input: {
    borderStyle: 'solid', 
    backgroundColor: '#fff',
    borderBottomWidth:3, 
    borderRightWidth: 2,
    marginTop: 5, 
    marginHorizontal: 10,
    fontSize: 22, 
    textAlign: 'center', 
  }
})

export default Amount; 