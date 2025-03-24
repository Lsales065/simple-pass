import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
      </View>

      {/* Perfil */}
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <FontAwesome name="user-circle" size={50} color="#000" />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Luiza Marinho</Text>
          <Text style={styles.userEmail}>Usuário Simple pass</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <FontAwesome name="pencil" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Opções */}
      <Text style={styles.optionsTitle}>Opções</Text>
      <TouchableOpacity style={styles.optionItem}>
        <View style={styles.optionContent}>
          <FontAwesome name="user" size={20} color="#000" />
          <Text style={styles.optionLabel}>Configurações de conta</Text>
        </View>
        <FontAwesome name="chevron-right" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionItem}>
        <View style={styles.optionContent}>
          <FontAwesome name="credit-card" size={20} color="#000" />
          <Text style={styles.optionLabel}>Métodos de pagamento</Text>
        </View>
        <FontAwesome name="chevron-right" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionItem}>
        <View style={styles.optionContent}>
          <FontAwesome name="shield" size={20} color="#000" />
          <Text style={styles.optionLabel}>Segurança</Text>
        </View>
        <FontAwesome name="chevron-right" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionItem}>
        <View style={styles.optionContent}>
          <FontAwesome name="headset" size={20} color="#000" />
          <Text style={styles.optionLabel}>Central de ajuda</Text>
        </View>
        <FontAwesome name="chevron-right" size={20} color="#000" />
      </TouchableOpacity>

      {/* Botão Sair */}
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={() => navigation.navigate('ManageCards')} // Redireciona para ManageCardsScreen
      >
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF', // Fundo azul
    padding: 24,
  },
  header: {
    alignItems: 'center', // Centraliza o título
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Cor preta
    textAlign: 'center',
    marginTop: 70, // Posiciona o título abaixo do ícone
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    color: '#000', // Cor preta
  },
  userEmail: {
    fontSize: 14,
    color: '#000', // Cor preta
  },
  editButton: {
    marginLeft: 'auto',
  },
  optionsTitle: {
    fontSize: 18,
    color: '#000', // Cor preta
    marginBottom: 16,
    marginVertical: 30,
  },
  optionItem: {
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginVertical: 15,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLabel: {
    fontSize: 16,
    color: '#000', // Cor preta
    marginLeft: 16,
  },
  logoutButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#000', // Cor preta
    textAlign: 'center',
  },
});