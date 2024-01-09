import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "tables" })
export class Table {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  table_name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: "double precision", precision: 10, scale: 5, nullable: true })
  table_charges: number;

  @Column({ default: true })
  is_available: boolean;

  @Column({ default: true })
  is_publish: boolean;

  @Column()
  shop_id: string;

  @Column({ nullable: true })
  tempo_code: string;

  @Column({ nullable: true })
  table_qr: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
