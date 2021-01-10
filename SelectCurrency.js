import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Picker } from '@react-native-community/picker';

const SelectCurrency = ({ tofrm, handleSelect, value, rates }) => {
  const pickerList = () => {
    const pickers = [];
    for(const currency in rates) {
      pickers.push(<Picker.Item key={currency} label={currency} value={currency} />)
    }
    return pickers;
  }
  return(
    <View>
      <Text style={styles.tofrm}>{tofrm}</Text>
      <Picker
        selectedValue={value}
        style={styles.picker}
        onValueChange={handleSelect}
      >
        {pickerList()}
      </Picker>
      <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    tofrm: {
      textAlign: 'center', 
      color: '#fff',
      fontSize: 24,
      marginTop: 10,
    }, 
    picker: {
      color: '#ddd',
      marginTop: 10,
      marginBottom: 10, 
      marginHorizontal: 100,
    }, 
    line: {
      borderStyle: 'solid', 
      borderColor: '#fff',
      borderWidth: 0.20, 
      marginHorizontal: 10
    }
})

export default SelectCurrency; 