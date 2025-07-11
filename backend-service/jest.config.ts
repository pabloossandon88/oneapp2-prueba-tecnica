export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };
  