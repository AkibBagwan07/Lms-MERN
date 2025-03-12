import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../../assets/assets'
import Loading from '../../student/Loading'
const StudentsEnrolled = () => {
  
  const [studentsEnrolled, setStudentsEnrolled] = useState(null)
  
  const fetchEnrolledStudents = async () => { 
    setStudentsEnrolled(dummyStudentEnrolled)
  }

  useEffect(() => { 
    fetchEnrolledStudents()
  },[])
  
  return studentsEnrolled ? (
    <div className='min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray500/20'>
        <table className='table-fixed md:table-auto w-full overflow-hidden pb-4'>
          <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
            <tr>
              <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
              <th className='px-4 py-3 font-semibold'>Student Name</th>
              <th className='px-4 py-3 font-semibold'>Course Title</th>
              <th className='px-4 py-3 font-semibold hidden sm:table-cell'>Date</th>
            </tr>
          </thead>
          <tbody className='text-sm text-gray-500'>
            {studentsEnrolled.map((student, idx) => (
              <tr key={idx} className='border-b border-gray-500/20'>
                <td className='px-4 py-3 text-center hidden sm:table-cell'>{idx + 1}</td>
                <td className='md:px-4 px-2 py-4 flex items-center space-x-3'>
                  <img src={student.student.imageUrl} className='w-9 h-9 rounded-full' alt="image" />
                  <span>{ student.student.name}</span>
                </td>
                <td className='px-4 py-3 truncate'>{student.courseTitle}</td>
                <td className='px-4 py-3 hidden sm:table-cell'>{ new Date(student.purchaseDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : <Loading/>
}

export default StudentsEnrolled 