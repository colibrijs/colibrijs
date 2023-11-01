import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateContent1698872382913 implements MigrationInterface {
  readonly name = 'CreateContent1698872382913';
  readonly transaction = true;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "content" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "props" text NOT NULL,
        "componentId" uuid NOT NULL,
        CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id")
      )`
    );
    await queryRunner.query(
      `ALTER TABLE "content"
        ADD CONSTRAINT "FK_059b827f699936306643d4f2f58" FOREIGN KEY ("componentId") REFERENCES "components"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "content" DROP CONSTRAINT "FK_059b827f699936306643d4f2f58"'
    );
    await queryRunner.query('DROP TABLE "content"');
  }
}
