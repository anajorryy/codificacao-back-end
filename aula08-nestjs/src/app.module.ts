// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConvidadosController } from './convidados.controller';

@Module({
  imports: [],
  controllers: [ConvidadosController],
  providers: [],
})
export class AppModule {}