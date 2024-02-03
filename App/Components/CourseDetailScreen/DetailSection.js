import { View, Text, Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import OptionItem from './OptionItem';
import { Feather, Entypo } from '@expo/vector-icons';
import ChapterSection from './ChapterSection';


export default function DetailSection({ course,enrollCourse,userEnrolledCourse}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={{ padding: 10, borderRadius: 15, backgroundColor: Colors.WHITE }}>
        <Image
          source={{ uri: course?.assets?.url }}
          style={{
            width: Dimensions.get('screen').width * 0.80,
            height: 190,
            borderRadius: 15,
          }}
        />
        <Text style={{ fontSize: 22, fontFamily: 'Outfit-Semi', marginTop: 10 }}>{course.name}</Text>
        <View style={{ padding: 10 }}>
          <View>
            <View style={styles.rowStyle}>
              <OptionItem icon={'book-outline'} value={course.chapters?.length + ' Chapitres'} />
              <OptionItem icon={'md-time'} value={course.time} />
            </View>
            <View style={styles.rowStyle}>
              <OptionItem icon={'cellular-outline'} value={course.level} />
              <OptionItem icon={'pricetags'} value={course.price + ' Fcfa'} />
            </View>
            <View>
              <Text style={{ fontFamily: 'Outfit-Regular', fontSize: 20 }}>Description</Text>
              <Text style={{ fontFamily: 'Outfit-Bold', color: Colors.GRAY }}>{course.description?.markdown}</Text>
            </View>
          </View>
          <View style={{display:'flex',flexDirection:'row', gap: 10, justifyContent: 'center'}}>
            {userEnrolledCourse?.length==0?
              <TouchableOpacity style={{padding: 15, backgroundColor: Colors.PRIMARY,
              borderRadius: 15,
              }}
              onPress={()=>enrollCourse()}
              >
                <Text style={{fontFamily:'Outfit-Regular', color: Colors.WHITE,
                textAlign: 'center', fontSize: 17,
              }}>Obtiens gratuit...</Text>
              </TouchableOpacity>:null}
              <TouchableOpacity style={{padding: 15, backgroundColor: "#aee",
              borderRadius: 15
              }}>
                <Text style={{fontFamily:'Outfit-Regular', color: "blue",
                textAlign: 'center', fontSize: 17, 
              }}>S'abonner </Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 0, marginBottom: 20}}>
            <ChapterSection chapterList={course.chapters}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
