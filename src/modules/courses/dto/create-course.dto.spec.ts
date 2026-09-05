import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateCourseDto } from './create-course.dto.js';

const valid = { name: 'Sistemas de Informação', description: 'Bacharelado' };

describe('CreateCourseDto', () => {
  it('accepts a valid payload', async () => {
    await expectAccepted(CreateCourseDto, valid);
  });

  it('requires a name', async () => {
    await expectRejected(CreateCourseDto, { ...valid, name: '' });
  });

  it('requires a description', async () => {
    await expectRejected(CreateCourseDto, { ...valid, description: undefined });
  });

  it('rejects a name that is not a string', async () => {
    await expectRejected(CreateCourseDto, { ...valid, name: 42 });
  });
});
