import React, { useState } from "react";
import { Modal, View, Text, Button, TextInput, Alert} from "react-native";
import { styles } from "./styles";



const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel}) => {
  const [numberOption, setNumberOption] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const NumberContainer = ({ number }) => {
    return (
      <View>
        <Text style={styles.number}>{number}</Text>
      </View>
    );
  };
  const onHandlerReset = () => {
    setNumberOption('');
    setConfirmed(false);
    setSelectedNumber(null);
  };

  const onHandlerChangeText = (text) => {
    setNumberOption(text.replace(/[^0-9]/g, ''));
  };

  

  const Confirmed = () => confirmed ? (

<View style={styles.confirmed}>
  <Text>La cantidad seleccionada de {selectedEvent?.value} es:</Text>
<NumberContainer number={selectedNumber}/>
</View>
  ) : null;
  const onHandlerConfirm = () => {
    const chosenNumber = Number(numberOption);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 20) {
      Alert.alert('Numero invalido', 'La cantidad elegida debe ser entre 1 y 20', [
        { text: 'Okay', style: 'destructive', onPress: () => setNumberOption('') },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
       setNumberOption('');
    }
  };

  
    return (
        <Modal visible={isVisible} animationType={animationType}>
        <View style={styles.container}>
          
          <Text style={styles.title}>Carrito de compras</Text>
          <View style={styles.detailContainer}>
          
            <Text style={styles.detailMessage}>Cuantos/as {selectedEvent?.value} desea comprar?</Text>
            
         
            
          </View>
          <TextInput style={styles.unidades}
        onChangeText={onHandlerChangeText}
          />
          <View style={styles.buttonContainer}>
       
            <Button 
              title='Cancelar compra'
              color='#C40024'
              onPress={onHandlerReset}
            />
            <Button 
            title='Confirmar'
            color='#C40024'
            onPress={onHandlerConfirm}
            
              />
             
              
          </View>
          <Button 
              title='Volver al menu principal'
              color='#C40024'
              onPress={onCancel}
            />
            
        </View>
        <Confirmed />

      </Modal>
    )
};

export default CustomModal;