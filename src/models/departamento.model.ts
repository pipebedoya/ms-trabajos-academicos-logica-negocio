import {Entity, model, property, hasMany} from '@loopback/repository';
import {Proponente} from './proponente.model';
import {DepartamentoXProponente} from './departamento-x-proponente.model';

@model({settings: {
      foreignKeys: {
          fk_dep_id_facultad: {
          name: 'fk_dep_id_facultad',
          entity: 'Facultad',
          entityKey: 'id',
          foreignKey: 'id_facultad'
          },
        },
      },
   })
export class Departamento extends Entity {
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

  @hasMany(() => Proponente, {through: {model: () => DepartamentoXProponente, keyFrom: 'id_departamento', keyTo: 'id_proponente'}})
  proponentes: Proponente[];

  @property({
    type: 'number',
  })
  id_facultad?: number;

  constructor(data?: Partial<Departamento>) {
    super(data);
  }
}

export interface DepartamentoRelations {
  // describe navigational properties here
}

export type DepartamentoWithRelations = Departamento & DepartamentoRelations;
