import  premier  from "./premier.yml";
const { Leopard } = require("@picovoice/leopard-node");

const accessKey = "0PKyolj/rCH0Vu86aStUvPiq4eo5e8sO1p9/hgzdJTkDlT7nSfHo6g=="; // Obtained from the Picovoice Console (https://console.picovoice.ai/)
const handle = new Leopard(accessKey, { modelPath: premier });

const result = handle.processFile();
console.log(result.transcript);

