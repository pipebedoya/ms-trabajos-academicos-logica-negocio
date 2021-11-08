import {Entity, model, property, hasOne} from '@loopback/repository';
import {ResultadoEvaluacion} from './resultado-evaluacion.model';

@model({settings: {
      foreignKeys: {
          fk_eva_sol_id_jurado: {
          name: 'fk_eva_sol_id_jurado',
          entity: 'Jurado',
          entityKey: 'id',
          foreignKey: 'id_jurado'
          },
           fk_eva_sol_id_solicitud: {
          name: 'fk_eva_sol_id_solicitud',
          entity: 'Solicitud',
          entityKey: 'id',
          foreignKey: 'id_solicitud'
          },
          fk_eva_sol_id_estado: {
            name: 'fk_eva_sol_id_estado',
            entity: 'Estado',
            entityKey: 'id',
            foreignKey: 'id_estado'
            },
        },
      },
   })
export class EvaluaSolicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha_invitacion: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_respuesta: string;

  @property({
    type: 'boolean',
    required: true,
  })
  respuesta: boolean;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;

  @property({
    type: 'number',
  })
  id_jurado?: number;

  @property({
    type: 'number',
  })
  id_solicitud?: number;

  @property({
    type: 'number',
  })
  id_estado?: number;

  @hasOne(() => ResultadoEvaluacion, {keyTo: 'id_evaluacionsolicitud'})
  resultadoEvaluacion: ResultadoEvaluacion;

  constructor(data?: Partial<EvaluaSolicitud>) {
    super(data);
  }
}

export interface EvaluaSolicitudRelations {
  // describe navigational properties here
}

export type EvaluaSolicitudWithRelations = EvaluaSolicitud & EvaluaSolicitudRelations;
