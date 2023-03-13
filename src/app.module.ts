import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { SidequestsModule } from './sidequests/sidequests.module';
import configuration from './conf/configuration';
import { TokenIntercepor } from './shared/tokenInterceptor';
import { TokenModule } from './shared/token.module';

@Module({  
  imports: [MongooseModule.forRoot(configuration.databaseConnection), UsersModule, SidequestsModule, TokenModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenIntercepor).forRoutes("*")
  }
}