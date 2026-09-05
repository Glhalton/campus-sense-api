import { CreateCourseDto } from '../../modules/courses/dto/create-course.dto.js';
import {
  expectAccepted,
  expectRejected,
  validateDto,
} from '../testing/validate-dto.js';

describe('validation pipe', () => {
  it('accepts a payload that matches the DTO', async () => {
    const value = await expectAccepted(CreateCourseDto, {
      name: 'Sistemas de Informação',
      description: 'Bacharelado',
    });

    expect(value).toBeInstanceOf(CreateCourseDto);
    expect(value.name).toBe('Sistemas de Informação');
  });

  it('rejects properties that the DTO does not declare', async () => {
    const messages = await expectRejected(CreateCourseDto, {
      name: 'Sistemas de Informação',
      description: 'Bacharelado',
      id: 7,
    });

    expect(messages.join(' ')).toContain('id');
  });

  it('rejects a payload that is not an object', async () => {
    const outcome = await validateDto(CreateCourseDto, 'not-an-object');

    expect(outcome.ok).toBe(false);
  });

  it('does not coerce a numeric string into a number', async () => {
    const { CreateFloorDto } =
      await import('../../modules/floors/dto/create-floor.dto.js');

    await expectRejected(CreateFloorDto, {
      buildingId: '1',
      name: 'Térreo',
      number: 0,
    });
  });
});
