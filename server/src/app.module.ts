import { Module, HttpModule } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WordsController } from './words/words.controller'
import { join } from 'path'

// console.log(join(__dirname, '../../media', 'media'))

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '../..', 'static/media')
    //   // exclude: ['/static*']
    // }),
    HttpModule
  ],
  controllers: [AppController, WordsController],
  providers: [AppService]
})
export class AppModule {}
