const fs = require('fs')
const brain = require ('brain.js');
const data = require ('./data.json');

const config = {
    hiddenlayers: [4,5],
    activation: 'sigmoid',
    iterations: 500,
    log: true,
    learningRate: 0.01,
    logPeriod: 1
}

const net = new brain.recurrent.LSTM();
//edit


const trainingData = data.map(item => ({
    input: item.input,
    output: item.output
}));

net.train(trainingData, config)

const output = net.run('tumi ki korcho');

console.log(`Prob: ${output}`);

//edit
//fs.writeFileSync('trained-net.js', `export default ${ net.toFunction().toString() };`);

