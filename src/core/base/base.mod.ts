import {
  DataSource,
  DeepPartial,
  Entity,
  EntityTarget,
  ObjectLiteral,
  Repository,
} from 'typeorm'

export class BaseMod<T extends ObjectLiteral> {
  public repository!: Repository<T>
  public entity!: EntityTarget<T>
  public dataSource!: DataSource

  public constructor(entity: EntityTarget<T>, dataSource: DataSource) {
    this.entity = entity
    this.dataSource = dataSource
    this.repository = this.dataSource.getRepository(this.entity)
  }

  public async create(data: DeepPartial<T>): Promise<T> {
    return this.repository.create(data)
  }

  public async findAll(): Promise<T[]> {
    return this.repository.find()
  }

  public async findOne(id: number): Promise<T | null> {
    return this.repository.findOneBy({ id } as any)
  }

  public async update(id: number, data: Partial<T>): Promise<T | null> {
    await this.repository.update(id, data)
    return this.findOne(id)
  }

  public async delete(id: number): Promise<void> {
    await this.repository.delete(id)
  }

  public async save(entity: T): Promise<T> {
    return await this.repository.save(entity)
  }

  public async clear(): Promise<void> {
    await this.repository.clear()
  }
}
