import { View, Text, Image, StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { EvilIcons } from '@expo/vector-icons';

export default function Header() {
  const {isLoaded, isSignedIn,user}= useUser();

  return isLoaded&&(
    <View>
    <View style={[{justifyContent:'space-between'},styles.rowStyle]}>
      <View style={styles.rowStyle}>
        <Image source={{uri:user?.imageUrl}}
          style={{width: 50, height: 50, borderRadius: 99}}
        />
        <View>
          <Text style={{color: Colors.WHITE, fontFamily:'Outfit-Regular'}}>Bienvenue,</Text>
          <Text style={styles.mainText}>{user?.fullName}</Text>
        </View>
      </View>
      <View style={styles.rowStyle}>
        <Image source={{uri:'data:image/png;base64,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'}} style={{width: 35, height: 35, borderRadius: 99}}/>
        <Text style={styles.mainText}>3580</Text>
      </View>
    </View>
    <View style={{backgroundColor: Colors.WHITE, 
      borderRadius: 99,paddingRight: 5,marginTop: 25,
      paddingLeft: 20,display: 'flex',flexDirection: 'row',justifyContent:'space-between'}}>
      <TextInput placeholder='Recherche ton cour' style={{fontFamily:'Outfit-Regular', fontSize:18}}/>
      <EvilIcons name="search" size={50} color={Colors.PRIMARY} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainText:{
        color: Colors.WHITE,
        fontSize:20,
        fontFamily:'Outfit-Regular'
    },
    rowStyle:{
      display:'flex',
      flexDirection:'row',
      gap: 10,
      alignItems: 'center'
    }
});