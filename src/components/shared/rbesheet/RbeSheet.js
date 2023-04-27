import React from "react";
import { View, Text, Button } from "react-native"
import RBSheet from "react-native-raw-bottom-sheet";
import { FontFamily } from "../../../assets/fonts/FontFamily";
import RadioButton from "../buttons/RadioButton";
import { CheckBox,Icon } from '@rneui/themed';
function RbeSheet() {
    const [check1, setCheck1] = React.useState(false);
    const [check2, setCheck2] = React.useState(false);
    const [check3, setCheck3] = React.useState(false);
    const [month,setMonth] = React.useState(1)

    const radioData = [
            { type: 'January', id: 1, color: false },
            { type: 'February', id: 2, color: false },
            { type: 'March', id: 3, color: false },
            { type: 'April', id: 4, color: false },
            { type: 'May', id: 5, color: false },
            { type: 'june', id: 6, color: false },
            
          ];
    

    return (
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Click" onPress={() => this.RBSheet.open()} />
            <RBSheet
                ref={ref => {
                    this.RBSheet = ref;
                }}
                height={300}
                openDuration={200}
                customStyles={{
                    container: {
                        padding: 15,
                        width: '100%',
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                    }
                }}
            >

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }} >
                    <Text style={{ fontSize: 20, fontWeight: '700',color:'#000' }}>Set Filters</Text>

                    <Text style={{ fontSize: 18, fontWeight: '600', left: 100 }}>Done</Text>

                </View>
                <View style={{ width: '100%' }}>
                    <Text style={{ fontSize: 18, fontFamily: FontFamily.TTCommonsBold }}>Sort by</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center',margin:0 }}>
                        <CheckBox containerStyle={{margin:5,padding:1}}
                            center
                            checkedIcon={
                                <Icon
                                    name="radio-button-checked"
                                    type="material"
                                    color="#f47216"
                                    size={20}
                                    
                                />
                            }
                            uncheckedIcon={
                                <Icon
                                    name="radio-button-unchecked"
                                    type="material"
                                    color="grey"
                                    size={20}
                                    
                                />
                            }
                            checked={check1}
                            onPress={() => setCheck1(!check1)}
                        />
                        <Text style={{fontSize:16,fontWeight:'400',color:'#000'}}>Alphabetically A to Z</Text>
                    </View>
                    <View style={{ flexDirection: 'row',margin:0, alignItems: 'center'}}>
                    <CheckBox 
                    containerStyle={{margin:5,padding:1}}
                            center
                            checkedIcon={
                                <Icon
                                    name="radio-button-checked"
                                    type="material"
                                    color="#f47216"
                                    size={20}
                                    
                                />
                            }
                            uncheckedIcon={
                                <Icon
                                    name="radio-button-unchecked"
                                    type="material"
                                    color="grey"
                                    size={20}
                                    
                                />
                            }
                            checked={check2}
                            onPress={() => setCheck2(!check2)}
                        />
                        <Text style={{fontSize:16,fontWeight:'400',color:'#000'}}>Alphabetically Z to A</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox containerStyle={{margin:5,padding:1}}
                            center
                            checkedIcon={
                                <Icon
                                    name="radio-button-checked"
                                    type="material"
                                    color="#f47216"
                                    size={20}
                                    
                                />
                            }
                            uncheckedIcon={
                                <Icon
                                    name="radio-button-unchecked"
                                    type="material"
                                    color="grey"
                                    size={20} 
                                />
                            }
                            checked={check3}
                            onPress={() => setCheck3(!check3)}
                        />
                        <Text style={{fontSize:16,fontWeight:'400',color:'#000'}}>Newley Added</Text>
                    </View>

                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'600',color:'#000',backgroundColor:'blue'}}>Added Month</Text>
                   </View>
                   <View style={{flexWrap:'wrap',backgroundColor:'red',alignItems:'center'}}> 
                    <RadioButton
                    
                    data={radioData}
                    getId={month}
                    setId={setMonth}
                    label={''}
                    
                    />
                    </View>

                


            </RBSheet>



        </View>
    )
}
export default RbeSheet;