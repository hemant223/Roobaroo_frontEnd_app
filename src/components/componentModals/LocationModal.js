import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ModalRoot from '../shared/modals/ModalRoot'
import Ad from 'react-native-vector-icons/AntDesign';
const LocationModal = () => {
const [showModal, setShowModal] = useState(true)
const SelectLocationModal =()=>{
    const data =[
        {id:'1',iconName:'',title:'Public meetings',color:'#3786eb',backgroundColor:'#ecf4fe'},
        {id:'2',iconName:'',title:'Field Visits',color:'#f9aa4b',backgroundColor:'#fff6ec'},
        {id:'3',iconName:'',title:'Mantralaya',color:'#f3747f',backgroundColor:'#fcdee0'},
        {id:'4',iconName:'',title:'Vidhyansaabh',color:'#18b797',backgroundColor:'#c5ede5'},
        {id:'5',iconName:'',title:'jasdham',color:'#d680e6',backgroundColor:'#f6d9ff'},
        {id:'6',iconName:'',title:'residence',color:'#2fc2e1',backgroundColor:'#d5f3f9'},
    ]
    return(
      <View>
          
      </View>
        
    )
}

  return (
    <ModalRoot
        width={'90%'}
        padding={5}
        showModal={showModal}
        setShowModal={setShowModal}
        content={<SelectLocationModal />}
      />
  )
}

export default LocationModal

const styles = StyleSheet.create({})