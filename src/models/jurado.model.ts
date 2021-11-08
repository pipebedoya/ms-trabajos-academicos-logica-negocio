import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {UsuarioJurado} from './usuario-jurado.model';
import {Solicitud} from './solicitud.model';
import {EvaluaSolicitud} from './evalua-solicitud.model';

@model()
export class Jurado extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  entidad: string;

  @hasOne(() => UsuarioJurado, {keyTo: 'id_jurado'})
  tiene: UsuarioJurado;

  @hasMany(() => Solicitud, {through: {model: () => EvaluaSolicitud, keyFrom: 'id_jurado', keyTo: 'id_solicitud'}})
  solicitudes: Solicitud[];

  constructor(data?: Partial<Jurado>) {
    super(data);
  }
}

export interface JuradoRelations {
  // describe navigational properties here
}

export type JuradoWithRelations = Jurado & JuradoRelations;
