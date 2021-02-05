# Prince's Threatre Search Application 

### Description

Prince's theatre movie search application permits users to search for desired movies
then view movie details including the price of the movie from one to many movie vendors.
Note: This application has built-in re-try capability (upto three times) should an API failed to retriewve data.
Refer to FetchOption in useFetchMovies and useFetchMovie.
 
### Prerequisites

Please ensure that the latest version of NodeJs and yarn are installed 

### Installing
#### Code base
In order to stop sensitive information to be included in the github repository, please create 
a .env.local file (which will we excluded from the repository) then add sensitive fields to it. Please do the following:

- Copy env to .env.local or .env*.local file.
- Add vendors API Keys to this file. 
For CINEMAWORLD_FILM_API_KEY=&lt;ENTER API KEY&gt; 
and FILMWORLD_FILM_API_KEY=&lt;ENTER API KEY&gt; replace &lt;ENTER API KEY&gt; with api key.
#### Install Dependencies 
```
yarn
```
### Start application in development mode
```
yarn dev
```

### Storybook
```
yarn storybook
```

### Build application
```
yarn build
```

### Start application
```
yarn start
```

### Test application
```
yarn test or yarn test:watch
```
### Todo
- Enhance UI look and feel including about pages, contact us etc.
- Change eslint / prettier with semi-colons.
- Add subscription and access to view movies on-line.
- Add server code to call API. 
This will allow API key to be hidden and provide a cleaner solution.
- Add robust error handling
- Add page layout and navigation
- Add "please wait" metaphor when loading
- Add further jest tests
- Perform filtered search (I assume that production APIs would handle filtering and pagination) 
- Include pagination or virtual scrolling
- Show message when no records are found message
- Give the ability to switch themes
- Fix up Typescript in Button component
- Add style components to ui
 
### Tech Stack
- **Next JS**: Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. See nextjs.org for details. See https://www.typescriptlang.org/ for details. 
- **TypeScript**: TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
- **Storybook**: Storybook is a development environment for UI components. 
It allows you to browse a component library, view the different states 
of each component, and interactively develop and test components. See https://storybook.js.org for details.
- **material-ui**: In a nutshell, Material-UI is an open-source project that features React components that implement Google's Material Design. 
See https://material-ui.com/ for details.
- **jest**: Simple all emcompassing test solution. See https://jestjs.io/ for details.
- **SWR**: is a React Hooks library for smart remote data fetching. See https://www.npmjs.com/package/swr for details.
- **eslint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. 
See http://eslint.org for detsils.
- **prettier**: Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. 
See https://www.npmjs.com/package/prettier for details.

### Other
- **Atomic Design**: Atomic Design involves breaking a website down into its basic 
components and then working up from there to create a site. See https://atomicdesign.bradfrost.com for details. 
See https://atomicdesign.bradfrost.com for details.
- **Github dependabot**: Automated dependency updates built into GitHub. See https://github.com/dependabot for details.

## Modelling
Please refer to https://github.com/PaulCaruana/PrinceTheatre/blob/master/src/components/types.ts

## Author

**Paul Caruana** 
