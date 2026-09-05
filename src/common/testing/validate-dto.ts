import { createValidationPipe } from '../validation/validation-pipe.js';

export type ValidationOutcome<T> =
  { ok: true; value: T } | { ok: false; messages: string[] };

const pipe = createValidationPipe();

/**
 * Runs a payload through the application's ValidationPipe as if it arrived on a
 * request body, so DTO specs assert the same rules the HTTP layer enforces.
 */
export async function validateDto<T>(
  metatype: new () => T,
  payload: unknown,
): Promise<ValidationOutcome<T>> {
  try {
    const value = (await pipe.transform(payload, {
      type: 'body',
      metatype,
    })) as T;

    return { ok: true, value };
  } catch (error) {
    const response = (error as { getResponse?: () => unknown }).getResponse?.();
    const message = (response as { message?: string[] } | undefined)?.message;

    return { ok: false, messages: message ?? [] };
  }
}

export async function expectRejected<T>(
  metatype: new () => T,
  payload: unknown,
): Promise<string[]> {
  const outcome = await validateDto(metatype, payload);

  if (outcome.ok) {
    throw new Error('Expected the payload to be rejected, but it passed');
  }

  return outcome.messages;
}

export async function expectAccepted<T>(
  metatype: new () => T,
  payload: unknown,
): Promise<T> {
  const outcome = await validateDto(metatype, payload);

  if (!outcome.ok) {
    throw new Error(
      `Expected the payload to be accepted, but it failed: ${outcome.messages.join('; ')}`,
    );
  }

  return outcome.value;
}
