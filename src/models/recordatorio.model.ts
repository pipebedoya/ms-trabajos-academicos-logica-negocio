import {Entity, model, property} from '@loopback/repository';

@model({settings: {
      foreignKeys: {
          fk_rec_id_solicitud: {
          name: 'fk_rec_id_solicitud',
          entity: 'Solicitud',
          entityKey: 'id',
          foreignKey: 'id_solicitud'
          }
        },
      },
   })
export class Recordatorio extends Entity {
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
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  resumen: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
  })
  id_solicitud?: number;

  constructor(data?: Partial<Recordatorio>) {
    super(data);
  }
}

export interface RecordatorioRelations {
  // describe navigational properties here
}

export type RecordatorioWithRelations = Recordatorio & RecordatorioRelations;
