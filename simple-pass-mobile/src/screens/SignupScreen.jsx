import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function SignupScreen() {
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberLogin, setRememberLogin] = useState(false);

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>Insira seus dados para continuar</Text>

      {/* Campo de CPF */}
      <Text style={styles.label}>Insira seu CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      {/* Campo de E-mail */}
      <Text style={styles.label}>Insira seu E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="email@gmail.com.br"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Campo de Senha */}
      <Text style={styles.label}>Insira sua senha</Text>
      <TextInput
        style={styles.input}
        placeholder="************"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

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

      {/* Botão Entrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Linha Divisória */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>ou</Text>
        <View style={styles.line} />
      </View>

      {/* Botão Google */}
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../assets/google.png')} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Entrar com Google</Text>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding: 16,
    color: '#000',
    fontSize: 16,
    marginBottom: 16,
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
  button: {
    width: '100%',
    backgroundColor: '#fff', // Mesma cor do botão de login
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#000', // Mesma cor do texto do botão de login
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
  },
  orText: {
    color: '#fff',
    fontSize: 16,
  },
  googleButton: {
    width: '100%',
    backgroundColor: '#fff', // Mesma cor do botão de login
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  googleButtonText: {
    color: '#000', // Mesma cor do texto do botão de login
    fontSize: 16,
    fontWeight: 'bold',
  },
});