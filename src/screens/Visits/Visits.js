import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/shared/header/Header'
import SegmentedTab from '../../components/shared/segment_tab/SegmentedTabs'

const Visits = () => {
  return (
    <>

    <View>
    <Header
        add
        height={67}
        rightText
        // stepText
        // centerText
        iconupdown
        // stepBottom={21}
        // verifyBottom={28}
        addbottom={30}
        DownBottom={18}
        upBottom={51}
        // updownPress={()=>{alert ('hii')}}
      />
    </View>
    <ScrollView>

    <View style={{padding:5,margin:5}}>
   <SegmentedTab/>
  </View>
    </ScrollView>
    </>
  
  )
}

export default Visits

const styles = StyleSheet.create({})