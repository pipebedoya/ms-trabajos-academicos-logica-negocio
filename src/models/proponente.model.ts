import {Entity, model, property} from '@loopback/repository';

@model({settings: {
      foreignKeys: {
          fk_pro_id_tipovinculacion: {
          name: 'fk_pro_id_tipovinculacion',
          entity: 'TipoVinculacion',
          entityKey: 'id',
          foreignKey: 'id_tipovinculacion'
          },
        },
      },
   })
export class Proponente extends Entity {
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
  documento_proponente: string;

  @property({
    type: 'string',
    required: true,
  })
  primer_nombre: string;

  @property({
    type: 'string',
    default: "",
  })
  otros_nombres?: string;

  @property({
    type: 'string',
    required: true,
  })
  primer_apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  segundo_apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    required: true,
  })
  fotografia: string;

  @property({
    type: 'number',
  })
  id_tipovinculacion?: number;

  constructor(data?: Partial<Proponente>) {
    super(data);
  }
}

export interface ProponenteRelations {
  // describe navigational properties here
}

export type ProponenteWithRelations = Proponente & ProponenteRelations;
