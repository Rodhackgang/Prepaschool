import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import DetailScreen from '../Components/CourseDetailScreen/DetailSection';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';
import { enrollCourse, getUserEnrolledCourse } from '../Services';
import { useUser } from '@clerk/clerk-expo';
export default function CourseDetailScreen() {

  const navigate = useNavigation();
  const params = useRoute().params;

  const {user}= useUser();
  useEffect(() => {
    if (params) {
      console.log(params.course);
    }
    if(user&&params.course){
      GetUserEnrolledCourse();
    }
  }, [params.course,user]);
  

  const [userEnrolledCourse, setUserEnrolledCourse]= useState([]);

  const UserEnrollCourse = () => {
    if (user) {
      enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress)
        .then(resp => {
          console.log("Reponse console", resp);
          if (resp) {
            ToastAndroid.show('Le cours gratuit a été enregistré avec succès', ToastAndroid.LONG);
            GetUserEnrolledCourse(); // Appel de GetUserEnrolledCourse après l'enrôlement
          }
        })
        .catch(error => {
          console.error("Enroll Course Error:", error);
        });
    }
  };

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress)
      .then(resp => {
        console.log("Get User Enrolled Course Response:", resp);
        setUserEnrolledCourse(resp.userEnrolledCourses)
      })
      .catch(error => {
        console.error("Get User Enrolled Course Error:", error);
      });
  }


  return params.course && (
    <View style={{padding: 20}}>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <Ionicons name="ios-arrow-back-circle" size={30} color="black" />
      </TouchableOpacity> 
      <DetailSection course={params.course} 
        enrollCourse={() => UserEnrollCourse()}
        userEnrolledCourse={userEnrolledCourse}
      />
      <ChapterSection 
        chapterList={params.course.chapters}
        userEnrolledCourse={userEnrolledCourse}
      />
    </View>
  )
}