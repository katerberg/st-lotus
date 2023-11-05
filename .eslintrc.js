module.exports = {
  "extends": [
    "eslint:recommended", 
    "next",
   'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  "plugins": [
    "react", 
    "jest",
'@typescript-eslint',
  ],
  "env": {
    "node": true,
    "es2020": true,
    "jest": true
  },
}
