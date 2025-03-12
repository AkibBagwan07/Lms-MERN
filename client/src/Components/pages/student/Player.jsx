/* eslint-disable no-constant-condition */
import humanizeDuration from 'humanize-duration'
import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import Footer from '../../student/Footer'
import Rating from '../../student/Rating'
const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext)
  const {courseId} = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openDropDown, setOpenDropDown] = useState({})
  const [playerData, setPlayerData] = useState(null)

  const getCourseData = () => { 
    enrolledCourses.map((course) => {
      if (course._id === courseId)
         setCourseData(course)
    })
  }
  console.log(enrolledCourses)
   const toggleSection = ((idx) => {
    setOpenDropDown((prev) => ( 
      { 
        ...prev,
        [idx]: !prev[idx]
      }
    ))
  })

  useEffect(() => { 
    getCourseData()
  },[enrolledCourses])

  return (
    <>
    <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36' >
        {/* leftcolumn */}
        <div>
          <h2 className='text-xl font-semibold'>Course structure</h2>
          <div className='pt-5 '>
              {courseData &&  courseData.courseContent.map((chapter, idx) => (
                <div className=' border border-gray-300 bg-white mb-2 rounded ' key={idx}>
                  <div onClick={()=>toggleSection(idx)} className='cursor-pointer flex items-center justify-between px-4 py-3 cursoe-pointer select-none'>
                    <div className='flex items-center gap-2'>
                      <img className={ `transform transition-transform ${openDropDown[idx] ? 'rotate-180' : ''}`} src={assets.down_arrow_icon} alt="down-arrow" />
                      <p className=' font-medium md:text-base text-sm'>{ chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures - { calculateChapterTime(chapter)}</p>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openDropDown[idx] ? "max-h-96" : "max-h-0"}`}>
                    <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={idx} className='flex items-start gap-4 py-1'>
                          <img className='w-4 h-4 mt-1' src={false ? assets.blue_tick_icon : assets.play_icon} alt="play-button" />
                          <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                            <p>{ lecture.lectureTitle}</p>
                            <div className='flex gap-2 '>
                              {lecture.lectureUrl && <p onClick={() => setPlayerData({
                                ...lecture,chapter:idx + 1 , lecture : i+1
                              })} className='text-blue-500 cursor-pointer'>Watch</p>}
                              <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, {units : ["h", "m"]})}</p>
                          </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
          <div className='flex items-center gap-2 py-3 mt-10'>
            <h1 className='text-xl font-bold'>Rate this Course:</h1>
            <Rating initialRating={0} />
          </div>
        </div>
        {/* rightcolumn */}
        <div className='md:mt-10'>
          {playerData ? (
          <div className=''>
            <YouTube videoId={playerData.lectureUrl.split("/").pop()} iframeClassName='w-full aspect-video' />
            <div className='flex justify-between items-center mt-1'>
              <p>{playerData.chapter}.{playerData.lecture} { playerData.lectureTitle}</p>
                <button className='text-blue-600 '>{ false ? "Completed" : "Mark Complete"}</button>
            </div>
        </div>
        )
          :
       <img src={courseData ? courseData.courseThumbnail : ""} alt="" /> }
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Player
      