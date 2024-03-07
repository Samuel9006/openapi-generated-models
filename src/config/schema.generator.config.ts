import { generateApi, GenerateApiOutput } from 'swagger-typescript-api';
import { writeFileSync } from 'fs';

const swaggerFilePath = 'ruta/a/tu/archivo/swagger.json'; // Ruta al archivo swagger.json generado por @nestjs/swagger
const outputFolderPath = 'ruta/a/la/carpeta/output'; // Carpeta donde se generarán los DTO

const options: GenerateApiOptions = {
  methodNameMode: 'operationId',
  output: outputFolderPath,
  source: swaggerFilePath,
};

generateApi(options)
  .then(() => {
    console.log('DTO generados correctamente.');
  })
  .catch((error) => {
    console.error('Error al generar los DTO:', error);
  });