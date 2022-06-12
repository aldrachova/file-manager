export const parseUsername = () => {
  const cliArgs = process.argv.slice(2);
  
  let userName = 'Username';

  for (let i = 0; i < cliArgs.length; i++) {
    if (cliArgs[i].startsWith('--username'))
      userName = cliArgs[i].slice(11);
  }

  return userName;
};
