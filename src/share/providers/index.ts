import { Providers } from "./providers"

export const instanceProviders =(useCase)=>{
    return new Providers(useCase)
 }