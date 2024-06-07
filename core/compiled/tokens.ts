let tokensPromise: null | Promise<any> = null;

export const fetchTokens = async () => {
  const { Tokens } = await import("../src/tokens");
  return Tokens;
};

export const getTokens = async () => {
  if (tokensPromise === null) {
    tokensPromise = fetchTokens();
  }

  return await tokensPromise;
};
