import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function ChapterSection({chapterList, userEnrolledCourse} ) {
  //console.log("Chapter List:", chapterList);

  const navigation= useNavigation();
  const OnChapterPress = (chapter) => {
    if (userEnrolledCourse?.length === 0 ) {
      ToastAndroid.show("Veuillez prendre un abonnement svp", ToastAndroid.LONG);
      return;
    }
  
  
    navigation.navigate('chapter-content', {
      content: chapter.content,
      chapterId: chapter.id,
      recordId: userEnrolledCourse[0].id,
    });
  };
  
  
  return chapterList&&(
    <View style={{padding:10,
    backgroundColor: Colors.WHITE,marginTop: 10,
    borderRadius: 15,
    }}>
      <Text style={{fontSize: 20, fontFamily:'Outfit-Bold'}}>Chapitres</Text>
      {chapterList.map((item, index) => (
        <TouchableOpacity style={{display: 'flex', flexDirection:'row', alignItems:'center', gap: 10, justifyContent: 'space-between',
        padding: 15, borderWidth: 1,borderRadius: 10, marginTop: 10,
        borderColor: Colors.GRAY
      }}
      onPress={()=>OnChapterPress(item)}
      >
        <View style={{display: 'flex', flexDirection:'row', alignItems:'center', gap: 10
        }}>
          <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 27 }}>{index + 1}</Text>
          <Text style={{ fontFamily: 'Outfit-Regular', fontSize: 21, color: Colors.GRAY }}>{item.title}</Text>
        </View>
         { userEnrolledCourse?.length=== 0 ? 
         <Ionicons name="md-lock-closed" size={25} color="black"/> :
         <Ionicons name="play" size={25} color="black"/>
        }
         </TouchableOpacity>
      ))}
    </View>
  )
}