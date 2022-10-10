import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraceableTaskEntity } from '../personal-task/traceable-task.entity';
import { PersonalTaskModule } from '../personal-task/personal-task.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './storage.db',
      synchronize: true,
      logging: true,
      entities: [TraceableTaskEntity],
    }),
    PersonalTaskModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'apps', 'demo'),
      exclude: ['/api*'],
      renderPath: '/'
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
