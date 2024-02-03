import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RenderHTML from 'react-native-render-html'
import Colors from '../../Utils/Colors';

export default function ContentItem({description,output}) {
  const {width}= useWindowDimensions();
  const descriptionSource={
    html:description
  }
  const outputSource={
    html:output
  }
  const [isRun, setIsRun]= useState(false);
  return description&&(
    <View>
      {/*<Text>{description}</Text>*/}
      <RenderHTML 
          contentWidth={width}
          source={descriptionSource}
          tagsStyles={tagsStyles}
      />
      {
      output!=null?
      <TouchableOpacity
      onPress={()=>setIsRun(true)}
      >
        <Text style={{padding: 15, backgroundColor: Colors.PRIMARY,
        borderRadius: 10,width: "40%",fontFamily: 'Outfit-Bold', fontSize: 16, color: Colors.WHITE,
        textAlign: 'center'
        }}>Corriger</Text>
      </TouchableOpacity>:null
      }     
      {isRun?
        <>
      <RenderHTML 
          contentWidth={width}
          source={outputSource}
          tagsStyles={tagsStyles}
      />
      </>:null}
    </View>
  )
}
const tagsStyles={
  body:{
      fontFamily:'normal',
      fontSize: 16,
      width: '90%',
  },
  code :{
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    padding: 20,
    borderRadius: 20,
  },
  a :{
    color: 'blue',
    fontSize: 20,
  }
}