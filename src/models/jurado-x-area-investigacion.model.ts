import {Entity, model, property} from '@loopback/repository';

@model({settings: {
      foreignKeys: {
          fk_area_inv_id_jurado: {
          name: 'fk_area_inv_id_jurado',
          entity: 'Jurado',
          entityKey: 'id',
          foreignKey: 'id_jurado'
          },
           fk_area_inv_id_areainvestigacion: {
          name: 'fk_area_inv_id_areainvestigacion',
          entity: 'AreaInvestigacion',
          entityKey: 'id',
          foreignKey: 'id_areainvestigacion'
          },
        },
      },
   })
export class JuradoXAreaInvestigacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  id_areainvestigacion?: number;

  @property({
    type: 'number',
  })
  id_jurado?: number;

  constructor(data?: Partial<JuradoXAreaInvestigacion>) {
    super(data);
  }
}

export interface JuradoXAreaInvestigacionRelations {
  // describe navigational properties here
}

export type JuradoXAreaInvestigacionWithRelations = JuradoXAreaInvestigacion & JuradoXAreaInvestigacionRelations;
