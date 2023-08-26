# MiBlog React

## Contexto
Para este desafio tenemos como propósito construir una aplicación de "Blog" la cual estará basado en el backend "miblog":

[miblog backend](https://miblog.inovecode.com/docs)

- A lo largo del curso irá agregando funcionalidades a su Blog hasta tenerlo completo al final del curso, como una aplicación completa basada en los conceptos vistos en la cursada.
- Para ello usted tendrá su propio repositorio el cual utilizará y mantendrá actualizado con cada nuevo desafio de profundización.
- En caso de tener dudas o problemas, nos compartirá el link del repositorio para poder ayudarlo u orientarlo.


## Esquema de la aplicación
Esta aplicación permitirá:
- Logearse con un usuario
- Ver los posteos de ese usario
- Leer un posteo de un usuario
- Modificar el posteo de un usuario
- Crear un nuevo posteo para un usuario

Todas estas funcionalidades las construiremos a lo largo de la cursada con cada nuevo desafio. En cada desafio se dará detalle del paso siguiente a realizar.


## Consiga
1. Deberá conectar su FrontEnd con el Backend de "MiBlog" para poder crear/consultar/actualizar posteos uitilizando Axios y peticiones HTTP contra el backend.

La documentación de los endpoints disponibles del backend:

[Backend MiBlog docs](https://miblog.inovecode.com/docs)

2. Deberá crear una carpeta "api" y allí el cliente y las APIs correspondientes. Tomo como referencia lo realizado en clase. Podrá utilizar los endpoints desproteguidos y los enpdoints con autenticación y protección por token (Auth), queda a su decisión.

3. Deberá implementar las siguientes funcionalidades que ya debe tener implementada en su frontend pero con datos "mock" (sin interactuar con el backend y una base de datos):
- Se debe realizar el login del usuario y almacenar el nombre de usuario logueado:

```[POST] /api/v1.0/login```
o
```[POST] /api/v1.0/login``

- En la pantalla de posteos, se debe consultar al backend los posteos del usuario y renderizarlos luego con map():

```[GET] /api/v1.0/posteos/{usuario}```
o
```[GET] /api/v1.0/auth/posteos/{usuario}```

- En su ruta dónde permite crear un nuevo posteo, ahora deberá utilizar el endpoint del backend para crear el nuevo posteos para ese usuario:

```[POST] /api/v1.0/posteos/{usuario}```
o
```[POST] /api/v1.0/auth/posteos/{usuario}```

- Su frontend debería estar navegando a una ruta especial cuando se presiona el botón "LEER" sobre un posteo. Ahora en esa ruta deberá utilizar el endpoint del backend para consultar la información específica de ese posteo (por posteo_id):

```[GET] /api/v1.0/posteos/{usuario}/detail/{posteo_id}```
o
```[GET] /api/v1.0/auth/posteos/{usuario}/detail/{posteo_id}``

- Su frontend debería estar navegando a una ruta especial cuando se presiona el botón "MODIFICAR" sobre un posteo. En esa ruta dónde deberá tener un formulario para modificar el título y texto de este posteo puntual, ahora en esa ruta deberá utilizar el endpoint del backend para modificar la información específica de ese posteo (por posteo_id):

```[PUT] /api/v1.0/posteos/{usuario}/detail/{posteo_id}```
o
```[PUT] /api/v1.0/auth/posteos/{usuario}/detail/{posteo_id}``

4. Una vez finalizada todas las funcionalidades anteriores, en la ruta dónde usted permite modificar un posteo a través de un formulario, deberá agregar allí un botón que diga "Eliminar este Posteo". Si ese botón es presionado deberá utilizar el endpoint del backend para eliminar ese posteo:

```[DELETE] /api/v1.0/posteos/{usuario}/detail/{posteo_id}```
o
```[DELETE] /api/v1.0/auth/posteos/{usuario}/detail/{posteo_id}``

## ¡Felicitaciones!
Si pudo realizar los pasos anteriores ya está muy cerca de culminar su proyecto, ¡lo más dificiles se temrinó!

Solo queda desplegar su proyecto en la nube para que otros puedan apreciarlo y a usted le quede como una experiencia vivida.

Felicitaciones por su gran esfuerzo hasta aquí, ha desarrollado por sus propios medios una aplicación completa digna de ser expuesta al mundo