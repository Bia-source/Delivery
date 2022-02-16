
export enum Type_User{
    CLIENT= "CLIENT",
    DELIVERYMAN= "DELIVERYMAN"
}

export enum MessageNewUser{
    CLIENT_USER = "seja muito bem vindo(a) a bordo🚀 usuário criado com sucesso! Faça agora seu primeiro pedido🔥",
    DELIVERYMAN_USER = "seja muito bem vindo(a) a bordo🚀 deliveryman cadastrado com sucesso! Faça agora sua primeira entrega🔥"
}

export enum TitleNewUser{
    CLIENT_USER = "Cadastro de cliente",
    DELIVERYMAN_USER = "Cadastro de deliveryman"
}

export enum MessageStatusDelivery {
    ARGUARDANDO = "Seu pedido foi criado e está aguardando um entregador!",
    TRANSITO = "Seu pedido está a caminho, fique atento!",
    ENTREGUE = "Seu pedido foi entregue com sucesso!",
}

export enum TitleStatusDelivery {
    STATUS = "Status do meu pedido",
}