import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import {MongooseModule} from "@nestjs/mongoose";
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [AuthModule, UsersModule, ClientsModule, MongooseModule.forRoot('mongodb://localhost/nest'), CatsModule, OwnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
