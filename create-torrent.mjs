// localStorage.debug = '*'

const torrentStream = require("torrent-stream")

export default (magnet) => {
  const magnetClient = torrentStream(magnet)

  magnetClient.on('ready', () => {
    console.log('torrent connected to a client.')
    console.log('files', magnetClient.files)
  })

  return magnetClient;
}