import fs from 'fs';

const options = {
  key: fs.readFileSync(`${__dirname}/../../https/mydomain.key`),
  cert: fs.readFileSync(`${__dirname}/../../https/mydomain.crt`),
  ca: fs.readFileSync(`${__dirname}/../../https/mydomain.csr`)
};

export default options;

