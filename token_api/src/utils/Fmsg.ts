import { Response } from "express";

export function Fmsg(res: Response, msg = "", result: {}) {
    return res.status(200).json({con:true,msg,result})
}