import { boolean } from 'joi';
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

  @Entity('carrera', {schema: 'core'})
  export class CarreraEntity {
    @PrimaryGeneratedColumn('uuid')
    idcarrera: string;

    @CreateDateColumn({
        name:'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de la creacion de la carrera',
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
        name: 'nombrecarrera',
        nullable: true,
        length: 50,
        comment: 'Nombre de la carrera',
      })
      nombrecarrera: string;
    
      @Column({
        name: 'estado',
        type: 'boolean',       
        default: () => 'BOOLEAN',
        comment: 'Estado del candidato',
      })
      estado: boolean; 
  }
