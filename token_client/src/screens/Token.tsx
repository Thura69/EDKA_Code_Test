import React, { useRef, useState } from 'react'
import Confetti from 'react-confetti'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom'



function Token() {
    const { token } = useParams();
    const [value,setValue] = useState(token);
    const inputRef = useRef<any>(null);
    const navigation = useNavigate();


    const handleClick = ()=>{
        if (inputRef.current) {
            inputRef.current.select();
            document.execCommand('copy');
            toast.success('Copied!',{
                position:'bottom-right'
              })
          }


    }

  return (
   <>
   <Confetti
      recycle={false}
      width={window.innerWidth}
      height={window.innerHeight}
    />
    <div className='bg-gradient-to-r from-blue-500 to-purple-500 h-[100svh] flex items-center justify-center'>
    <Card className='w-[400px]'>
  <CardHeader>
    <CardTitle className='text-3xl  '><span className='font-bold  text-blue-500'>Generate Token Form</span></CardTitle>
    <CardDescription >Congratulations you got a unique token 🎉!</CardDescription>
  </CardHeader>
  <CardContent>
  <div className=' space-y-3'>
  <Input ref={inputRef} value={value} readOnly/>
  <div className='flex gap-2'>
  
  <Button onClick={()=>{
navigation('/')
  }} variant={'default'} color='#005b96'>Again</Button>
  <Button onClick={handleClick} variant={'outline'} color='#005b96'>Copy</Button>
  </div>
  </div>
  </CardContent>
  <CardFooter  className='flex items-center justify-center'>
    <p className='text-center text-sm text-gray-500'> Your security is our priority.</p>
  </CardFooter>
</Card> 
    </div>
    <ToastContainer/>
   </>
  )
}

export default Token