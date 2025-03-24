import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Importe a logo (substitua pelo caminho correto)
const logo = require('../assets/onibuslogo.png');

export default function LoginScreen({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberLogin, setRememberLogin] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} />

      {/* Título */}
      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <Text style={styles.subtitle}>Digite seu CPF e senha</Text>

      {/* Campo de CPF */}
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Botão Entrar */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ManageCards')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Checkbox Lembrar Login */}
      <View style={styles.rememberContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setRememberLogin(!rememberLogin)}
        >
          {rememberLogin && <View style={styles.checkboxInner} />}
        </TouchableOpacity>
        <Text style={styles.rememberText}>Lembrar login</Text>
      </View>

      {/* Link para Recuperação de Senha */}
      <TouchableOpacity onPress={() => navigation.navigate('RecoverAccount')}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Link para Cadastro */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupLink}>Não tem uma conta? Inscreva-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
    padding: 24,
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 32,
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    padding: 16,
    color: '#000',
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#000',
    borderRadius: 2,
  },
  rememberText: {
    color: '#000',
    fontSize: 14,
  },
  forgotPassword: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 16,
  },
  signupLink: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 16,
  },
});