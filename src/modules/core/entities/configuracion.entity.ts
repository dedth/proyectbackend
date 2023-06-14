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

  @Entity('configuracion', {schema: 'core'})
  export class ConfiguracionEntity {
    @PrimaryGeneratedColumn('uuid')
    idconfiguracion: string;

    @CreateDateColumn({
        name:'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de configuracion',
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
        name: 'codigoreseteoclave',
        length: 4,
        default: 'none', /*no se que hace*/
        nullable: true,
        unique: true,
        comment: 'Codigo reseteo clave',
      })
      codigoreseteoclave: string;
    
      @Column({
        name: 'fechaemisioncodigoreseteo',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de emision del codigo de reseteo'
      })
      fechaemisioncodigoreseteo: Date;
    
      @Column({
        name: 'duracioncodigoreseteoclave',
        type: 'time',
        default: () => 'TIME', /*PREGUNTAR*/
        comment: 'Tiempo de duracion del codigo ej. 5 min',
      })
      duracioncodigoreseteoclave: string; 

      
      @Column({
        name: 'fechavencimientocodigoreseteo',
        type: 'time',
        default: () => 'TIME', /*PREGUNTAR*/
        comment: 'Tiempo de duracion del codigo ej. 11/07/2023 23:59:59',
      })
      fechavencimientocodigoreseteo: string;
  }
