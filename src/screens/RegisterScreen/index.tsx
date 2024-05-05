import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../server/firebase'; 
import { doc, setDoc } from 'firebase/firestore';

type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterScreen'>;

function RegisterScreen(){

  const navigation = useNavigation<LoginNavigationProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  function register(){
    if (email === "" || password === "" || phone === "") {
      Alert.alert(
        'Detalhes Inválidos', 
        'Porfavor Preencha todos os campos!', [
        {
          text: 'Cancelar',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'OK', onPress: () => null},
      ]);
    } else{
      createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
        const user = userCredentials.user.email;
        const uid = auth.currentUser?.uid;

        setDoc(doc(db, 'users', `${uid}`), {
          email: user,
          phone: phone
        }); 
      });
    }
  }

  return (
    <View style={styles.containerRegister}>
        <KeyboardAvoidingView>
          <View 
            style={styles.containerEmailPasswordPhone}
          >
            <TextInput 
              value={email}
              onChangeText={(text: string) => setEmail(text)}
              placeholder='Email'
              placeholderTextColor='gray'
              style={styles.fieldEmailRegister}
            />

            <TextInput 
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              secureTextEntry={true}
              placeholder='Senha'
              placeholderTextColor='gray'
              style={styles.fieldPasswordRegister}
            />

            <TextInput 
              value={phone}
              onChangeText={(text: string) => setPhone(text)}
              keyboardType='numeric'
              placeholder='Telefone Celular'
              placeholderTextColor='gray'
              style={styles.fieldPhoneRegister}
            />

            <TouchableOpacity
              style={styles.buttonResgister}
              onPress={register}
            >
              <Text 
                style={styles.buttonTextResgister}
              >
                  Criar Conta
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonBackLogin}
              onPress={() => navigation.goBack()}
            >
              <Text 
                style={styles.buttonTextBackLogin}
              >
                Já tem uma conta? Faça Login
              </Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterScreen;