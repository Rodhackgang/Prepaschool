import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "prepaschool/hooks/warmUpBrowser.tsx";
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  
  return (
    <View style={{display:'flex', alignItems:'center'}}>
      <Image source={require('../Screen/images.jpeg')}
              style={{width: 250, height: 500, objectFit: 'contain', marginTop: 50}}
      />
      <View style={{
        height:400,
        backgroundColor: Colors.PRIMARY,
        width: '100%',
        marginTop:-100,
        padding: 20,
      }}>
        <Text style={{textAlign:'center',
        fontSize: 25, color: Colors.WHITE,
        fontFamily: 'Outfit-Bold'
      }}>PREPA_SCHOOL</Text>
      <Text style={{textAlign: 'center',
    fontSize: 20, color: Colors.LIGHT_PRIMARY, fontFamily:'Outfit-Regular', marginTop: 30,
    }}>Apprenez facilement vos cours et examens</Text>

    <TouchableOpacity 
    onPress={onPress}
    style={{backgroundColor: Colors.WHITE,
      display: 'flex', flexDirection: 'row',alignItems: 'center', gap: 10, justifyContent: 'center',
      padding: 10, borderRadius: 99,marginTop: 20
    }}>
        <Image source={require('../Screen/google.png')} 
          style={{width: 40, height: 40}}
        />
        <Text style={{fontSize: 20, color: Colors.PRIMARY,
          fontFamily:'Outfit-Regular'
        }}>Se connecter via google</Text>
    </TouchableOpacity>
      </View>
    </View> 
  )
}