{
  "name": "teste-setup-ambiente",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",           //compila os arquivos .ts em.js                                   
    "server": "lite-server --baseDir=dist",
    "watch": "tsc -w",
    "start": "concurrently \"npm run watch\" \"npm run server\""
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^7.2.2", // roda comandos paralelamente
    "lite-server": "^2.6.1",  //lite-server
    "typescript": "^4.7.4"    //typescript
  }
}
