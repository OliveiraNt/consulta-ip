const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const header = req.header('x-forwarded-for');
  const remoteAddress = req.connection.remoteAddress;
  console.log(`header: ${header}`);
  console.log(`remoteAddress: ${remoteAddress}`);
  const ip = header || remoteAddress;
  console.log(`IP: ${ip}`);
  res.send({ip});
});

app.listen(process.env.PORT || 8080, () => console.log('consulta-ip executando na porta 8080 \n\n'));
