import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    ignores: ['public/**/*.html', 'public/**/*.css']
  },
  js.configs.recommended,
  {
    files: ['public/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: globals.browser
    }
  }
]

