import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCourseList } from '../Services';
import SubHeading from './HomeScreen/SubHeading';
import Colors from '../Utils/Colors';
import { useFonts, Outfit_400Regular, Outfit_700Bold, Outfit_600Semi } from '@expo-google-fonts/outfit';
import CourseItem from './HomeScreen/CourseItem';
import { useNavigation } from '@react-navigation/native';

export default function CourseList(props) {
  const { level } = props;
  const [courseList, setCourseList] = useState([]);
  
  const navigation = useNavigation();
  useEffect(() => {
    getCourses();
  }, [level]);

  const getCourses = () => {
    getCourseList(level).then((resp) => {
      console.log('RESP-', resp);
      setCourseList(resp?.courses);
    });
  };

  const [fontsLoaded] = useFonts({
    'Outfit-Regular': Outfit_400Regular,
    'Outfit-Bold': Outfit_700Bold,
    'Outfit-Semi': Outfit_600Semi,
  });

  return (
    <View>
      <SubHeading text={level + ' Cours'} color={level === 'basic' && Colors.WHITE} />
      <FlatList
        data={courseList}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>( 
          <TouchableOpacity onPress={()=>navigation.navigate('Detail-cour',{
              course:item
          })}>
             <CourseItem item={item} />
          </TouchableOpacity>
        )
        }
      />
    </View>
  );
}
