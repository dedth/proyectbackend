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

@Entity('detalle_cronograma', { schema: 'core' })
export class DetalleCronogramaEntity {
    @PrimaryGeneratedColumn('uuid')
    iddetallecronograma: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de cracion del detalle del cronograma',
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
        name: 'fechainiciotareacronograma',
        type: 'time',
        default: () => 'TIME',
        comment: 'Fecha de inicio de tarea del cronograma',
    })
    fechainiciotareacronograma: string;

    @Column({
        name: 'fechafinalizaciontareacronograma',
        type: 'time',
        default: () => 'TIME',
        comment: 'Fecha de finalizacion de tarea del cronograma',
    })
    fechafinalizaciontareacronograma: string;

    @Column('varchar', {
        name: 'responsabletareacronograma',
        nullable: true,
        length: 50,
        comment: 'Nombre del responsable de tarea del cronograma',
    })
    responsabletareacronograma: string;

    @Column('varchar', {
        name: 'descripciondetalletareacronograma',
        length: 500,
        comment: 'Descripcion de la tarea del cronograma',
    })
    descripciondetalletareacronograma: string;

    @Column({
        name: 'estadodetallecronograma',
        type: 'boolean',       
        default: () => 'BOOLEAN',
        comment: 'Estado del detalle del cronograma',
      })
      estadodetallecronograma: boolean; 
}
