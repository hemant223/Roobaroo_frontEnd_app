import React, { useState, useRef } from "react";
import { Button, Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Modal from "react-native-modal";
import Input from '../../components/shared/textInputs/Inputs';
import FullSizeButtons from "../../components/shared/buttons/FullSizeButtons";
import { FontFamily } from "../../assets/fonts/FontFamily";
import { ImagesAssets } from "../../components/shared/ImageAssets";

function OtpInput(props) {
    const [isModalVisible, setModalVisible] = useState(true);

    const et1 = useRef()
    const et2 = useRef()
    const et3 = useRef()
    const et4 = useRef()
    const et5 = useRef()
    const [f1, setF1] = useState('')
    const [f2, setF2] = useState('')
    const [f3, setF3] = useState('')
    const [f4, setF4] = useState('')
    const [f5, setF5] = useState('')

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View>
            <View style={{height:'100%',width:'100%'}}>
            <ImageBackground source={ImagesAssets.login_background} resizeMode='cover' style={{width:'100%',height:'80%'}} />
            </View>
            <Button title="Show modal" onPress={toggleModal} />
            <Modal isVisible={isModalVisible} style={styles.modal}   >
                <View style={styles.modalContainer}>

                    <View style={{ padding: 5 }}>
                        <Text style={styles.modalContainerTitle}>Verify OTP</Text>
                    </View>
                    <View style={{ padding: 5 }}>
                        <Text style={styles.subTitle}>We've sent you an OTP on your registered mobile number</Text>
                    </View>
                    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-evenly' }} >

                        <TextInput
                            ref={et1}
                            maxLength={1}
                            textAlign={'center'}
                            
                            style={{ borderBottomWidth: 1,width:'12%',fontSize:18,fontWeight:'500'}}
                            keyboardType={'number-pad'}
                            onChangeText={txt => {
                                setF1(txt)
                                if (txt.length >= 1) {
                                    et2.current.focus()
                                } else if (txt.length < 1) {
                                    et1.current.focus()
                                }
                            }}
                        />


                        <TextInput
                            ref={et2}
                            maxLength={1}
                            textAlign={'center'}
                            keyboardType={'number-pad'}

                            style={{ borderBottomWidth: 1,width:'12%',fontSize:18,fontWeight:'500', }}
                            onChangeText={txt => {
                                setF2(txt)
                                if (txt.length >= 1) {
                                    et3.current.focus()
                                } else if (txt.length < 1) {
                                    et1.current.focus()
                                }
                            }}
                        />


                        <TextInput style={{ borderBottomWidth: 1,width:'12%',fontSize:18,fontWeight:'500', }}
                            ref={et3}
                            maxLength={1}
                            textAlign={'center'}
                            keyboardType={'number-pad'}
                            onChangeText={txt => {
                                setF3(txt)
                                if (txt.length >= 1) {
                                    et4.current.focus()
                                } else if (txt.length < 1) {
                                    et2.current.focus()
                                }
                            }}
                        />


                        <TextInput style={{ borderBottomWidth: 1,width:'12%',fontSize:18,fontWeight:'500', }}
                            ref={et4}
                            maxLength={1}
                            textAlign={'center'}
                            keyboardType={'number-pad'}
                            onChangeText={txt => {
                                setF4(txt)
                                if (txt.length >= 1) {
                                    et5.current.focus()
                                } else if (txt.length < 1) {
                                    et3.current.focus()
                                }
                            }}
                        />
                        <TextInput style={{ borderBottomWidth: 1,width:'12%',fontSize:18,fontWeight:'500', }}
                            ref={et5}
                            maxLength={1}
                            textAlign={'center'}  
                            keyboardType={'number-pad'}
                            onChangeText={txt => {
                                setF5(txt)
                                if (txt.length >= 1) {
                                    et5.current.focus()
                                } else if (txt.length < 1) {
                                    et4.current.focus()
                                }
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 5, padding: 10, width: '100%', }}>
                        <View style={{ alignSelf: 'center', width: '100%' }}>
                            <FullSizeButtons onPress={()=>{props.navigation.navigate('Dashboard')}} titleColor='#fff' title='Send OTP' height={50} width={'100%'} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default OtpInput;

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
    modalContainer: {
        width: '100%',
        backgroundColor: "#fff",
        position: 'absolute',
        height: 300,
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        padding: 10

    },
    modalContainerTitle: {
        fontSize: 30,
        fontWeight: '600',
        marginTop: 15,
        color: '#071b3f',
        fontFamily: FontFamily.Popinsbold

    },
    subTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#858585'
    },

});