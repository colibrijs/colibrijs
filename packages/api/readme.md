# @colibrijs/api

## Migrations

You can use all migration [instruments](https://typeorm.io/migrations) that typeorm gives. But
keep in mind that we have aliases for every migration command. Don't specify dataSource parameter in
these commands. Be aware that all migrations are running in none transaction mode. So if you want to
use transactions in your migration, specify property **transaction** with value **true** in your
migration class. It is recommended.

### Commands

- **migration:create** *&lt;path&gt;* - create a new empty migration
- **migration:generate** *./src/migrations/transaction-name* - generate migration from source code
- **migrations:run** - run migrations
- **migrations:revert** - revert the changes

## OpenAPI

The API generates a Swagger documentation, which is available on the API host at `/swagger`. You can
generate an API client from the OpenAPI schema.

1. Follow the linl to `/swagger`.
1. Follow the link to OpenAPI.
2. Choose any tool for generating clients from the OpenAPI schema.
3. Use this tool.

For example, if you want to generate a TypeScript package with an API client, you can use
[swagger-typescript-api](https://www.npmjs.com/package/swagger-typescript-api). Just run this
command, and the API client will be ready for use:

```bash
npx swagger-typescript-api \
  --clean-output \
  --extract-request-params \
  --extract-request-body \
  --extract-response-body \
  --extract-response-error \
  --name "colibrijs-api" \
  --output ./src \
  --patch \
  --path INSERT-URL-TO-OPENAPI-HERE \
  --unwrap-response-data
```
