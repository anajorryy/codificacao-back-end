import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvidadosController } from './convidados.controller.js';
import { ConvidadosService } from './convidados.service.js';
import { LivrosController } from './livros.controller.js';
import { LivrosService } from './livros.service.js';
import { MediaController } from './media.controller.js'; // <-- Adicionar aqui

@Module({
  imports: [],
  controllers: [
    AppController,
    ConvidadosController,
    LivrosController,
    MediaController, // <-- Registar aqui
  ],
  providers: [
    AppService,
    ConvidadosService,
    LivrosService,
  ],
})
export class AppModule {}