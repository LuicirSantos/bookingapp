import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import styles from './styles';
import DetailsHotel from '../DetailsHotel';

type HeaderProps = {
  titleScreen: string;
  accommodation: boolean;
  notifications: boolean;
  buttonBack: boolean;
  nav: any
}

function Header({titleScreen, accommodation, notifications, buttonBack, nav}: HeaderProps){

  return (
    <View>
      <View style={styles.containerTextHeader}>
        {buttonBack 
          ? <AntDesign onPress={() => nav.goBack()} style={{alignSelf: 'center'}} name="arrowleft" size={24} color="white" />
          : null
        }
        <Text style={styles.textHeader}>{titleScreen}</Text>

        {notifications 
        ? <Ionicons style={{alignSelf: 'center'}} name="notifications-outline" size={26} color="white" />
        : null
        }
      </View>
      { accommodation ? <DetailsHotel /> : null }
    </View>
  )
}

export default Header;