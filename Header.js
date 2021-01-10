import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ header }) => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}> {header} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    height: 100, 
    justifyContent: 'center',
    borderBottomWidth: 1, 
    borderBottomColor: '#567'
  }, 
  headerText: {
    color: '#fff',
    textAlign: 'center', 
    fontSize: 26,    
  }
})

export default Header; 