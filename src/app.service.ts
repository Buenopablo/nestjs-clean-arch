import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module';

@Module({
  imports: [EnvConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
