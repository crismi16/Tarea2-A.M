import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TitleComponent} from '../components/TitleComponent';
import {BodyComponent} from '../components/BodyComponent';
import {InputComponent} from '../components/InputComponent';
import {ButtonComponent} from '../components/ButtonComponent';
import { styles } from '../theme/appTheme';

interface UserForm {
  number1: string;
  number2: string;
}

export const Screen2 = () => {
  const [result, setResult] = useState('');

  const [numero, setNumero] = useState<UserForm>({
    number1: '0',
    number2: '0',
  });

  const handlerChangeText = (name: string, value: string) => {
    setNumero(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlerSendInfo = () => {
    let num1: number = parseFloat(numero.number1);
    let num2: number = parseFloat(numero.number2);
    let resultado: string = '';
    if (num1 == 0 && num2 == 0) {
      resultado ='Indeterminación ';
      setResult(resultado);
    }
    if (num1 != 0 && num2 == 0) {
      resultado = 'No existe división para cero' ;
      setResult(resultado);
    }
    if (num2 != 0) {
      let split: number = num1/num2;
      resultado = 'El cociente es ' + split;
      setResult(resultado);
    }
  };

  return (
    <View style={styles.container}>
      <TitleComponent title="Formulario" />
      <BodyComponent>
        <View style={styles.formContainer}>
          <InputComponent
            placeholder="Dividendo"
            name="number1"
            onChangeText={handlerChangeText}
          />
          <InputComponent
            placeholder="Divisor"
            name="number2"
            onChangeText={handlerChangeText}
          />
          <ButtonComponent title="Dividir" onPress={handlerSendInfo} />
          <Text style={styles.result}>{result}</Text>
        </View>
      </BodyComponent>
    </View>
  );
};
