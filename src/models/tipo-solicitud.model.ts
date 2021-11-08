import {Entity, model, property, hasOne} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model({settings: {
      foreignKeys: {
          fk_tip_sol_id_formato: {
          name: 'fk_tip_sol_id_formato',
          entity: 'Formato',
          entityKey: 'id',
          foreignKey: 'id_formato'
          }
        },
      },
   })
export class TipoSolicitud extends Entity {
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
    type: 'number',
  })
  id_formato?: number;

  @hasOne(() => Solicitud, {keyTo: 'id_tiposolicitud'})
  solicitud: Solicitud;

  constructor(data?: Partial<TipoSolicitud>) {
    super(data);
  }
}

export interface TipoSolicitudRelations {
  // describe navigational properties here
}

export type TipoSolicitudWithRelations = TipoSolicitud & TipoSolicitudRelations;
