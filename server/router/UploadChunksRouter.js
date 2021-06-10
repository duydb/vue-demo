const express = require('express')
const router = express()

router.post('/register', function (req, res) {
  // todo:
  //  Input: filename, filesize and number of chunks
  //  Output: IdUpload: String

  console.log(res.body.name)
  console.log(res.body.size)
  console.log(res.body.numberOfChunks)

})

router.post('/upload/:id', function (req, res) {
  // todo:
  //  Input: idUpload, chunkIndex, chunkFile
  //  Output: isSuccess: Boolean. isFinished: Boolean (Finish all process)

  console.log(res.body.name)
  console.log(res.body.size)
  console.log(res.body.numberOfChunks)

})

router.post('/get/:id', function (req, res) {
  // todo: Get Uploaded File
  //  Input: idUpload, chunkIndex, chunkFile
  //  Output: isSuccess: Boolean. isFinished: Boolean (Finish all process)

  console.log(res.body.name)
  console.log(res.body.size)
  console.log(res.body.numberOfChunks)

})
