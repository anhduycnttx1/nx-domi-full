import { Entity, Column, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class EUser {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ length: 80, unique: true })
  username: string

  @Column({ length: 200 })
  hash: string

  @Column({ length: 200 })
  rtHash: string

  @Column({ unique: true, length: 80 })
  email: string

  @Column({ default: true })
  isActive: boolean

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date
}
