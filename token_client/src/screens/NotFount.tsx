import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
import SubmitForm from '../components/form/SubmitForm'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
  

function notFount() {
  return (
<div className='bg-gradient-to-r from-red-500 to-pink-500 h-[100svh] flex items-center justify-center'>
    
<Card className='w-[400px]'>
  <CardHeader>
    <CardTitle className='text-3xl  '><span className='font-bold  text-blue-500'>Generate Token Form</span></CardTitle>
    <CardDescription >Page not found!</CardDescription>
  </CardHeader>
  <CardContent>
        <Link to={'/'}>
            <Button className='w-full' variant={'outline'}>Submit</Button>
        </Link>
  </CardContent>
  <CardFooter  className='flex items-center justify-center'>
    <p className='text-center text-sm text-gray-500'>Back to submit</p>
  </CardFooter>
</Card>
  </div>
  )
}

export default notFount