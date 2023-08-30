import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateComponents1693430005821 implements MigrationInterface {
  readonly name = 'CreateComponents1693430005821';
  readonly transaction = true;

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "components" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" text NOT NULL,
        CONSTRAINT "PK_0d742661c63926321b5f5eac1ad"
        PRIMARY KEY ("id")
      )`
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "components"`);
  }
}
