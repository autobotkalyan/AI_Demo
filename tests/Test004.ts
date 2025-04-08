import * as fs from 'fs';
import * as path from 'path';
import * as newman from 'newman';

const collectionFilePath = path.resolve('testData', 'AI.postman_collection.json');
const outPutFilePath = path.resolve('testData', 'Output.txt');

newman.run(
    {
        collection: collectionFilePath,
        reporters: 'cli'
    },
    (err, summary) => {
        if (err) {
            return;
        }
        console.log('Collection run completed.');
    
        const writeStream = fs.createWriteStream(outPutFilePath, { flags: 'w' });

        summary.run.executions.forEach(execution => {
            
            writeStream.write(`Response Body: ${execution.response.stream}\n`);
            writeStream.write(`Response Time: ${execution.response.responseTime}ms\n`);
            writeStream.write(`Status: ${execution.response.code}\n`);
            writeStream.write('----------------------------------------\n');
        });

        writeStream.end(()=> {
            console.log('Output written to file.');
        });
        }
);


    