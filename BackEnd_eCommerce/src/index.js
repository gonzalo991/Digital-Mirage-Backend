import app from './app';

// Cambiar el puerto de 8080 a 3055
const port = 3055;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
