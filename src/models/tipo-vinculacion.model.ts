import {Entity, model, property, hasOne} from '@loopback/repository';
import {Proponente} from './proponente.model';

@model()
export class TipoVinculacion extends Entity {
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

  @hasOne(() => Proponente, {keyTo: 'id_tipovinculacion'})
  proponente: Proponente;

  constructor(data?: Partial<TipoVinculacion>) {
    super(data);
  }
}

export interface TipoVinculacionRelations {
  // describe navigational properties here
}

export type TipoVinculacionWithRelations = TipoVinculacion & TipoVinculacionRelations;
