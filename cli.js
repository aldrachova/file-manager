export const parseUsername = () => {
  const cliArgs = process.argv.slice(2);
  
  let userName = 'Username';

  for (let i = 0; i < cliArgs.length; i++) {
    if (cliArgs[i].startsWith('--username=') && cliArgs.length > 11)
      userName = cliArgs[i].slice(11);
  }

  return userName;
};
