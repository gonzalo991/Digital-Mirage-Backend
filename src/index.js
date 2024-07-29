import app from './app';
import 'dotenv/config';
import config from './config';

const port = config.PORT;
const host = config.HOST;

app.listen(port, host , () => {
  console.log(`App listening on port: ${host} : ${port}`);
});