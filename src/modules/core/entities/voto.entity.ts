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

@Entity('voto', { schema: 'core' })
export class VotoEntity {
    @PrimaryGeneratedColumn('uuid')
    idvoto: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de la creacion del candidato',
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
    @Column({
        name: 'horavoto',
        type: 'time',
        default: () => 'TIME',
        comment: 'Hora en que se ejercio el voto',
    })

    horavoto: string;

    @Column({
        name: 'tipovoto',
        type: 'boolean',       
        default: () => 'BOOLEAN',
        comment: 'Tipo de voto. Ej. lista A = true',
      })
      tipovoto: boolean; 

}
