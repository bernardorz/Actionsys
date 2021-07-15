import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TabelaDeFuncionarios1626132711964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable( new Table({
            name : 'funcionarios',
            columns : [
              { name: 'id',
                type: 'int',
                isGenerated: true,
                isPrimary: true,
                generationStrategy: 'increment'
            },
              {
                name : 'nome',
                type : "varchar(200)"
              },
              {
                name : 'email',
                type : 'varchar(100)'
              },
              {
                name : 'data_nascimento',
                type : 'date'
              },
              {
                name : 'data_admissao',
                type : 'date'
              },
              {
                name : 'setor',
                type : 'varchar(100)'
              },
              {
                name : 'cargo',
                type : 'varchar(100)'
              },
              {
                name : 'nivel',
                type : 'varchar(100)'
              },
              {
                name : 'audit_data_insert',
                type : 'timestamp',
                default : 'now()'
              },
              {
                name : 'audit_data_update',
                type : 'timestamp',
                default : 'now()'
              }
            ]
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('funcionarios');
    }

}
