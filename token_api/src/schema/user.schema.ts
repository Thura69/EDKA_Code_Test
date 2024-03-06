import { number, object, string } from 'zod'

export const UserSchema = object({
    body: object({
    username:string({required_error:"User name is required"}),
    email:string({required_error:"Email is required"}).email("Email should be valid"),
    phoneNumber:string({required_error:"Phone Number is required"}),
    companyName:string({required_error:"Company Name is required"})
    })
});


