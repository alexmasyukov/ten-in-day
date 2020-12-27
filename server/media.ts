//Observable<AxiosResponse<Writable>>
// return a
// .toPromise()

// a.then((res: AxiosResponse<Writable>) => {
//   res.data.pipe(fs.createWriteStream('4.ogg'))
// })

// console.log(a)

// response.pipe(fs.createWriteStream('4.ogg'))
// console.log(response)

// response.data.pipe(fs.createWriteStream('4.ogg'))

// .then(function (response) {
//   // console.log(buf)
//   response.data.pipe(fs.createWriteStream('4.ogg'))

//   // buf.writeFile('1.ogg')
//   // fs.writeFileSync('2.ogg', response.data, (err) => {
//   //   if (err) throw err
//   //   console.log('The file has been saved!')
//   // })

//   // handle successdf
//   // console.log(response.data)
// })
// .catch(function (error) {
//   // handle error
//   console.log(error)
// })

// this.httpService.request({
//   method: 'post',
//   url: 'https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize',
//   params: params,
//   headers: {
//     name: audioFilename,
//     Authorization:
//       'Bearer t1.9euelZqSjM2clpzGksuNmIuWjsmYnu3rnpWamJGNipCOis_PlZbJkM_Ll57l9PdLP2AA-u8nEXXR3fT3C25dAPrvJxF10Q.Pa-uIv1qDQ9LQ5crHWZibV8nvXFcGxki3EA5aUMG_XVMDByhuH-5PtkfTc2CGYgdNLsmZnb_5w1LHHNgQCFADQ',
//   },
//   responseType: 'stream',
// })
// .pipe(map((res) => res.data.pipe(fs.createWriteStream(audioFilename))))
