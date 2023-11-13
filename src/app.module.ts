import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://minhcuong:afUIB1SnE78i6OBq@cluster0.rgwdogs.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
