const OpenAPI = require('openapi-typescript-codegen');

OpenAPI.generate({
    input: './spec.json',
    output: './generated',
});

// Or by providing the content of the spec directly 🚀
OpenAPI.generate({
    input: require('./spec_file/spec.json'),
    output: './output',
    client: 'xhr'
});