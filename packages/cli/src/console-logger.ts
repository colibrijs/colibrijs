export const logger = {
  log(message: string) {
    // eslint-disable-next-line no-console -- this is console logger. So using here console is normal
    console.log(message);
  },

  error(messageOrError: string | Error) {
    // eslint-disable-next-line no-console -- this is console logger. So using here console is normal
    console.error(messageOrError);
  },
};
