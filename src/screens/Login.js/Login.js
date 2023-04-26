import React, { useState } from "react";
import { Button, Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Modal from "react-native-modal";
import Input from '../../components/shared/textInputs/Inputs';
import FullSizeButtons from "../../components/shared/buttons/FullSizeButtons";
import { FontFamily } from "../../assets/fonts/FontFamily";

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
                <View style={styles.modalContainer}>
                    
                    <View style={{padding:5}}>
                        <Text style={styles.modalContainerTitle}>LOGIN</Text>
                    </View>
                    <View style={{padding:5 }}>
                        <Text style={styles.subTitle}>Please enter your registered mobile number to login</Text>
                    </View>
                    <View style={{padding: 10}} >

                    <Input
                        width="100%"
                        borderWidth={0}
                        borderBottomWidth={1}
                        borderRadius={5}
                        placeholder='Mobile number'
                        placeholderColor='grey'
                        />
                        </View>
                    <View style={{ marginTop: 5, padding: 10, width: '100%', }}>
                        <View style={{alignSelf:'center',width:'100%'}}>
                        <FullSizeButtons titleColor='#fff' title='Send OTP' height={50} width={'100%'} />
                        </View>
                    </View>
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
        justifyContent: 'center',
        alignItems: 'center'
        ,
    },
    modal: {
        width: '100%',
        marginLeft: 0,
        marginBottom: 0,
    },
    modalContainer:{
        width: '100%',
        backgroundColor: "#fff",
        position: 'absolute',
        height: 300,
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        padding: 10 

    },
    modalContainerTitle:{
    fontSize: 30,
    fontWeight: '600',
    marginTop: 15,
    color:'#071b3f',
    fontFamily:FontFamily.Popinsbold

    },
    subTitle:{ 
    fontSize: 18,
    fontWeight: '500',
    color:'#858585' 
    }
});