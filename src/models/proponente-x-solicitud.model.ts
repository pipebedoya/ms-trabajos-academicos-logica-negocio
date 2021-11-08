import {Entity, model, property} from '@loopback/repository';

@model({settings: {
      foreignKeys: {
          fk_pro_sol_id_solicitud: {
          name: 'fk_pro_sol_id_solicitud',
          entity: 'Solicitud',
          entityKey: 'id',
          foreignKey: 'id_solicitud'
          },
          fk_pro_sol_id_proponente: {
          name: 'fk_pro_sol_id_proponente',
          entity: 'Proponente',
          entityKey: 'id',
          foreignKey: 'id_proponente'
          },
        },
      },
   })
export class ProponenteXSolicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  id_solicitud?: number;

  @property({
    type: 'number',
  })
  id_proponente?: number;

  constructor(data?: Partial<ProponenteXSolicitud>) {
    super(data);
  }
}

export interface ProponenteXSolicitudRelations {
  // describe navigational properties here
}

export type ProponenteXSolicitudWithRelations = ProponenteXSolicitud & ProponenteXSolicitudRelations;
