import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Configurar EJS como el motor de vistas
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Rutas
import homeRouter from './routers/home';
app.use('/', homeRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});