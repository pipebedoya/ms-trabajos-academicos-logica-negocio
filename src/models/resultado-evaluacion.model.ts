import {Entity, model, property} from '@loopback/repository';

@model({settings: {
      foreignKeys: {
          fk_res_eva_id_evaluacionsolicitud: {
          name: 'fk_res_eva_id_evaluacionsolicitud',
          entity: 'EvaluaSolicitud',
          entityKey: 'id',
          foreignKey: 'id_evaluacionsolicitud'
          },
           fk_res_eva_id_estado: {
          name: 'fk_res_eva_id_estado',
          entity: 'Estado',
          entityKey: 'id',
          foreignKey: 'id_estado'
          },
        },
      },
   })
export class ResultadoEvaluacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  resultado: boolean;

  @property({
    type: 'string',
    required: true,
  })
  formato_diligenciado: string;

  @property({
    type: 'number',
  })
  id_estado?: number;

  @property({
    type: 'number',
  })
  id_evaluacionsolicitud?: number;

  constructor(data?: Partial<ResultadoEvaluacion>) {
    super(data);
  }
}

export interface ResultadoEvaluacionRelations {
  // describe navigational properties here
}

export type ResultadoEvaluacionWithRelations = ResultadoEvaluacion & ResultadoEvaluacionRelations;
