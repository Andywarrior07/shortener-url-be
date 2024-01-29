import { Module } from '@nestjs/common';
import { OdmUrloPersistenceModule } from './odm/odm-persistence.module';

@Module({
  imports: [OdmUrloPersistenceModule],
  exports: [OdmUrloPersistenceModule],
})
export class ShortenersInfrastructureModule {}
