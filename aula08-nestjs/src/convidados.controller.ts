// src/convidados.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateConvidadoDto } from './dto/create-convidado.dto';

@Controller('convidados')
export class ConvidadosController {

  // Rota GET /convidados -> Retorna lista de nomes (Status 200)
  @Get()
  listarTodos() {
    return ['Ana', 'Bruno', 'Carlos'];
  }

  // Rota POST /convidados -> Recebe os dados via @Body() (Status 201)
  @Post()
  criar(@Body() createConvidadoDto: CreateConvidadoDto) {
    // Exibe no console/terminal
    console.log(`[PORTEIRO DIGITAL] Novo convidado recebido: ${createConvidadoDto.nome}`);

    return {
      mensagem: `Convidado ${createConvidadoDto.nome} adicionado com sucesso!`,
      dados: createConvidadoDto,
    };
  }
}