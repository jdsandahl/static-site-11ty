# Static site builds using Eleventy aka 11ty

This project is a starting point for building static webpages using the static site generator Eleventy as a dev dependency. Included is a basic example of a Markdown (index.md) file to HTML conversion using a base template layout using Nunjucks 

# Setting up a new project

## Clone the repo

```
git@github.com:jdsandahl/static-site-11ty.git
```

```
npm install
```

# Running/Building the project

Run the following command to build the example site and serve it on the localhost

```
npm run dev
```

By running the above command, changes made to the index.md file will get rebuilt and viewable in the browser on the localhost in real-time.

Run the follow commond to just build the site without serving it to the localhost

```
npm run build
```