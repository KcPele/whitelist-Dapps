import Link from 'next/link'
import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
export default function NotFound() {
    const router = useRouter()
    useEffect(() => {
       
        setTimeout(() => {
            // router.go()
            router.push('/')
        }, 3000)
    }, [])
  return (
    <div className='container text-center'>
        <p className='lead'>Ooooops...</p>
        <p>There is nothing here</p>
        <Link href={"/"}>
        <a className='btn btn-primary btn-lg'>Home page</a>
        </Link>
        </div>
  )
}
