import React from 'react'
import { Image, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParamList,'Screen1'>{};

export const Screen1 = ({navigation}:Props) => {

  return (
    <View style={styles.container}>
        <TitleComponent title='Bienvenido'/>
        <BodyComponent>
            <Image source={{uri:'https://s0.smartresize.com/wallpaper/665/808/HD-wallpaper-game-of-thrones-cercei-game-jon-snow-lannister-ned-stark-stannis-stark-thrones-wolf.jpg'}}
            style={styles.imagen}/>
            <ButtonComponent title='ACCEDER' onPress={()=>navigation.navigate('Screen2')}/>
        </BodyComponent>
    </View>
  )
}