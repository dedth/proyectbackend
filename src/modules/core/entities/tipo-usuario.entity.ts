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

  @Entity('tipo_usuario', {schema: 'core'})
  export class TipoUsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    idtipousuario: string;

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
        name: 'nombretipousuario',
        length: 50,
        nullable: true,
        unique: true,
        comment: 'Nombre del tipo de usuario. Ej. Docente',
      })
      nombretipousuario: string;
  }
