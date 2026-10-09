import { CreateConvidadoDto } from './dto/create-convidado.dto';
export declare class ConvidadosController {
    listarTodos(): string[];
    criar(createConvidadoDto: CreateConvidadoDto): {
        mensagem: string;
        dados: CreateConvidadoDto;
    };
}
