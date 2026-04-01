const { cpSync, existsSync, mkdirSync, rmSync } = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const nextBuildDir = path.join(projectRoot, '.next');
const exportDir = path.join(projectRoot, 'out');
const distDir = path.join(projectRoot, 'dist');

const removeIfExists = target => {
  if (existsSync(target)) {
    rmSync(target, { recursive: true, force: true });
  }
};

removeIfExists(nextBuildDir);
removeIfExists(exportDir);
removeIfExists(distDir);

execSync('npx next build', {
  cwd: projectRoot,
  stdio: 'inherit',
});

mkdirSync(distDir, { recursive: true });
cpSync(exportDir, distDir, { recursive: true });

console.log('Created deployable dist folder at:', distDir);