import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateOrders1635609479346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "code",
              type: "varchar",
            },
            {
              name: "totalValue",
              type: "decimal",
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
            columnNames: ['userId'],
            referencedTableName: 'users',
            referencedColumnNames: ['id']
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("orders");
    }

}
