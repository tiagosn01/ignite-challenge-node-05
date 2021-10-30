import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateGenres1635609222235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "genres",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "description",
              type: "varchar",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
          ],
        })
      )

      await queryRunner.createForeignKey(
        'stuff',
        new TableForeignKey({
          columnNames: ['gameId'],
          referencedTableName: 'games',
          referencedColumnNames: ['id']
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("genres");
    }

}
