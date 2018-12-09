const trainedNet = require('./trained-net');

//trainedNet(data);


//const output = net.run('apnar nam ki');
const output = trainedNet.run('apnar nam ki');

console.log(`Prob: ${output}`);