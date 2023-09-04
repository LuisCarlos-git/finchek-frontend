export const sleep = async () =>
  await new Promise((resolve) => setTimeout(resolve, 1000));
