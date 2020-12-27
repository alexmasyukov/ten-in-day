import { Injectable, HttpService } from '@nestjs/common'
// import { AxiosResponse, ResponseType } from 'axios'
// import { Observable, forkJoin } from 'rxjs'
// import { map } from 'rxjs/operators'

import * as fs from 'fs'
// import stream from 'stream'
// import { Writable } from 'stream'

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello() {
    // const a = this.httpService
    // return this.httpService
    //   .get('https://jsonplaceholder.typicode.com/todos/1')
    //   .pipe(map((res) => res.data))

    interface Word {
      en: string
      ru: string
    }

    const words: Array<Word> = [
      {
        en: 'advantage',
        ru: 'достоинство'
      },
      {
        en: 'prevents',
        ru: 'избежать'
      },
      {
        en: 'thus',
        ru: 'Таким образом'
      },
      {
        en: 'underlying',
        ru: 'лежащий в основе'
      }
    ]

    return 'server'

    // const en = 'advasntage'
    // const textToAudioRu = 'дост+оинство'
    // const audioFilename = `media/ru/${en}_1.ogg`

    // params.append('name', '')

    // const wordsPromises = words.map((word) => {
    //   const audioFilename = word.en

    //   const params = new URLSearchParams()
    //   params.append('text', word.ru)
    //   params.append('lang', 'ru-RU')
    //   params.append('speed', '1.1')
    //   params.append('voice', 'filipp')
    //   params.append('emotion', 'neutral')
    //   params.append('folderId', 'b1g2mvi7sb9qmh3os2l4')

    //   return this.httpService
    //     .request({
    //       method: 'post',
    //       url: 'https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize',
    //       params: params,
    //       headers: {
    //         name: audioFilename,
    //         Authorization:
    //           'Bearer t1.9euelZqSjM2clpzGksuNmIuWjsmYnu3rnpWamJGNipCOis_PlZbJkM_Ll57l9PdLP2AA-u8nEXXR3fT3C25dAPrvJxF10Q.Pa-uIv1qDQ9LQ5crHWZibV8nvXFcGxki3EA5aUMG_XVMDByhuH-5PtkfTc2CGYgdNLsmZnb_5w1LHHNgQCFADQ'
    //       },
    //       responseType: 'stream'
    //     })
    //     .toPromise()
    // })

    // return Promise.all(wordsPromises).then((responses) => {
    //   for (const response of responses) {
    //     const name = response.config.headers.name

    //     response.data.pipe(fs.createWriteStream(`media/ru/${name}_1.ogg`))
    //   }

    //   return 'new version 5'
    // })
  }
}
