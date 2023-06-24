import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-orange-600 justify-between flex px-10 py-3 text-white'>
        <h1><Link href="/">News7</Link></h1>

        <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
            <Link href="/insert">Insert Post</Link>
        </div>
    </div>
  )
}

export default Header