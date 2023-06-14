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

  @Entity('lista', {schema: 'core'})
  export class ListaEntity {
    @PrimaryGeneratedColumn('uuid')
    idlista: string;

    @CreateDateColumn({
        name:'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de la creacion de la lista',
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
        name: 'nombrelista',
        length: 10,
        default: 'none',
        nullable: true,
        unique: true,
        comment: 'Nombre de la lista',
      })
      nombrelista: string;
    
      @Column('varchar', {
        name: 'esloganlista',
        nullable: true,
        length: 500,
        comment: 'Eslogan de la lista',
      })
      esloganlista: string;
    
      @Column('varchar', {
        name: 'plantrabajolista',
        length: 500,
        comment: 'Enlace al documento del plan de trabajo',
      })
      plantrabajolista: string; 
      
      @Column('varchar', {
        name: 'colorlista',
        length: 50,
        comment: 'Color de la lista',
      })
      colorlista: string; 
      
      @Column('varchar', {
        name: 'numerolista',
        length: 3,
        comment: 'Numero de la lista',
      })
      numerolista: string; 
      
      @Column('varchar', {
        name: 'logolista',
        length: 500,
        comment: 'Enlace al archivo del logo',
      })
      logolista: string; 
      
      @Column({
        name: 'estadolista',
        type: 'boolean',       
        default: () => 'BOOLEAN',
        comment: 'Estado de la lista',
      })
      estadolista: boolean; 
  }

  