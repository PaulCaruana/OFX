# OFX Currency Converter 

### Description

Overseas Foreign Exchange (OFX) online converter. This permits a user to get a spot quote details when converting 
from one currency to another.

Please Note: I have used NextJS, TypeScript, Storybook and SWR when demonstrating this application in order to show 
how I would code a versatile and enterprise ready application. For a simple application like this, I could have 
written this as a simple CRA using fetch/axios and this would have provided a solution with less overhead.
 
### Prerequisites

Please ensure that the latest version of npm/yarn are installed 

### Installing

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
yarn start (ensure build has been done prior)
```

### Test application
```
yarn test or yarn test:watch
```
### Todo
- Given more time I would have provided a fetch mock test. Refer to https://www.leighhalliday.com/mock-fetch-jest
- Put sensitive information and end points in an env file.
- The Name, Email and Phone is not used. This would obviously be store and used in a real application
- Use the error messages supplied from API when the request fails
- Add International Codes to phone. I found an NPM package that does this called 'material-ui-phone-number' 
but this failed with Next.js in SSR as it tries to find a Window object.
- Enhance UI look and feel of page
- Add more information on UI regarding minimum transfer amounts
- Add style components to ui and incorporate a better layout structure
 
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

## Author

**Paul Caruana** 