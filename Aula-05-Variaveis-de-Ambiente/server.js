import express from 'express';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const AMBIENTE = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API rodando com variáveis de ambiente!',
    ambiente: AMBIENTE,
    chaveSecretaCarregada: !!process.env.API_SECRET_KEY
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em modo [${AMBIENTE}] na porta ${PORT}`);
});