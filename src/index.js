const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  res.send(ip);
});

app.listen(process.env.PORT || 8080, () => console.log('consulta-ip executando na porta 8080 \n\n'));
