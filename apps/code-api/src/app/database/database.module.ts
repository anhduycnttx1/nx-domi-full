
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: "doni-db",
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      // synchronize: true,
    }),
  ]
})
export class DatabaseModule {}
