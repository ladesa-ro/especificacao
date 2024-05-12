import { ObjectUuid } from '../../../legacy/core';
import { IDeclaration, PropertiesRequireness, PropertyTypes } from '../../../legacy/helpers';

export interface IIntervaloDeTempoModel {
  //
  id: string;
  //
  periodoInicio: string;
  periodoFim: string;
  //
}

// =================================================================================================

export const IntervaloDeTempoFindOneByIdInput = ObjectUuid;

export const IntervaloDeTempo = () => {
  return {
    name: 'IntervaloDeTempo',

    properties: {
      ...IntervaloDeTempoFindOneByIdInput().properties,
      periodoInicio: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Horário que o intervalo de tempo inicia.',
      },
      periodoFim: {
        nullable: false,
        type: PropertyTypes.STRING,
        description: 'Horário que o intervalo de tempo termina.',
      },
    },
  } satisfies IDeclaration;
};

export const IntervaloDeTempoFindOneByIdResult = () => {
  const { properties } = IntervaloDeTempo();

  return {
    name: 'IntervaloDeTempoFindOneByIdResult',
    partialOf: IntervaloDeTempo as any,
    properties: {
      //
      id: properties.id,
      //
      periodoInicio: properties.periodoInicio,
      periodoFim: properties.periodoFim,
      //
    },
  } satisfies IDeclaration;
};

export const IntervaloDeTempoInput = () => {
  const { properties } = IntervaloDeTempo();

  return {
    name: 'IntervaloDeTempoInput',

    properties: {
      ...PropertiesRequireness(
        {
          periodoInicio: properties.periodoInicio,
          periodoFim: properties.periodoFim,
        },
        true,
      ),
    },
  } satisfies IDeclaration;
};

// =================================================================================================
