import {Entity, model, property, hasMany} from '@loopback/repository';
import {Proponente} from './proponente.model';
import {ProponenteXSolicitud} from './proponente-x-solicitud.model';
import {Recordatorio} from './recordatorio.model';
import {TipoComite} from './tipo-comite.model';
import {ComiteXSolicitud} from './comite-x-solicitud.model';

@model({settings: {
      foreignKeys: {
          fk_sol_id_modalidad: {
          name: 'fk_sol_id_modalidad',
          entity: 'Modalidad',
          entityKey: 'id',
          foreignKey: 'id_modalidad'
          },
           fk_sol_id_areainvestigacion: {
          name: 'fk_sol_id_areainvestigacion',
          entity: 'AreaInvestigacion',
          entityKey: 'id',
          foreignKey: 'id_areainvestigacion'
          },
            fk_sol_id_tiposolicitud: {
            name: 'fk_sol_id_tiposolicitud',
            entity: 'TipoSolicitud',
            entityKey: 'id',
            foreignKey: 'id_tiposolicitud'
            },
             fk_sol_id_estado: {
              name: 'fk_sol_id_estado',
              entity: 'Estado',
              entityKey: 'id',
              foreignKey: 'id_estado'
              },
          },
      },
   })
export class Solicitud extends Entity {
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
  fecha_radicado: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_trabajo: string;

  @property({
    type: 'string',
    required: true,
  })
  archivo_trabajo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
  })
  id_estado?: number;

  @property({
    type: 'number',
  })
  id_modalidad?: number;

  @property({
    type: 'number',
  })
  id_tiposolicitud?: number;

  @property({
    type: 'number',
  })
  id_areainvestigacion?: number;

  @hasMany(() => Proponente, {through: {model: () => ProponenteXSolicitud, keyFrom: 'id_solicitud', keyTo: 'id_proponente'}})
  proponentes: Proponente[];

  @hasMany(() => Recordatorio, {keyTo: 'id_solicitud'})
  recordatorios: Recordatorio[];

  @hasMany(() => TipoComite, {through: {model: () => ComiteXSolicitud, keyFrom: 'id_solicitud', keyTo: 'id_tipocomite'}})
  tipoComites: TipoComite[];

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
