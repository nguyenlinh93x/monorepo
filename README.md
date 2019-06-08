# Monorepo

Guideline: https://medium.com/grand-parade/monorepo-setup-with-lerna-typescript-babel-7-and-other-part-4-9a468e45c1c3

Add a module: <br/>
- mkdir [dir-name] && cd [dir-name]
- yarn init
- yarn workspace [module-name] add -P [...Your peer dependency from root package.json]
- Add module: yarn lerna add [lib-module] --scope=[your-module]
