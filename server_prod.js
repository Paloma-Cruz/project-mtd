import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import helmet from 'helmet';

// Criar instância do Express
const app = express();
const port = process.env.PORT || 3000;

// Obter o caminho absoluto para o diretório atual (necessário quando usamos módulos ES)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adicionar compressão
app.use(compression());

// Adicionar cabeçalhos de segurança
app.use(helmet());

// Servir os ficheiros estáticos da pasta "dist" com cache
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1m',
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor a correr na porta ${port}`);
});
