import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('cargo', { schema: 'core' })
export class CargoEntity {
    @PrimaryGeneratedColumn('uuid')
    idcargo: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de la asignacion del cargo',
    })

    createdAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamptz',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamptz',
    })
    deleteAt: Date;
    /*
      @OneToOne(() => CatalogueEntity)
      @JoinColumn({ name: 'address_id' })
      address: CatalogueEntity;
    
      @ManyToOne(() => CatalogueEntity)
      @JoinColumn({ name: 'state_id' })
      state: CatalogueEntity;
    */
    @Column('varchar', {
        name: 'id',
        length: 10,
        default: 'none',
        nullable: true,
        unique: true,
        comment: 'Codigo alfanumerico del cargo',
    })
    id: string;

    @Column('varchar', {
        name: 'nombrecargo',
        nullable: true,
        length: 50,
        comment: 'Nombre del cargo',
    })
    nombrecargo: string;

}