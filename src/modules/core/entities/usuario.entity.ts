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

  @Entity('usuario', {schema: 'core'})
  export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    idusuario: string;

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
        name: 'cedula',
        length: 10,
        default: 'none',
        nullable: true,
        unique: true,
        comment: 'Cedula del usuario',
      })
      cedula: string;
    
      @Column('varchar', {
        name: 'nombreusuario',
        nullable: true,
        length: 50,
        comment: 'Nombre del usuario',
      })
      nombreusuario: string;

      @Column('varchar', {
        name: 'apellidousuario',
        nullable: true,
        length: 50,
        comment: 'Apellido del usuario',
      })
      apellidousuario: string;
    
      @Column('varchar', {
        name: 'semestre',
        nullable: true,
        length: 50,
        comment: 'Semestre actual del usuario',
      })
      semestre: string;
    
      @Column('varchar', {
        name: 'correo',
        nullable: true,
        length: 50,
        comment: 'Correo electronico del usuario',
      })
      correo: string;
    
      @Column('varchar', {
        name: 'tipousuario',
        nullable: true,
        length: 50,
        comment: 'tipo del usuario Ej. votante',
      })
      tipousuario: string;
    
      @Column('varchar', {
        name: 'claveusuario',
        nullable: true,
        length: 50,
        comment: 'Clave del usuario', /*PREGUNTAR CLAVE*/
      })
      claveusuario: string;
    
      @Column('varchar', {
        name: 'periodoultimovoto',
        nullable: true,
        length: 50,
        comment: 'Ultimo periodo de voto del usuario',
      })
      periodoultimovoto: string;
    
      @Column({
        name: 'estadovoto',
        type: 'boolean',       
        default: () => 'BOOLEAN',
        comment: 'Estado del voto del usuario Ej. No Voto = False',
      })
      estadovoto: boolean; 
    
      @Column({
        name: 'estadousuario',
        type: 'boolean',       
        default: () => 'BOOLEAN',
        comment: 'Estado del usuario. Ej. Activo = True',
      })
      estadousuario: boolean; 
  }
