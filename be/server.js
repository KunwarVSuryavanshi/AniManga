const express = require('express')
const helmet = require('helmet')
const axios = require('axios')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()

// app.use(hostValidation({
//   hosts: ['127.0.0.1:3000',
//     'localhost:3000',
//     'mydomain.com',
//     /.*\.mydomain\.com$/]
// }))

app.use('/', createProxyMiddleware({ target: 'https://vidstream.pro/info/E6JR5W4D9Y3X?domain=gogoanime.lol&skey=dcb0a59359d3f732f8b545fd2908e497', changeOrigin: true }));

app.get('/', (req, response) => {
  response.send("Hello World")
  axios.get('https://dbrnk.vizcloud2.online/simple/EqPFI_IQBAro1HhYl67rC8AuoVxcu_fxF0N7rqk+wYMnU94US2El/br/list.m3u8')
    .then(res => console.log(res))
    .catch(err => console.log("Hello",err.message))
})

app.listen('5000', () => console.log("********Server started at port 5000************"))