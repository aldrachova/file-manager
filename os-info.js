import { EOL, cpus, homedir, userInfo, arch } from 'os';

// Operating system info (prints following information in console)

// Get EOL (default system End-Of-Line)
const getEOL = () => console.log(JSON.stringify(EOL));

// Get host machine CPUs info
// (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
const getCPUsInfo = () =>  {
  const cpusInfo = cpus();
  console.log(`Overall amount of CPUS: ${cpusInfo.length}`);
  cpusInfo.forEach(cpu => console.log(`model: ${cpu.model} \tspeed: ${cpu.speed / 1000} GHz`));
}; 

// Get home directory
export const getHomeDir = () => homedir();

// Get current system user name
const getUsername = () => console.log(userInfo().username);

// Get CPU architecture for which Node.js binary has compiled
const getCPUArch = () => console.log(arch());

export const execOsCommand = (command) => {
  const commandArgs = command.split(' ');
  if (commandArgs.length !== 2) {
    console.log('Invalid input');
    return;
  }
  switch (commandArgs[1].trim()) {
    case '--eol':
      getEOL();
      break;
    case '--cpus':
      getCPUsInfo();
      break;
    case '--homedir':
      console.log(getHomeDir());
      break;
    case '--username':
      getUsername();
      break;
    case '--architecture':
      getCPUArch();
      break;
    default:
      console.log('Invalid input');
  }
};
