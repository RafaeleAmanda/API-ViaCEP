const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/buscar-endereco')) {
    const query = url.parse(req.url, true).query;
    const cep = query.cep;

    if (!cep) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'CEP não fornecido na consulta.' }));
      return;
    }

    const options = {
      hostname: 'viacep.com.br',
      port: 80,
      path: `/ws/${cep}/json/`,
      method: 'GET',
    };

    const httpRequest = http.request(options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const cepInfo = JSON.parse(data);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(cepInfo));
        } catch (error) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Erro na consulta de CEP.' }));
        }
      });
    });

    httpRequest.on('error', (error) => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro na requisição de CEP.' }));
    });

    httpRequest.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Rota não encontrada.' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor em execução em http://localhost:${PORT}`);
});
