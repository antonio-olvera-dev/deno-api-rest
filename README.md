# Deno-Api-Rest
## Instrucciones 📖
### Versión 1.6.3
### Instalación 🔨
- Descargar e instalar [Deno](https://deno.land/)
- Descargar e instalar [Postman](https://www.postman.com/)
```sh
$ git clone https://github.com/antonioolvera1995/deno-api-rest.git
```
### Iniciar 🚀
- Pulsar F5 si utiliza vs-code si no ejecutar el siguiente comando:
```sh
$  deno run -A  main.ts
```
### Uso
- Abrir Postman y hacer una petición GET en:  http://localhost:8000/users
- - Esta ruta devuelve todos los usuarios
- Abrir el Postman y hacer una petición GET en:  http://localhost:8000/users/0
- - Esta ruta devuelve el primer nombre de la lista
- - modificar último valor por el numero deseado dentro del limite dado por la longitud de la lista.
- Abrir el Postman y hacer una petición DELETE en:  http://localhost:8000/users/del/0
- - Esta ruta elimina el primer nombre de la lista
- - modificar último valor por el numero deseado dentro del limite dado por la longitud de la lista.
- Abrir el Postman y hacer una petición POST en:  http://localhost:8000/users/add
- - Esta ruta agrega un nuevo usuario a la lista.
- - En el body especifique el nombre en formato JSON
```json
{
    "name":"Jose"
}
```
- Abrir el Postman y hacer una petición PUT en:  http://localhost:8000/users/update/0
- - Esta ruta actualiza un nuevo usuario de la lista.
- - En el body especifique el nombre en formato JSON
```json
{
    "name":"nuevo nombre"
}
```
Lista inicial de los usuarios:
```typescript
const lista = ["Antonio", 'Pepe', 'Juan', 'Vicente', 'Victor', 'Pedro']
```
