# YVH Target Selection Module
## Tecnologías utilizadas
* NodeJS 10.1.0
* Docker 18.09.2
* Docer Compose 1.23.1
## Comandos Útiles
### Iniciar Aplicación Aplicación
```
docker-compose up
```
### Ejecutar Tests Bash
```
docker-compose run test
```
## Extras
La aplicación cuenta con test unitarios en Mocha y Chai para poder ejecutarlos realizar los siguientes pasos:
```
docker exec -it radar bash
npm test
```
