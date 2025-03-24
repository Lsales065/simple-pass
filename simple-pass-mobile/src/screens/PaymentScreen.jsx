import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PaymentScreen({ navigation }) {
  const [selectedMethod, setSelectedMethod] = useState(null); // Estado para armazenar o método selecionado

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>❮</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Realizar Pagamento</Text>
      </View>

      {/* Informe os Dados */}
      <Text style={styles.informationTitle}>Informe os dados</Text>

      {/* Nome do Destinatário */}
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#000" />
        <TextInput 
          placeholder="Digite o nome completo"
          style={styles.input}
        />
      </View>

      {/* Valor */}
      <View style={styles.inputContainer}>
        <FontAwesome name="dollar" size={20} color="#000" />
        <TextInput 
          placeholder="R$ 0,00"
          style={styles.input}
        />
      </View>

      {/* Método de Pagamento */}
      <Text style={styles.paymentMethodTitle}>Método de pagamento</Text>

      {/* Opções de Método de Pagamento */}
      <TouchableOpacity 
        style={[
          styles.paymentMethodItem,
          selectedMethod === 'pix' && styles.selectedPaymentMethod, // Aplica estilo se selecionado
        ]}
        onPress={() => setSelectedMethod('pix')} // Define o método como PIX
      >
        <FontAwesome name="qrcode" size={20} color="#000" />
        <Text style={styles.paymentMethodLabel}>PIX</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.paymentMethodItem,
          selectedMethod === 'debit' && styles.selectedPaymentMethod, // Aplica estilo se selecionado
        ]}
        onPress={() => setSelectedMethod('debit')} // Define o método como Cartão de Débito
      >
        <FontAwesome name="credit-card" size={20} color="#000" />
        <Text style={styles.paymentMethodLabel}>Cartão de débito</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.paymentMethodItem,
          selectedMethod === 'credit' && styles.selectedPaymentMethod, // Aplica estilo se selecionado
        ]}
        onPress={() => setSelectedMethod('credit')} // Define o método como Cartão de Crédito
      >
        <FontAwesome name="credit-card-alt" size={20} color="#000" />
        <Text style={styles.paymentMethodLabel}>Cartão de crédito</Text>
      </TouchableOpacity>

      {/* Espaçador para empurrar o botão para baixo */}
      <View style={styles.spacer} />

      {/* Botão Continuar */}
      <TouchableOpacity 
        style={[
          styles.continueButton,
          !selectedMethod && styles.disabledButton, // Desativa o botão se nenhum método for selecionado
        ]}
        onPress={() => {
          if (selectedMethod) {
            if (selectedMethod === 'pix') {
              navigation.navigate('PixConfirmation'); // Redireciona para a tela de confirmação de PIX
            } else if (selectedMethod === 'debit' || selectedMethod === 'credit') {
              navigation.navigate('CardPayment'); // Redireciona para a tela de pagamento com cartão
            }
          }
        }}
        disabled={!selectedMethod} // Desativa o botão se nenhum método for selecionado
      >
        <Text style={styles.continueButtonText}>Continuar</Text>
        <FontAwesome name="chevron-right" size={20} color="#000" />
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
    flexDirection: 'column', // Alterado para coluna para empilhar os elementos
    alignItems: 'center',
    marginBottom: 50,
  },
  backButton: {
    alignSelf: 'row', // Alinha o botão de voltar à esquerda
    marginBottom: 8, // Espaçamento entre o ícone e o título
    margin:20,
    
  },
  backButtonText: {
    fontSize: 24,
    color: '#000', // Cor preta
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Cor preta
    textAlign: 'center',
    marginTop: 8, // Posiciona o título abaixo do ícone
  },
  informationTitle: {
    fontSize: 18,
    color: '#000', // Cor preta
    marginBottom: 16,
  },
  inputContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#000', // Cor preta
  },
  paymentMethodTitle: {
    fontSize: 18,
    color: '#000', // Cor preta
    marginBottom: 16,
  },
  paymentMethodItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  selectedPaymentMethod: {
    backgroundColor: '#ADD8E6', // Cor de fundo quando selecionado
  },
  paymentMethodLabel: {
    fontSize: 16,
    color: '#000', // Cor preta
    marginLeft: 16,
  },
  spacer: {
    flex: 1, // Empurra o botão para baixo
  },
  continueButton: {
    backgroundColor: '#fff', // Fundo verde para o botão continuar
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24, // Adiciona um espaçamento na parte inferior
  },
  disabledButton: {
    backgroundColor: '#D3D3D3', // Cor de fundo desativada
  },
  continueButtonText: {
    fontSize: 16,
    color: '#000', // Cor branca para o texto do botão
    flex: 1,
    textAlign: 'center',
  },
});