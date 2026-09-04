import { vi } from 'vitest';

type PrismaModelMock = {
  create: ReturnType<typeof vi.fn>;
  findMany: ReturnType<typeof vi.fn>;
  findUnique: ReturnType<typeof vi.fn>;
  update: ReturnType<typeof vi.fn>;
  delete: ReturnType<typeof vi.fn>;
};

/**
 * Builds a PrismaService stand-in exposing the delegate methods used by the
 * modules, so specs can resolve the dependency without a database.
 */
export function createPrismaMock<T extends string>(
  model: T,
): Record<T, PrismaModelMock> {
  return {
    [model]: {
      create: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  } as Record<T, PrismaModelMock>;
}
