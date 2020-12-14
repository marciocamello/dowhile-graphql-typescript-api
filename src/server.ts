import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import "reflect-metadata"
import CategoryResolver from "./graphql/category/CategoryResolver"
import VideoResolver from "./graphql/video/VideoResolver"
import "./utils/connection"

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [CategoryResolver, VideoResolver]
    })

    const server = new ApolloServer({schema})

    server.listen({
        port: 4100
    }, () => console.log("Running"))
}

bootstrap()
