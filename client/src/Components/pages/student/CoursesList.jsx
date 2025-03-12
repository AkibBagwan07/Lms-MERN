import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router'
import SearchBar from '../../student/SearchBar'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../student/CourseCard'
import { assets } from '../../../assets/assets'
import Footer from '../../student/Footer'

const CoursesList = () => {
  const navigate = useNavigate()
  const { input} = useParams()
  const { allCourses } = useContext(AppContext)
  const [filteredCourse, setFilterCourse] = useState([])
  // console.log(input)
  useEffect(() => { 
    if (allCourses && allCourses.length > 0) { 
      const tempraryCourses = allCourses.slice()
     
      input ?
        setFilterCourse(
          tempraryCourses.filter(
            item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        )
        : setFilterCourse(tempraryCourses)        
    }
  },[allCourses,input])

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
          <h1 className='text-4xl font-semibold text-gray-600'>Course list</h1>
          <p className='text-gray-500'><span className='text-blue-600 cursor-pointer'
              onClick={() => navigate("/")}>Home / </span><span>Course list </span> </p>
          </div>
          <SearchBar data={input } />
        </div>
        { 
          input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8-mb-8 text-gray-600'>
            <p>{input}</p>
            <img src={ assets.cross_icon} className='cursor-pointer' onClick={()=>navigate("/course-list")} alt="cross-icon" />
          </div>
        }
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {filteredCourse.map((course,idx) => <CourseCard key={idx }  course={course}/>)}
        </div>
      </div>
      <Footer/>
   </>
  )
}

export default CoursesList