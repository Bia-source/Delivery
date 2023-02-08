import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "dotenv/config";
import cors from 'cors';
import helmet from "helmet";
import rateLimit from 'express-rate-limit';
import MongoStore from 'rate-limit-mongo';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { routes } from './index.routes';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/schemas';
import { resolvers } from './graphql/resolvers';

const app = express();
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    formatError: (error) => {
          return {
            name: `${error.name}`,
            message: `${error.message}`
          };
        }
});

app.use(express.json());
app.use(cors());
app.use(helmet({
    referrerPolicy: {
        policy: "no-referrer"
    },
    permittedCrossDomainPolicies: {
        permittedPolicies: "none"
    }
}));

// app.use(rateLimit({
//     store: (process.env.NODE_ENVIRONMENT === 'production') ? new MongoStore({
//        uri: `mongodb+srv://<${process.env.MONGO_USER}>:<${process.env.MONGO_USER}>@delivery.kf63v.mongodb.net/?retryWrites=true&w=majority`,
//        user: process.env.MONGO_USER,
//        password: process.env.MONGO_KEY,
//        expireTimeMs: 15 * 60 * 1000,
//        errorHandler: console.error.bind(null, 'rate-limit-mongo')
//     }) : null,
//     windowMs: 15 * 60 * 1000,
//     max: 7,
//     standardHeaders: true,
//     legacyHeaders: false,
//     message: 'Too many accounts created from this IP, please try again after an hour',
// }))

app.use("/delivery-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            message: err.message
        });
    }
    next();
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
    
})
server.listen().then(({url}:{url: string})=> {
    console.log(`Server apollo ${url}`);
})
app.listen(2023, () => console.log("Server is running"));

