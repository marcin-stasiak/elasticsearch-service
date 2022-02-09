import { Module } from '@nestjs/common';

import { ElasticSearchService } from './elastic-search.service';

@Module({
  providers: [ElasticSearchService],
})
export class ElasticSearchModule {}
