import { Request, Response } from 'express';

let mascotas: any[] = [];


export const crearMascota = (req: Request, res: Response) => {
  const { nombre, especie, raza, edad } = req.body;

  if (!nombre || !especie || !raza || typeof edad !== 'number') {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const nuevaMascota = {
    id: mascotas.length + 1,
    nombre,
    especie,
    raza,
    edad,
  };

  mascotas.push(nuevaMascota);

  return res.status(201).json(nuevaMascota);
};


export const obtenerMascotas = (req: Request, res: Response) => {
  return res.json(mascotas);  
};
