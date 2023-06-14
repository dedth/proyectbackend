import { DataSource } from 'typeorm';
import {

  CandidatoEntity,
  CandidatoListaEntity,
  CargoEntity,
  CarreraEntity,
  ConfiguracionEntity,
  CronogramaEntity,
  DetalleCronogramaEntity,
  ListaEntity,
  PeriodoLectivoEntity,
  RolEntity,
  TareaEntity,
  TipoListaEntity,
  TipoUsuarioEntity,
  UsuarioEntity,
  VotoEntity,

} from '@core/entities';
import { DataSourceEnum, RepositoryEnum } from '@shared/enums';

export const coreProviders = [
  {
    provide: RepositoryEnum.CANDIDATO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CandidatoEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.CANDIDATOLISTA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CandidatoListaEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.CARGO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CargoEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.CARRERA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CarreraEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.CONFIGURACION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ConfiguracionEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.CRONOGRAMA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CronogramaEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.DETALLECRONOGRAMA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DetalleCronogramaEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.LISTA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ListaEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.PERIODOLECTIVO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PeriodoLectivoEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.ROL_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RolEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.TAREA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TareaEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.TIPOLISTA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TipoListaEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.TIPOUSUARIO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TipoUsuarioEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.USUARIO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UsuarioEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },
  {
    provide: RepositoryEnum.VOTO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(VotoEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE]
  },

];
