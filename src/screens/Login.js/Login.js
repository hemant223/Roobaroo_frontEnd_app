import React, { useState } from "react";
import { Button, Text, View, TextInput, TouchableOpacity,StyleSheet, ImageBackground } from "react-native";
import Modal from "react-native-modal";
import Inputs from '../../components/shared/textInputs/Inputs'

function Login() {
    const [isModalVisible, setModalVisible] = useState(true);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View>
            <ImageBackground source={require('../../assets/images/Background.jpg')} style={styles.container} />
            <Button title="Show modal" onPress={toggleModal} />
            <Modal isVisible={isModalVisible} style={styles.modal}   >
                <View style={{ width: '100%', backgroundColor: "#fff", position: 'absolute', height: 300, bottom: 0, borderTopRightRadius: 10, borderTopLeftRadius: 10, padding: 15 }}>
                    <Text style={{ fontSize: 22, fontWeight: '800', marginTop: 15 }}>LOGIN</Text>
                    <View style={{ width: '100%', marginTop: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Please enter your registered mobile number to login</Text>
                    </View>
                    <Inputs/>
                    <TouchableOpacity style={{ backgroundColor: 'blue', marginTop: 20, width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}><Text style={{ color: '#fff' }}>Send OTP</Text></TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        width: '100%',
         height: '100%',
          justifyContent:'center',
          alignItems:'center'
      ,
    },
    modal:{
        width: '100%',
        marginLeft: 0,
        marginBottom: 0, 
    }
  });