const axios = require('axios')
const fs = require('fs')
const Buffer = require('buffer').Buffer

const params = new URLSearchParams()
params.append('text', 'вот этот текст')
params.append('lang', 'ru-RU')
params.append('speed', '1')
params.append('voice', 'alena')
params.append('emotion', 'neutral')
params.append('folderId', 'b1g2mvi7sb9qmh3os2l4')

axios({
  method: 'post',
  url: 'https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize',
  params: params,
  headers: {
    Authorization:
      'Bearer t1.9euelZqSjM2clpzGksuNmIuWjsmYnu3rnpWamJGNipCOis_PlZbJkM_Ll57l9PdLP2AA-u8nEXXR3fT3C25dAPrvJxF10Q.Pa-uIv1qDQ9LQ5crHWZibV8nvXFcGxki3EA5aUMG_XVMDByhuH-5PtkfTc2CGYgdNLsmZnb_5w1LHHNgQCFADQ'
  },
  responseType: 'stream'
})
  .then(function (response) {
    // console.log(buf)
    response.data.pipe(fs.createWriteStream('4.ogg'))

    // buf.writeFile('1.ogg')
    // fs.writeFileSync('2.ogg', response.data, (err) => {
    //   if (err) throw err
    //   console.log('The file has been saved!')
    // })

    // handle successdf
    // console.log(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
