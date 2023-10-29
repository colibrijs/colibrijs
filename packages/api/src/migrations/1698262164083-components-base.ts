import { MigrationInterface, QueryRunner } from 'typeorm';

export class ComponentsBase1698262164083 implements MigrationInterface {
  readonly name = 'ComponentsBase1698262164083';
  readonly transaction = true;

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "components" RENAME COLUMN "name" TO "componentName"');

    await queryRunner.query(
      'ALTER TABLE "components" ADD COLUMN "packageName" text NOT NULL, ADD COLUMN "src" text NOT NULL'
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "components" RENAME COLUMN "componentName" TO "name"');
    await queryRunner.query(
      'ALTER TABLE "components" DROP COLUMN "packageName", DROP COLUMN "src"'
    );
  }
}
