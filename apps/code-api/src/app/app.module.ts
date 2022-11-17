import { Module } from '@nestjs/common'
import { UserModule } from './shared/user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'doni-db',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      migrations: ['./src/migration/**/*.ts'],
      subscribers: ['./src/subscriber/**/*.ts'],
      autoLoadEntities: true,
      synchronize: true,
      logging: false,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
