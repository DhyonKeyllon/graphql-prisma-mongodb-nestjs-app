import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './posts/posts.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    PostModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.gql'],
    }),
  ],
})
export class AppModule {}
