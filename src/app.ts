import express from 'express';
import mascotaRoutes from './routes/mascotaRoutes';
import consultaRoutes from './routes/consultaRoutes'
import { obtenerMascotas } from './controllers/mascotaController';
import { obtenerConsultas } from './controllers/consultaController';

const app = express();

app.use(express.json());

app.use('/api', mascotaRoutes);
app.use('/api', consultaRoutes);
app.use('/api', obtenerMascotas)
app.use('/api', obtenerConsultas)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
