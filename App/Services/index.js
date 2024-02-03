import {request , gql } from 'graphql-request';


const MASTER_URL="Ici l'api key de la base de donné hygrph";

export const getCourseList= async(level)=>{ //(where : {level: Advance})
    const query=gql`
    query CourseList {
      courses (where: { level: ${level} }){
        createdAt
    id
    name
    price
    level
    description {
      markdown
    }
    tags
    time
    author
    assets {
      url
    }
    chapters {
      title 
      id
      content{
        heading
        description {
          markdown
          html
        }
        output {
          markdown
          html
        }
      }
    }
       
      }
    }
    `
    const result= await request(MASTER_URL,query);
    return result;
}

export const enrollCourse=async(courseId,userEmail)=>{
  const mutationQuery= gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: {courseId: "`+courseId+`",
       userEmail: "`+userEmail+`",
        course: {connect: {id: "`+courseId+`"}}}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  
  `
  const result= await request(MASTER_URL,mutationQuery);
    return result;
} 


export const getUserEnrolledCourse=async(courseId, userEmail)=>{
    const query= gql `
    query GetUserEnrolledCourse {
      userEnrolledCourses(
        where: {courseId: "`+courseId+`", userEmail: "`+userEmail+`"}
      ) {
        id
        courseId
        completedChapter {
          chapterId
        }
      }
    }    
    `
    const result= await request(MASTER_URL,query);
    return result;
}

export const MarkchapterCompleted= async(chapterId,recordId)=>{
      const mutationQuery= gql`
      mutation markChapterCompleted {
        updateUserEnrolledCourse(
          data: {completedChapter: {create: {data: {chapterId: "`+chapterId+`"}}}}
          where: {id: "`+recordId+`"}
        ) {
          id
        }
        publishManyCoursesConnection {
          edges {
            node {
              id
            }
          }
        }
      }      
      ` 
      const result= await request(MASTER_URL,mutationQuery);
    return result
}