import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const Fruits = () => {

  const [fruits, setFruits] = useState([])

  const addFruit = () => {
    const fruitPosition = fruits.length + 1
    const fruit = `Fruit ${fruitPosition}`
    setFruits([...fruits, fruit])
  }

  return (
    <View justifyContent="center" alignItems="center" flex={1}>
      {fruits.map(fruit => (
        <Text key={fruit}>{fruit}</Text>
      ))}
      <TouchableOpacity onPress={addFruit}>
        <Text>Add a fruit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Fruits;