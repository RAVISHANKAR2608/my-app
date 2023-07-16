import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student/student.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
    MongooseModule.forRoot(
      'mongodb+srv://ravisaravanan2608:qHT9DGHkbgkbvdUc@cluster0.fol9n8j.mongodb.net/NestJS',
    ),
    StudentModule,
  ],
})
export class AppModule {}
