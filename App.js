import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Outfit_400Regular, Outfit_700Bold, Outfit_600Semi } from '@expo-google-fonts/outfit';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Constants from "expo-constants"
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Outfit-Regular': Outfit_400Regular,
    'Outfit-Bold': Outfit_700Bold,
    'Outfit-Semi': Outfit_600Semi,
  });

  
  return (
    <ClerkProvider publishableKey={"Ici on doit mettre la clé de Clerk"} >
    <View style={styles.container}>
      
      <SignedIn> 
         <NavigationContainer>
            <TabNavigation/>
         </NavigationContainer>

        </SignedIn>
        <SignedOut>
            <LoginScreen/>
        </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
});
