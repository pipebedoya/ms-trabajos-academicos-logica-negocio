import {Entity, model, property, hasOne} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class Modalidad extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @hasOne(() => Solicitud, {keyTo: 'id_modalidad'})
  solicitud: Solicitud;

  constructor(data?: Partial<Modalidad>) {
    super(data);
  }
}

export interface ModalidadRelations {
  // describe navigational properties here
}

export type ModalidadWithRelations = Modalidad & ModalidadRelations;
