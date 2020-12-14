import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import Video from "./Video";
import VideoSchema from '../../model/VideoSchema'

@InputType()
class VideoInput{
    @Field()
    description: String

    @Field()
    name: String

    @Field()
    category: String

    @Field()
    _id: String
}

@Resolver(Video)
class VideoResolver {
    
    @Query(() => [Video])
    async videos() {
        const videos = await VideoSchema.find()
        return videos
    }

    @Mutation(() => Video)
    async createVideo(@Arg("videoInput") videoInput: VideoInput) {
        const video = await VideoSchema.create(videoInput)
        return video
    }
}

export default VideoResolver