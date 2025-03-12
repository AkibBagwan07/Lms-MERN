import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './Components/pages/student/Home'
import CoursesList from './Components/pages/student/CoursesList'
import CourseDetails from './Components/pages/student/CourseDetails'
import MyEnrollments from './Components/pages/student/MyEnrollments'
import Player from './Components/pages/student/Player'
import Loading from './Components/student/Loading'
import Educator from './Components/pages/educator/Educator'
import Dashboard from './Components/pages/educator/Dashboard'
import AddCourse from './Components/pages/educator/AddCourse'
import MyCourses from './Components/pages/educator/MyCourses'
import StudentsEnrolled from './Components/pages/educator/StudentsEnrolled'
import Navbar from './Components/student/Navbar'
import "quill/dist/quill.snow.css";

const App = () => {
      const isEducatorRoute = useMatch("/educator/*")
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />}
    <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />} >
        <Route path='/educator' element={<Dashboard />} />
        <Route path='add-course' element={<AddCourse />} />
        <Route path='my-course' element={ <MyCourses/>} />
        <Route path='my-enrolled-students' element={ <StudentsEnrolled/>} />
        </Route>
      </Routes>
      </div>
  )
}

export default App