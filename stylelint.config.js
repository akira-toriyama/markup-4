/** @type {import('stylelint').Config} */
module.exports = {
  plugins: ["stylelint-prettier"],
  customSyntax: "postcss-scss",
  extends: ["stylelint-config-standard", "stylelint-config-css-modules"],
  rules: {
    "selector-class-pattern": null,
  },
};
