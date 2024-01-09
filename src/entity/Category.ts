import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" })
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name_default: string;

  @Column({ nullable: true })
  name_en: string;

  @Column()
  shop_id: string;
}
