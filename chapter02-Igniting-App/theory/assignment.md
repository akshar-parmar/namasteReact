
## Assignment 2

#### What is `NPM`?
A: It is a tool used for package management and the default package manager for Node projects. NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.
- `npm` alternative is `yarn`
 How to initialize npm?
```bash
  npm init
```
`npm init -y` can be used to skip the setup step, npm takes care of it and creates the `package.json` file automatically , but without configurations.


#### What is `Parcel/Webpack`? Why do we need it?
A: Parcel/Webpack is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features. It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.

#### Parcel Features:
- HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
- File watcher algorithm - made with C++
- Minification
- Cleaning our code
- DEV and production Build
- Super fast building algorithm
- Image optimization
- Caching while development
- Compresses
- Compatible with older version of browser
- HTTPS in dev
- Port Number
- Consistent hashing algorithm
- Zero Configuration
- Automatic code splitting




#### What is `.parcel-cache`

A: `.parcel-cache` is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode

#### What is `npx`?
A: `npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package


#### What is difference between `dependencies` vs `devDependencies`

In the context of Node.js and npm (Node Package Manager), both `dependencies` and `devDependencies` are fields in your `package.json` file that specify different types of packages and their versions that your project depends on. However, they serve different purposes and are used in different scenarios:

1. **dependencies:**
   The `dependencies` field in your `package.json` file lists the packages that your application or project needs to run in a production environment. These packages are essential for the actual functionality of your application when it's deployed and used by users. They are installed when you run `npm install` without any specific flags.

   Example `dependencies` in `package.json`:
   ```json
   "dependencies": {
     "express": "^4.17.1",
     "react": "^17.0.2"
   }
   ```

   In this example, `express` and `react` are packages required for the production runtime of your application.

2. **devDependencies:**
   The `devDependencies` field lists the packages that are only needed during development and testing of your application. These packages include tools, libraries, and utilities that help with tasks like testing, linting, building, and other development-related activities. They are not essential for the actual runtime behavior of your application and are typically not included in the production build.

   Example `devDependencies` in `package.json`:
   ```json
   "devDependencies": {
     "jest": "^27.0.6",
     "eslint": "^7.32.0"
   }
   ```

   In this example, `jest` and `eslint` are packages used for testing and code linting during development.

Using separate `dependencies` and `devDependencies` allows for more efficient package management:

- `dependencies` are installed when you deploy your application for production, ensuring only essential packages are included.
- `devDependencies` are not included in the production build, reducing the size of your application.

When you run `npm install` without any flags, both `dependencies` and `devDependencies` are installed by default. However, when you want to install only the `dependencies`, you can use the `--production` flag:

```sh
npm install --production
```

Similarly, if you want to install only the `devDependencies` (useful when setting up a development environment on a server, for example), you can use the `--only=dev` flag:

```sh
npm install --only=dev
```

By clearly differentiating between `dependencies` and `devDependencies`, you can ensure that your project's production environment only includes the packages necessary for its runtime functionality, while development-related tools remain isolated to your development environment.

#### What is Tree Shaking?

`Tree shaking` is a technique used in modern JavaScript bundlers like Parcel (as well as Webpack) to optimize the size of the bundled code by eliminating unused code `(dead code)` from the final output. The term "tree shaking" comes from the idea of shaking a tree to make dead leaves fall off. In the context of JavaScript, it means removing parts of the code that are not used in your application, thus reducing the bundle size and `improving performance`.

When you `import` modules or functions from a package in your code, there might be parts of the package that you `don't actually use`. Tree shaking `identifies` and `removes` these unused parts during the `bundling process`, ensuring that only the code you need is included in the final bundle.
```sh
npm install -D parcel
or
npm install --save-dev parcel
```

#### What is Hot Module Replacement?

Hot Module Replacement (HMR) is a feature in modern web development build tools like Parcel, which provides a seamless development experience by allowing developers to see instant updates in the browser as they make changes to their code. HMR helps avoid the need to manually refresh the browser every time a code change is made, making the development process more efficient and productive.

#### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

- HMR (Hot Module Replacement) - adds, or removes modules while an application is running, without a full reload.
- File watcher algorithm - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
- Minification - Minification is the process of minimizing code and markup in your web pages and script files.
- Image optimization
- Caching while development

#### What is `.gitignore`? What should we add and not add into it?
A: The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository. The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore. package-lock.json should not add into your .gitignore file. we should include those things in .gitignore that we can regenerate for eg node_modules can be regenerated using package-lock.json file, so why to include it in git repo.
[![Screenshot-2023-08-19-133450.png](https://i.postimg.cc/4xLvyy8R/Screenshot-2023-08-19-133450.png)](https://postimg.cc/zyhHPzZx)




#### What is the difference between `package.json` and `package-lock.json`

when we type npm init package.json file is created
when we install some packages/library , using for eg. npm install express, then node_modules and package-lock.json are created. node_modules have all the files which are required by express and express also depends on certain thing all are install. a ->b, b->c then a->c which is transitive dependencies. remember include node_modules inside .gitignore file

#### Why should I not modify `package-lock.json?
A: `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.
we have been listening that my code is working in development server but not on production server. This happens when you have modified package-lock.json file. This can lead to `mismatch of version's` , `dependencies difference` etc.



#### What is node_modules ? Is it a good idea to push that on git?

A:  `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path). `Don't push node_modules` in github because it contains lots of files(more than 100 MB), it will cost you memory space.

#### What is the `dist` folder?

A: The `/dist folde`r contains the `minimized version` of the source code. The code present in the /dist folder is actually the code which is used on `production web applications`. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems

#### What is `browserlists`?
Using browserslist helps ensure that your web application is compatible with a range of browsers, which is essential for providing a consistent user experience across different devices and platforms.

source : https://parceljs.org/getting-started/webapp/