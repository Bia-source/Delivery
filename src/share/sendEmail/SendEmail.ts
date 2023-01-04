import * as nodemailer from "nodemailer";
import "dotenv/config";

interface IRequestSendEmail{
    email: string, 
    username: string;
    messageText: string;
    titleEmail: string;
}

export async function sendMail({ email, username, messageText, titleEmail}:IRequestSendEmail){
    const transporter = nodemailer.createTransport({
           host: process.env.HOST_EMAIL.toString(),
           port: parseInt(process.env.PORT_EMAIL),
           secure: false,
           auth: {
               user: process.env.USER_EMAIL.toString(),
               pass: process.env.PASSWORD_EMAIL.toString()
           },
           tls: {
               rejectUnauthorized: false,
               minVersion: "TLSv1.2"
           }
       });

       const send = await transporter.sendMail({
           text: `${username}, ${messageText}`,
           subject: `${titleEmail}`,
           from: `Administração DL <${process.env.USER_EMAIL}>`,
           to: [`${email}`]
       });
       return send;
}

