import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação

// Importe a logo
const logo = require('../assets/logo.png');

const SplashScreen = () => {
  const navigation = useNavigation(); // Use o hook de navegação

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.subText}>
        Simplificando os pagamentos de recarga do transporte público
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          console.log('Botão Entrar pressionado'); // Verifique se o evento está sendo disparado
          navigation.navigate('Login'); // Redireciona para a tela de Login
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    marginBottom: 5,
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  subText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    marginTop: 1,
  },
  button: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 140,
    borderRadius: 8,
    marginTop: 200,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default SplashScreen;