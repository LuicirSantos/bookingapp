import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';

type UserNavigationProp = NativeStackNavigationProp<RootStackParamList, 'UserScreen'>;
type UserRouteProp = RouteProp<RootStackParamList, 'UserScreen'>;

function UserScreen(){

  const navigation: UserNavigationProp = useNavigation<UserNavigationProp>();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const route: UserRouteProp = useRoute<UserRouteProp>();

  return (
    <View style={styles.containerUser}>
      <Header 
        titleScreen='Detalhes do Usuário'
        accommodation={false}
        notifications={false}
        buttonBack={true}
        nav={navigation}
      />
      <View style={styles.boxDataUser}>
        <View style={styles.boxNameSobrenomeEmailPhone}>
          <TextInput 
            value={firstName}
            onChangeText={(text: string) => setFirstName(text)}
            style={styles.nameSobrenomeEmailPhone} 
            placeholder='Nome' 
            placeholderTextColor='gray' 
          />
        </View>

        <View style={styles.boxNameSobrenomeEmailPhone}>
          <TextInput 
            value={lastName}
            onChangeText={(text: string) => setLastName(text)}
            style={styles.nameSobrenomeEmailPhone} 
            placeholder='Sobrenome' 
            placeholderTextColor='gray' 
          />
        </View>

        <View style={styles.boxNameSobrenomeEmailPhone}>
          <TextInput 
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            style={styles.nameSobrenomeEmailPhone} 
            placeholder='Email' 
            placeholderTextColor='gray' 
          />
        </View>

        <View style={styles.boxNameSobrenomeEmailPhone}>
          <TextInput 
            value={phone}
            onChangeText={(text: string) => setPhone(text)}
            style={styles.nameSobrenomeEmailPhone} 
            placeholder='Telefone Celular' 
            placeholderTextColor='gray' 
          />
        </View>
      </View>
      <View
          style={{
            position: 'absolute',
            bottom: '0%',
            left: '0%',
            right: '0%',
            padding: 10,
            backgroundColor: 'white',
            marginTop: 'auto',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 4,
                gap: 8
              }}
            >
              <Text
                style={{
                  color: 'red',
                  fontSize: 20,
                  textDecorationLine: 'line-through'
                }}
              >
                R$ {route.params.oldPrice * route.params.adults}
              </Text>
              <Text
                style={{
                  fontSize: 20
                }}
              >
                R$ {route.params.newPrice * route.params.adults}
              </Text>
            </View>
            <Text>Você salvou {route.params.oldPrice - route.params.newPrice} reais</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ConfirmationScreen', {
              oldPrice: route.params.oldPrice,
              newPrice: route.params.newPrice,
              name: route.params.name,
              children: route.params.children,
              adults: route.params.adults,
              rating: route.params.rating,
              startDate: route.params.startDate,
              endDate: route.params.endDate
            })}
            style={{
              backgroundColor: '#007fff',
              padding: 10,
              borderRadius: 5
            }}
          >
            <Text 
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 15
              }}
            >
              Passo Final
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserScreen;