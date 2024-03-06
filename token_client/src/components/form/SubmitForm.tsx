import React, { useTransition } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Link, useNavigate } from 'react-router-dom';
import api from '../../instance/axios';

const formSchema = z.object({
    username: z.string({required_error:"User name is required"}).min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email:z.string({required_error:"Email is required"}).email({
        message:"Email should be valid"
    }),
    phoneNumber:z.string({required_error:"Phone number is required"}).min(5,{
        message:"Phone number must be at least 5 characters"
    }),
    companyName:z.string({required_error:"Company name is required"})
  })

function SubmitForm() {

  const [isPending, startTransition] = useTransition()
  const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      });

      function onSubmit(values: z.infer<typeof formSchema>) {
        startTransition(()=>{

         

          const post = async()=>{
          try{
            const response = await api.post('/submit',values);
            toast.success('Submit success!',{
              position:'bottom-right'
            })
            navigate(`/token/${response.data.result.token}`)
          }catch(e:any){
            toast.error(`${e.response.data.msg}`,{
              position:'bottom-right'
            })
          }
           
          }

          post();
          
          

          

          
  
        })
       
      }

  return (
   <>
   
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}  className=' space-y-8'>
       <div className=' space-y-4'>
       <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="User Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Company Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       </div>
        <Button disabled={isPending} type="submit" className='w-full '>Submit</Button>
      </form>

    </Form>
    <ToastContainer />
   </>
  )
}

export default SubmitForm