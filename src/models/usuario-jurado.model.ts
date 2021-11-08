import {Entity, model, property} from '@loopback/repository';

@model({settings: {
      foreignKeys: {
          fk_usu_jur_id_jur: {
          name: 'fk_usu_jur_id_jur',
          entity: 'Jurado',
          entityKey: 'id',
          foreignKey: 'id_jurado'
          },
        },
      },
   })
export class UsuarioJurado extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    default: "",
  })
  clave?: string;

  @property({
    type: 'number',
  })
  id_jurado?: number;

  constructor(data?: Partial<UsuarioJurado>) {
    super(data);
  }
}

export interface UsuarioJuradoRelations {
  // describe navigational properties here
}

export type UsuarioJuradoWithRelations = UsuarioJurado & UsuarioJuradoRelations;
