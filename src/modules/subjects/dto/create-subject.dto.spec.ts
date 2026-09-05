import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateSubjectDto } from './create-subject.dto.js';

const valid = {
  courseId: 1,
  professorId: 2,
  name: 'Banco de Dados',
  description: 'Modelagem relacional',
};

describe('CreateSubjectDto', () => {
  it('accepts a valid payload', async () => {
    await expectAccepted(CreateSubjectDto, valid);
  });

  it('requires a professorId', async () => {
    await expectRejected(CreateSubjectDto, {
      ...valid,
      professorId: undefined,
    });
  });

  it('rejects a courseId that is not a positive integer', async () => {
    await expectRejected(CreateSubjectDto, { ...valid, courseId: -1 });
  });

  it('requires a name', async () => {
    await expectRejected(CreateSubjectDto, { ...valid, name: '' });
  });
});
