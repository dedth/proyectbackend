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

  @Entity('cronograma', {schema: 'core'})
  export class CronogramaEntity {
    @PrimaryGeneratedColumn('uuid')
    idcronograma: string;

    @CreateDateColumn({
        name:'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de creacion de actividad del cronograma',
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
        name: 'periodolectivo',
        length: 10,
        default: 'none',
        nullable: true,
        unique: true,
        comment: 'Periodo lectivo en que se lleva a cabo el proceso electoral',
      })
      periodolectivo: string;
    
      @Column({
        name: 'fechacreacioncronograma',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de creacion del cronograma',
      })

      fechacreacioncronograma: Date;
    
      @Column('varchar', {
        name: 'responsablecronograma',
        length: 50,
        comment: 'Nombre del responsable del cronograma',
      })
      responsablecronograma: string; 
  }
