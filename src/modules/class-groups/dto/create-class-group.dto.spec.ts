import {
  expectAccepted,
  expectRejected,
} from '../../../common/testing/validate-dto.js';
import { CreateClassGroupDto } from './create-class-group.dto.js';

const valid = { semester: 1, year: 2026 };

describe('CreateClassGroupDto', () => {
  it('accepts a valid payload', async () => {
    await expectAccepted(CreateClassGroupDto, valid);
  });

  it('rejects a semester outside the valid range', async () => {
    await expectRejected(CreateClassGroupDto, { ...valid, semester: 3 });
  });

  it('rejects a year outside the valid range', async () => {
    await expectRejected(CreateClassGroupDto, { ...valid, year: 1899 });
  });

  it('rejects a fractional year', async () => {
    await expectRejected(CreateClassGroupDto, { ...valid, year: 2026.5 });
  });
});
