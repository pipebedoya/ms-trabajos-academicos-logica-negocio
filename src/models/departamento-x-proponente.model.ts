import {Entity, model, property} from '@loopback/repository';

@model({settings: {
      foreignKeys: {
          fk_dep_pro_id_departamento: {
          name: 'fk_dep_pro_id_departamento',
          entity: 'Departamento',
          entityKey: 'id',
          foreignKey: 'id_departamento'
          },
           fk_dep_pro_id_proponente: {
            name: 'fk_dep_pro_id_proponente',
            entity: 'Proponente',
            entityKey: 'id',
            foreignKey: 'id_proponente'
            },
        },
      },
   })
export class DepartamentoXProponente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  id_departamento?: number;

  @property({
    type: 'number',
  })
  id_proponente?: number;

  constructor(data?: Partial<DepartamentoXProponente>) {
    super(data);
  }
}

export interface DepartamentoXProponenteRelations {
  // describe navigational properties here
}

export type DepartamentoXProponenteWithRelations = DepartamentoXProponente & DepartamentoXProponenteRelations;
