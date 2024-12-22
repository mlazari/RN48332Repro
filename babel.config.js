const loose = false;

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-transform-class-properties', {loose}],
    ['@babel/plugin-transform-private-methods', {loose}],
    ['@babel/plugin-transform-private-property-in-object', {loose}],
  ],
};
