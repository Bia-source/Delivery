import * as nodemailer from "nodemailer";
import "dotenv/config";

interface IRequestSendEmail{
    email: string, 
    username: string;
    type_user: string;
}

enum Type_User{
    CLIENT= "CLIENT",
    DELIVERYMAN= "DELIVERYMAN"
}

enum MessageNewUser{
    CLIENT_USER = "seja muito bem vindo(a) a bordo🚀 usuário criado com sucesso! Faça agora seu primeiro pedido🔥",
    DELIVERYMAN_USER = "seja muito bem vindo(a) a bordo🚀 deliveryman cadastrado com sucesso! Faça agora sua primeira entrega🔥"
}

function messageType(type: string){
  if(type === Type_User.CLIENT){ return MessageNewUser.CLIENT_USER }
  if(type === Type_User.DELIVERYMAN){ return MessageNewUser.DELIVERYMAN_USER }
}

export async function sendMail({ email, username, type_user}:IRequestSendEmail){
    const transporter = nodemailer.createTransport({
           host: process.env.HOST_EMAIL.toString(),
           port: parseInt(process.env.PORT_EMAIL),
           secure: false,
           auth: {
               user: process.env.USER_EMAIL.toString(),
               pass: process.env.PASSWORD_EMAIL.toString()
           },
           tls: {
               rejectUnauthorized: false
           }
       });

       const send = await transporter.sendMail({
           text: `${username}, ${messageType(type_user)}`,
           subject: "Cadastro no Delivery",
           from: `Administração DL <${process.env.USER_EMAIL}>`,
           to: [`${email}`]
       });
       return send;
}

