import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_com_sol_id_solicitud: {
        name: 'fk_com_sol_id_solicitud',
        entity: 'Solicitud',
        entityKey: 'id',
        foreignKey: 'id_solicitud'
      },
      fk_com_sol_id_tipocomite: {
        name: 'fk_com_sol_id_tipocomite',
        entity: 'TipoComite',
        entityKey: 'id',
        foreignKey: 'id_tipocomite'
      },
    },
  },
})
export class ComiteXSolicitud extends Entity {
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
  respuesta: boolean;

  @property({
    type: 'number',
  })
  id_solicitud?: number;

  @property({
    type: 'number',
  })
  id_tipocomite?: number;

  constructor(data?: Partial<ComiteXSolicitud>) {
    super(data);
  }
}

export interface ComiteXSolicitudRelations {
  // describe navigational properties here
}

export type ComiteXSolicitudWithRelations = ComiteXSolicitud & ComiteXSolicitudRelations;
