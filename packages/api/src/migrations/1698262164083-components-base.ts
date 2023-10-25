import { MigrationInterface, QueryRunner } from 'typeorm';

export class ComponentsBase1698262164083 implements MigrationInterface {
  readonly name = 'ComponentsBase1698262164083';
  readonly transaction = true;

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "components"
        RENAME COLUMN "name" to "componentName",
        ADD "packageName" text NOT NULL,
        ADD "src" text NOT NULL;
      `
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "components"
        RENAME COLUMN "componentName" to "name",
        DROP COLUMN "packageName",
        DROP COLUMN "src";
      `
    );
  }
}
