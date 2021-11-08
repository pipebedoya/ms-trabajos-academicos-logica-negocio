import {Entity, model, property, hasMany} from '@loopback/repository';
import {Jurado} from './jurado.model';
import {JuradoXAreaInvestigacion} from './jurado-x-area-investigacion.model';
import {Solicitud} from './solicitud.model';

@model()
export class AreaInvestigacion extends Entity {
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

  @hasMany(() => Jurado, {through: {model: () => JuradoXAreaInvestigacion, keyFrom: 'id_areainvestigacion', keyTo: 'id_jurado'}})
  jurados: Jurado[];

  @hasMany(() => Solicitud, {keyTo: 'id_areainvestigacion'})
  solicitudes: Solicitud[];

  constructor(data?: Partial<AreaInvestigacion>) {
    super(data);
  }
}

export interface AreaInvestigacionRelations {
  // describe navigational properties here
}

export type AreaInvestigacionWithRelations = AreaInvestigacion & AreaInvestigacionRelations;
