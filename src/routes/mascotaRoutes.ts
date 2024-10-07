import { Router } from 'express';
import { crearMascota, obtenerMascotas } from '../controllers/mascotaController';

const router = Router();

router.post('/', crearMascota);
router.get('/', obtenerMascotas);


export default router;
