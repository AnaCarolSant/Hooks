import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {


  //como usar função assincrona no use effect
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("Rodou dentro do useEffect")
  }, [])

  useEffect(() => {
    console.log("Rodou, por que o count atualizou", count)
  }, [count])



  const handleIncrementCounter = () => {
    setCount(count + 1)
  }

  const handleDecrementCounter = () => {
    if (count === 0) return;
    setCount(count - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {count}</Text>
      <Button title='Incrementar' onPress={handleIncrementCounter} />
      <Button title='Decrementar' onPress={handleDecrementCounter} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

