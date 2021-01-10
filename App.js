import React, { useEffect, useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
} from 'react-native';

import Header from './Header';
import SelectCurrency from './SelectCurrency';
import Amount from './Amount';
import Result from './Result';

const App = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('AUD');
  const [rate, setRate] = useState();
  const [rates, setRates] = useState({});
  const [converted, setConverted] = useState(false);

  
  

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest`)
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates)
      })
    }, []
  );

  console.log('fromCurrency: ', fromCurrency, 'toCurrency: ', toCurrency);

  const getRate = () => {
    // if(fromCurrency === toCurrency) {
    //   setRate(1);
    //   return;
    // } 
    for(const currency in rates) {
      if(currency === toCurrency) {
        setRate(rates[currency]);
        break;
      }
    }
  }

  const handleChangeText = (amt) => {
    setAmount(amt);
    setConverted(false);
  }

  const handleFromCurrency = (item) => {
    setFromCurrency(item);
    setConverted(false);
  }

  const handleToCurrency = (item) => {
    setToCurrency(item);
    setConverted(false);
  }

  const handleButtonPress = () => {
    getRate();
    setConverted(true);
  }

  return (
    <View style={styles.container}>
      <Header header="Currency converter" />
      <Amount 
          amount={amount}
          handleChangeText={handleChangeText}
      />
      
      <SelectCurrency 
          tofrm="From"
          handleSelect={handleFromCurrency}
          value={fromCurrency}
          rates={rates}
      />

      <SelectCurrency 
          tofrm="To"
          handleSelect={handleToCurrency}
          value={toCurrency}
          rates={rates}
      />
      

      <Result 
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        rate={rate}
        converted={converted}
      />
      <View style={styles.button}>
        <Button 
          title="Convert" 
          onPress={handleButtonPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33f',
  },
  button: {
    marginTop: 25,
    marginHorizontal: 10, 
  }
});



export default App;
