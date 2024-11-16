// @ts-check
import { Console } from '@woowacourse/mission-utils';

/**
 *
 * @param {string} query
 * @returns {Promise<string>}
 */
export async function read(query) {
  const result = await Console.readLineAsync(`${query}`);

  return result;
}

/**
 *
 * @param {string} message
 * @returns {void}
 */
export function print(message) {
  Console.print(message);
}
