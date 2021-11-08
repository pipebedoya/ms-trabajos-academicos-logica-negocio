import {Entity, model, property, hasOne} from '@loopback/repository';
import {Solicitud} from './solicitud.model';
import {EvaluaSolicitud} from './evalua-solicitud.model';
import {ResultadoEvaluacion} from './resultado-evaluacion.model';

@model()
export class Estado extends Entity {
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

  @hasOne(() => Solicitud, {keyTo: 'id_estado'})
  solicitud: Solicitud;

  @hasOne(() => EvaluaSolicitud, {keyTo: 'id_estado'})
  evaluaSolicitud: EvaluaSolicitud;

  @hasOne(() => ResultadoEvaluacion, {keyTo: 'id_estado'})
  resultadoEvaluacion: ResultadoEvaluacion;

  constructor(data?: Partial<Estado>) {
    super(data);
  }
}

export interface EstadoRelations {
  // describe navigational properties here
}

export type EstadoWithRelations = Estado & EstadoRelations;
