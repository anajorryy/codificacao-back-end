const os = require('os');

console.log('--- Diagnóstico de Ambiente Back-End ---');
console.log('Plataforma:', os.platform());
console.log('Memória Total (bytes):', os.totalmem());
console.log('Quantidade de Núcleos CPU:', os.cpus().length);