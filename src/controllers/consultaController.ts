import { Request, Response } from 'express';

let consultas: any[] = [];
let mascotas: any[] = []; 

export const crearConsulta = (req: Request, res: Response) => {
  const { idMascota, fecha, detalles } = req.body;

  if (!idMascota || !fecha || !detalles) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const mascotaExistente = mascotas.find(m => m.id === idMascota);
  if (!mascotaExistente) {
    return res.status(404).json({ error: 'Mascota no encontrada' });
  }

  const nuevaConsulta = {
    id: consultas.length + 1,
    idMascota,
    fecha,
    detalles,
  };

  consultas.push(nuevaConsulta);

  return res.status(201).json(nuevaConsulta);
};

export const obtenerConsultas = (req: Request, res: Response) => {
  return res.json(consultas); 
};
