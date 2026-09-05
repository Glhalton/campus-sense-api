import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateProfessorDto } from './create-professor.dto.js';

const valid = { name: 'Ana Souza', email: 'ana.souza@example.edu' };

describe('CreateProfessorDto', () => {
  it('accepts a payload without the optional telephone', async () => {
    await expectAccepted(CreateProfessorDto, valid);
  });

  it('accepts a telephone', async () => {
    await expectAccepted(CreateProfessorDto, {
      ...valid,
      telephone: '+55 11 99999-0000',
    });
  });

  it('rejects a malformed email', async () => {
    await expectRejected(CreateProfessorDto, { ...valid, email: 'ana.souza' });
  });

  it('requires a name', async () => {
    await expectRejected(CreateProfessorDto, { ...valid, name: '' });
  });
});
