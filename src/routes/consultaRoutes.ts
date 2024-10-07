import { Router } from 'express';
import { crearConsulta, obtenerConsultas } from '../controllers/consultaController';

const router = Router();

router.post('/', crearConsulta);
router.get('/', obtenerConsultas);


export default router;
