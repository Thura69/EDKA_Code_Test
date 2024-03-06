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
  

function Submit() {
  return (
<div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[100svh] flex items-center justify-center'>
    
<Card className='w-[400px]'>
  <CardHeader>
    <CardTitle className='text-3xl  '><span className='font-bold  text-blue-500'>Generate Token Form</span></CardTitle>
    <CardDescription >Be uniqued by submiting!</CardDescription>
  </CardHeader>
  <CardContent>
   <SubmitForm/>
  </CardContent>
  <CardFooter  className='flex items-center justify-center'>
    <p className='text-center text-sm text-gray-500'> Your security is our priority.</p>
  </CardFooter>
</Card>
  </div>
  )
}

export default Submit