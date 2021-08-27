export const buildTreeBackward = (source, keys, index = 0, result = {}) => {
  if (!keys[index]) {
    return result;
  }

  if (!(keys[index] in result)) {
    //@ts-ignore
    result[keys[index]] = { ...source[keys[index]] };
  }

  if (!keys[index + 1]) {
    return result;
  }

  //@ts-ignore
  for (const ref of Object.values(result[keys[index]])) {
    //@ts-ignore

    buildTreeBackward(source, keys, index + 1, ref);
  }

  return result;
};

      const result = buildTreeBackward(
        ACCOUNTS_CONFIG_DEFAULT,
        Object.keys(ACCOUNTS_CONFIG_DEFAULT)
      );

      console.log(result);