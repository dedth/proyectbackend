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

  @Entity('candidato', {schema: 'core'})
  export class CandidatoEntity {
    @PrimaryGeneratedColumn('uuid')
    idcandidato: string;

    @CreateDateColumn({
        name:'created_at',
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
    
      @Column('varchar', {
        name: 'dignidadcandidato',
        nullable: true,
        length: 50,
        comment: 'Nombre de la dignidad que ocupa el candidato',
      })
      dignidadcandidato: string;
    
      @Column('varchar', {
        name: 'matriculacandidato',
        length: 500,
        comment: 'Enlace al documento de matricula',
      })
      matriculacandidato: string; 
  }
