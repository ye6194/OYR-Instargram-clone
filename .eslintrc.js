module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "airbnb-base", "prettier"],
    /* extends 이렇게 설정하니까 <!DOCTYPE html>에 오류 뜨는거 없어짐 */
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        parser: "babel-eslint",
    },
    "rules": {
    }
}
