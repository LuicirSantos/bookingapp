import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import { auth } from '../../server/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;

function LoginScreen(){

  const navigation = useNavigation<LoginNavigationProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {

    try {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          navigation.navigate('Main');
        }
      });
  
      return unsubscribe;
    } catch (error) {
      console.log(error);
    }

  }, []);

  function login(){
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("Credencial de usuario: ", userCredential);
      const user = userCredential.user;
      console.log("Detalhes do usuario: ", user);
      
    });
  }

  return (
    <View style={styles.containerLogin}>
        <KeyboardAvoidingView>
          <View style={styles.containerLoginPassword}>
            <TextInput 
              value={email}
              onChangeText={(text: string) => setEmail(text)}
              placeholder='Email'
              placeholderTextColor='gray'
              style={styles.fieldEmailLogin}
            />

            <TextInput 
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              secureTextEntry={true}
              placeholder='Senha'
              placeholderTextColor='gray'
              style={styles.fieldEmaiPassword}
            />

            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={login}
            >
              <Text style={styles.buttonTextLogin}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonCreateAccount}
              onPress={() => navigation.navigate('RegisterScreen')}
            >
              <Text style={styles.buttonTextCreateAccount}>Não tem uma conta? Criar Conta</Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen;