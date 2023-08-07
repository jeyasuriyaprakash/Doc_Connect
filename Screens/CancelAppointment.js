import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { Card, Checkbox } from 'react-native-paper';
import AwesomeAlert from "react-native-awesome-alerts";

export default function CancelAppointment({navigation}) {

    const [checked, setChecked] = React.useState("");
    const [checked1, setChecked1] = React.useState("");
    const [checked2, setChecked2] = React.useState("");
    const [checked3, setChecked3] = React.useState("");
    const [checked4, setChecked4] = React.useState("");
    const [checked5, setChecked5] = React.useState("");
    const [checked6, setChecked6] = React.useState("");
    const [checked7, setChecked7] = React.useState("");

    const [showAlert, setShowAlert] = useState(false);


  return (
    <View style={styles.container}>



<View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
<Entypo name="chevron-left" size={30} color="black"  onPress={()=>navigation.navigate('Appointment')}/>
      <Text style={{fontSize:23,fontWeight:600,color:'#1a1a1a'}}>Cancel Appointment</Text>

</View>

<View style={{margin:30}}>
    <Text style={{fontSize:18,color:'#1A1A1A',fontWeight:'600'}}>Reason for Schedule change</Text>
</View>


<View style={{flexDirection:'row',alignItems:'center'}}>
<Checkbox color='#236AFD' uncheckedColor='#236AFD'
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{fontSize:16,color:'#1a1a1a'}}>I want to change another doctor</Text>
</View>

<View style={{flexDirection:'row',alignItems:'center'}}>
<Checkbox color='#236AFD' uncheckedColor='#236AFD'
      status={checked1 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked1(!checked1);
      }}
    />
    <Text style={{fontSize:16,color:'#1a1a1a'}}>I don’t want to consult</Text>
</View>


<View style={{flexDirection:'row',alignItems:'center'}}>
<Checkbox color='#236AFD' uncheckedColor='#236AFD'
      status={checked2 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked2(!checked2);
      }}
    />
    <Text style={{fontSize:16,color:'#1a1a1a'}}>I have recovered from the disease</Text>
</View>


<View style={{flexDirection:'row',alignItems:'center'}}>
<Checkbox color='#236AFD' uncheckedColor='#236AFD'
      status={checked3 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked3(!checked3);
      }}
    />
    <Text style={{fontSize:16,color:'#1a1a1a'}}>I have found a suitable medicine</Text>
</View>


<View style={{flexDirection:'row',alignItems:'center'}}>
<Checkbox color='#236AFD' uncheckedColor='#236AFD'
      status={checked4 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked4(!checked4);
      }}
    />
    <Text style={{fontSize:16,color:'#1a1a1a'}}>I just want to cancel</Text>
</View>


<View style={{flexDirection:'row',alignItems:'center'}}>
<Checkbox color='#236AFD' uncheckedColor='#236AFD'
      status={checked5 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked5(!checked5);
      }}
    />
    <Text style={{fontSize:16,color:'#1a1a1a'}}>I want to change another doctor</Text>
</View>


<View style={{flexDirection:'row',alignItems:'center'}}>
<Checkbox color='#236AFD' uncheckedColor='#236AFD'
      status={checked6 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked6(!checked6);
      }}
    />
    <Text style={{fontSize:16,color:'#1a1a1a'}}>I don’t want to tell</Text>
</View>


<View style={{flexDirection:'row',alignItems:'center'}}>
<Checkbox color='#236AFD' uncheckedColor='#236AFD'
      status={checked7 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked7(!checked7);
      }}
    />
    <Text style={{fontSize:16,color:'#1a1a1a'}}>Others</Text>
</View>

<View style={{marginTop:20}}>
    <Card style={{backgroundColor:'#FAFAFA',height:174,width:322,alignContent:'center',padding:20}}>
        <Text style={{fontSize:14,fontWeight:'400'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
magni dolores</Text>
    </Card>
</View>

<View>
    <TouchableOpacity
       onPressIn={() => setShowAlert(!showAlert)}
     style={{height:50,width:322,backgroundColor:'#0856FF',borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:60}} >
        <Text style={{color:'#FFFFFF',fontSize:18,fontWeight:'500'}}>Submit</Text>
    </TouchableOpacity>
    <AwesomeAlert 
                    show={showAlert}
                    title="Cancel Appointment Success!"
                    titleStyle={{ fontSize: 20, color: "red",fontWeight:'500' }}
                    message="We are very sad that you have canceled your appointment."
                    showCancelButton={true}
                    cancelText="Back"
                    cancelButtonStyle={{backgroundColor:'#ebebeb',borderRadius:15,borderRadius:20,height:40,width:80,justifyContent:'center'}}
                    cancelButtonTextStyle={{color:'#0856ff',textAlign:'center'}}
                    onCancelPressed={() => {
                      console.log("confirm button pressed")
                  setShowAlert(false)
                  }}

                    showConfirmButton={true}
                    confirmText="Submit"
                    confirmButtonStyle={{backgroundColor:'#0856ff',borderRadius:20,height:40,width:80,justifyContent:'center'}}
                      confirmButtonTextStyle={{color:'#ffffff',textAlign:'center'}}
                  onConfirmPressed={()=> navigation.navigate('BottomNavigation')
                  
                  }
                  />
</View>







     
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:20,
    

    },
   
});