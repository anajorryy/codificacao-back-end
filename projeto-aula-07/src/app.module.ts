import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvidadosController } from './convidados.controller.js';
import { ConvidadosService } from './convidados.service.js';
import { LivrosController } from './livros.controller.js';
import { LivrosService } from './livros.service.js';

@Module({
  imports: [],
  controllers: [
    AppController, 
    ConvidadosController, 
    LivrosController // <-- Adiciona aqui
  ],
  providers: [
    AppService, 
    ConvidadosService, 
    LivrosService // <-- Adiciona aqui
  ],
})
export class AppModule {}