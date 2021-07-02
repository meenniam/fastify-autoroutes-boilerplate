### Overview
------------
this is our fastify boilerplate with **typescript** and **fastify-autoroutes** to generate routes by files or directories. we hope that is useful for the others want to use fastify but don't need to setiing up.

> นี่เป็น template fastify โดยใช้ **typescript** และใช้ plugin **fastify-autoroutes** ในการสร้าง route ต่างๆ โดยอิงจากชื่อ file และ folder เราหวังว่านี่จะเป็นประโยชน์คนที่ต้องการใช้ fastify แต่ไม่อยากตั้งค่าต่างๆ

#### see also
- [fastify-autoroutes](https://github.com/GiovanniCardamone/fastify-autoroutes)
- [fastify](https://www.fastify.io/)
- [@sinclair/typebox](https://www.npmjs.com/package/@sinclair/typebox)
- [typescript](https://www.typescriptlang.org/)

### Usage
------------

#### Install Dependencies
	yarn install

#### Development
	yarn dev

#### Build
	yarn build

#### Start
	yarn start

### Documentation
----------------
you can create your route api by creating files or directories into routes directory

*for example*

##### routes directory
	routes
	 |-- hello
	 |    |-- index.ts
	 |    |-- {helloId}.ts
	 |-- test.ts

##### you will get these routes
	 - /hello
	 - /hello/:helloId
	 - /test

##### ignore file or directory

you can create file with these format

	routes
     |--.ignored-directory
	 |--_ignored-directory
	 |--.ignored-js-file.js
	 |--_ignored-js-file.js
	 |--.ignored-ts-file.ts
	 |--_ignored-ts-file.ts
	 |--ignored-js-test.test.js
	 |--ignored-ts-test.test.ts

*see more* [fastify-autoroutes](https://github.com/GiovanniCardamone/fastify-autoroutes)
