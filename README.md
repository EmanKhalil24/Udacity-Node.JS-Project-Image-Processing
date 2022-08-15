<h1 align="center"> Udacity Node.JS Project Image Processing </h1>

## Description:
 
This app used for processing images and control their sizes by endpoint API.

## Folder Structure

```bash
├── src
│   ├── routes
│   │   ├── api
│   │   │   │── utilities
│   │   │   │   └── validateData.ts => `To validate the image data`
│   │   │   │
│   │   │   │── guidance.ts => `for instructions on using the project`
│   │   │   └── pictures.ts => `for operations on the photo`
│   │   │   
│   │   └── index.ts => `import all routes and export it to main index`
│   │
│   │
│   ├── tests  => `for testing purposes`
│   │   ├── helpers
│   │   │   └── reporter.ts
│   │   │
│   │   ├── indexSpec.ts => `for test endpoint api` 
│   │   └── picturesSpec.ts => `for pictures function`
│   │
│   │
│   ├── utilities => `for logger middleware`
│   │   └── logger.ts => `for log method & url`
│   │
│   │
│   └── index.ts => `to run the server`
└──
```

## To run this project

`Step 1` : To use this project must install [Node.js](https://nodejs.org/en/), Then Download the source code 

```
git clone https://github.com/EmanKhalil24/Udacity---Project-Image-Processing
```

`Step 2` : Enter the project file then install package

```
npm i
```

`Step 3` : To run project

```
node run start
```
`Step 4` : Open the browser and click : [http://localhost:3000](http://localhost:3000)

<hr>

to run eslint to check error

```
npm run lint
```

to run eslint and auto fixed error

```
npm run lint:f
```

to compile the TS code

```
npm run build
```

to run the JS code

```
node dist/index.js
```

