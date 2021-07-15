import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'


@Entity('funcionarios')
class Employees {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  email : string;

  @Column()
  data_nascimento : Date;

  @Column()
  data_admissao : Date;

  @Column()
  setor : string; 

  @Column()
  cargo : string;

  @Column()
  nivel : string;

  @CreateDateColumn()
  audit_data_insert: Date;

  @UpdateDateColumn()
  audit_data_update: Date;
}

export  { Employees };