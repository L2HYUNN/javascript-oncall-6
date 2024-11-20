export async function safeInput(input, { onInput, onError }) {
  while (true) {
    try {
      const result = await input();
      onInput(result);

      return result;
    } catch (error) {
      onError(error);
    }
  }
}
