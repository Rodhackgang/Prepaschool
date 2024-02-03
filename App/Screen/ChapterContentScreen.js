import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import Content from '../Components/ChapterContent/Content'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MarkchapterCompleted } from '../Services';

export default function ChapterContentScreen() {

  const navigation= useNavigation();
  const param= useRoute().params;
  useEffect(()=>{
      console.log("ChapterId",param.chapterId)
      console.log("RecordId",param.recordId)
  },[param])
  const onChapterFinish=()=>{
    MarkchapterCompleted(param.chapterId,param.recordId).then(resp=>{
      console.log(resp);
      if(resp){
        navigation.goBack();
        ToastAndroid.show("Cours enregistrer",ToastAndroid.LONG)
      }
    }
    )
  }
  
  return param.content&&(
    <View>
      <Content 
      content={param.content}
      onChapterFinish={()=>
        onChapterFinish()
      }
      />
    </View>
  )
}