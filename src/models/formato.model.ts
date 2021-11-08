import {Entity, model, property, hasOne} from '@loopback/repository';
import {TipoSolicitud} from './tipo-solicitud.model';

@model()
export class Formato extends Entity {
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

  @hasOne(() => TipoSolicitud, {keyTo: 'id_formato'})
  tipoSolicitud: TipoSolicitud;

  constructor(data?: Partial<Formato>) {
    super(data);
  }
}

export interface FormatoRelations {
  // describe navigational properties here
}

export type FormatoWithRelations = Formato & FormatoRelations;
