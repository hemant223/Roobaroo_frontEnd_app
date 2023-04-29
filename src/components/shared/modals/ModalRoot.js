import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';


const ModalRoot = props => {
  return (
    <>
      {props.showModal && (
        <Modal
          statusBarTranslucent={true}
          animationType="slide"
          transparent={true}  
          visible={true}
          onRequestClose={() => {
            props.setShowModal(!props.showModal);   
          }}>
          <View style={{...styles.centeredView,backgroundColor:props.backgroundColor}}>
            <View
              style={{
                ...styles.modalView,
                padding: props.padding,
                width: props.width,
                height: props.height,
                maxHeight: '100%',
                overflow: 'hidden',
                borderRadius: props.borderRadius,
              }}>
              {props.content}
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

ModalRoot.defaultProps = {
  showModal: false,
  setShowModal: () => {},
  width: '80%',
  height: 'auto',
  borderRadius: 20,
  content: (
    <View>
      <Text>Please Add content</Text>
    </View>
  ),
  padding:35,
  backgroundColor: 'rgba(0,0,0,0.4)'
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
   
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',

    // borderRadius: 20,
    
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalRoot;
