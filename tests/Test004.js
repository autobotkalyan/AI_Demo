"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { createWriteStream } from "fs";
import { resolve } from "path";
import { run } from "newman";
var collectionFilePath = resolve('testData', 'AI.postman_collection.json');
var outPutFilePath = resolve('testData', 'Output.txt');
run({
    collection: collectionFilePath,
    reporters: 'cli'
}, function (err, summary) {
    if (err) {
        return;
    }
    console.log('Collection run completed.');
    var writeStream = createWriteStream(outPutFilePath, { flags: 'w' });
    summary.run.executions.forEach(function (execution) {
        writeStream.write("Response Body: ".concat(execution.response.stream, "\n"));
        writeStream.write("Response Time: ".concat(execution.response.responseTime, "ms\n"));
        writeStream.write("Status: ".concat(execution.response.code, "\n"));
        writeStream.write('----------------------------------------\n');
    });
    writeStream.end(function () {
        console.log('Output written to file.');
    });
});
