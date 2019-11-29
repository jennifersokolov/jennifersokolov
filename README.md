[![Netlify Status](https://api.netlify.com/api/v1/badges/89404160-3ef8-43b4-9c06-444c97920f40/deploy-status)](https://app.netlify.com/sites/jennifersokolov/deploys)

# Jennifer Sokolov Website Repository

This site is built with [Eleventy Netlify Boilerplate](https://templates.netlify.com/template/eleventy-netlify-boilerplate/). Permissions can be granted by the site owner (Jennifer) or you can make a pull request to the repository.

## Local development

### 1. Clone this repository:

```
git clone https://github.com/jennifersokolov/jennifersokolov
```


### 2. Navigate to the directory

```
cd jennifersokolov
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies

```
npm install
```

### 4. Edit _data/metadata.json

This file contains your site title and author details.

### 5. Run Eleventy (builds the site)

```
npx eleventy
```

Or build automatically when a template changes:
```
npx eleventy --watch
```

Run the site on a local host:
```
npx eleventy --serve
```

Or in debug mode:
```
DEBUG=* npx eleventy
```

## Bug reports, feature requests, etc

Feel free to submit a PR.
