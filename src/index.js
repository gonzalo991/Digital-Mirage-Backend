import app from './app';
import config from './config';

// Cambiar el puerto de 8080 a 3055
const port = config.PORT;
const host = config.HOST;

app.listen(port, host, () => {
  console.log(`App listening on port: ${host}:${port}`);
});