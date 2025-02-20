import Link from 'next/link'
import React from 'react'
import { BiUser } from 'react-icons/bi'

const User = () => {
  return (
    <Link href='/register'>
      <BiUser className='w-5 h-5'/>
    </Link>
  )
}

export default User