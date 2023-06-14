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

@Entity('periodo_lectivo', { schema: 'core' })
export class PeriodoLectivoEntity {
    @PrimaryGeneratedColumn('uuid')
    idperiodolectivo: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de creacion del periodo lectivo',
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
        name: 'nombreperiodolectivo',
        length: 50,
        default: 'none',
        nullable: true,
        unique: true,
        comment: 'Nombre del periodo lectivo. Ej. Ago 2023 - Abr 2024',
    })
    cedula: string;

    @Column({
        name: 'fechainicioperiodolectivo',
        type: 'time',
        default: () => 'TIME',
        comment: 'Fecha de inicio del periodo lectivo',
    })
    fechainicioperiodolectivo: string;

    @Column({
        name: 'fechafinalizacionperiodolectivo',
        type: 'time',
        default: () => 'TIME',
        comment: 'Fecha de finalizacion del periodo lectivo',
    })
    fechafinalizacionperiodolectivo: string;
}
