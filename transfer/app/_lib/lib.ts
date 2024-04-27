import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?:string;
  username?:string;
  streak?: number,
  score?: number,
  isLoggedIn:boolean
  friends?: string[],
  languages: { [key:string]: string};
}

export const defaultSession:SessionData = {
  isLoggedIn:false
}

export const sessionOptions: SessionOptions ={
  password: process.env.SECRET_KEY!,
  cookieName: "transfer-session",
  cookieOptions:{
    httpOnly:true,
    secure: process.env.NODE_ENV === "production"
  }
}