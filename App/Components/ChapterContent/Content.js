import { View, Text, FlatList, Dimensions, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProgressBar from './PogressBar'
import ContentItem from './ContentItem'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'
export default function Content({content,onChapterFinish}) {

  let contentRef;
  const navigation = useNavigation();

  const [activeIndex, setActiveIndex]= useState(0);

  const onNextBtnPress=(index)=>{
    if(content?.length<=index+1){
      //navigation.goBack();
      onChapterFinish();
      return ;
    }
     setActiveIndex(index+1)
      contentRef.scrollToIndex({animated:true,index:index+1})
  }
  return (
    <View style={{padding: 20}}>
    <ProgressBar 
    contentLength={content?.length}
    contentIndex={activeIndex}
    />

      <FlatList
        data={content}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={(ref)=>{
          contentRef= ref
        }}
        renderItem={({ item, index }) => (
          <View style={{ width: Dimensions.get('window').width * 0.92 }}>
            <Text style={{
                fontFamily:'Outfit-Bold',fontSize: 20,marginTop: 15
            }}>{item.heading}</Text>
            <ContentItem 
            description={item?.description?.html}
            output={item?.output?.html}
            />
            <TouchableOpacity
              onPress={()=>onNextBtnPress(index)}
            >
              <Text style={{padding: 15, backgroundColor: Colors.PRIMARY,
              color: Colors.WHITE, borderRadius: 10, width:'90%',
              textAlign: 'center', fontFamily:'Outfit-Bold', fontSize: 17, marginTop: 5
              }}>

                {
                  content?.length>index+1?"Suivant":"Cours terminer"
                }
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}