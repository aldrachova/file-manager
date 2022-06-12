import { EOL, cpus, homedir, userInfo, arch } from 'os';

// Operating system info (prints following information in console)

// Get EOL (default system End-Of-Line)
export const getEOL = () => console.log(JSON.stringify(EOL));

// Get host machine CPUs info
// (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
export const getCPUsInfo = () =>  {
  const cpusInfo = cpus();
  console.log(`Overall amount of CPUS: ${cpusInfo.length}`);
  cpusInfo.forEach(cpu => console.log(`model: ${cpu.model} \tspeed: ${cpu.speed / 1000} GHz`));
}; 

// Get home directory
export const getHomeDir = () => console.log(homedir());

// Get current system user name
export const getUsername = () => console.log(userInfo().username);

// Get CPU architecture for which Node.js binary has compiled
export const getCPUArch = () => console.log(arch());
