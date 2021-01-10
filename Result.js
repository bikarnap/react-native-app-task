import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

const Result = ({amount, rate, fromCurrency, toCurrency, converted}) => {
  if(converted) {
    return(
      <View style={styles.result}>
        <Text style={styles.text}>Rate: 1 {fromCurrency} = {rate.toFixed(2)} {toCurrency} </Text>
        <Text style={styles.text}>{amount} {fromCurrency} = {(amount*rate).toFixed(2)} {toCurrency}</Text>
      </View>
    )
  }
  return(
    <View style={styles.result}>
      <Text style={styles.text}>Touch the CONVERT button to see the result</Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
  result: {
    marginHorizontal: 10, 
    marginTop: 10, 
    alignItems: 'center'
  }, 
  text: {
    color: '#0f0', 
    fontSize: 18
  }
 
})

export default Result;