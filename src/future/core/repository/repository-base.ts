import { EntityMetadata } from "../../../metadata/EntityMetadata"
import { AnyDataSource } from "../data-source"
import { AnyDriver } from "../driver"
import { AnyEntity } from "../entity"

/**
 * Base Repository interface for all driver Repository implementations.
 */
export interface RepositoryBase<
  Driver extends AnyDriver,
  Entity extends AnyEntity
> {
  /**
   * Unique type identifier.
   */
  "@type": "Repository"

  /**
   * Data source of this repository.
   */
  dataSource: AnyDataSource // todo: CoreDataSource<Types, Collection>

  /**
   * Entity metadata of the entity managed by this repository.
   */
  metadata: EntityMetadata

  /**
   * Entity that is being managed by this repository.
   */
  entity: Entity
}
