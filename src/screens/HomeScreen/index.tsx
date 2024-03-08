import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/StackNavigation';
import styles from './styles';
import Header from '../../components/Header';

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

function HomeScreen(){

  const navigation = useNavigation<HomeScreenProps>();

  return (
    <View style={styles.constainerHome}>
      <Header />
    </View>
  )
}

export default HomeScreen;