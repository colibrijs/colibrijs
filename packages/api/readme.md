# @colibrijs/api

## Migrations

You can use all migration [instruments](https://typeorm.io/migrations) that typeorm gives. But
keep in mind that we have aliases for every migration command. Don't specify dataSource parameter in
these commands. Be aware that all migrations are running in none transaction mode. So if you want to
use transactions in your migration, specify property **transaction** with value **true** in your
migration class. It is recommended.

### Commands

- **migrations:create** *&lt;path&gt;* - create a new empty migration
- **migrations:generate** *./src/migrations/transaction-name* - generate migration from source code
- **migrations:run** - run migrations
- **migrations:revert** - revert the changes
