const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html> 
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>구글단위변환</title>
      <script>
          document.addEventListener("DOMContentLoaded",()=>{
              const div = document.createElement("div");
              const input1 = document.createElement("input");
              const input2 = document.createElement("input");
              const select1 = document.createElement("select");
              const select2 = document.createElement("select");
              document.body.appendChild(div).append(input1,select1,' = ',input2,select2)
              input1.setAttribute('value',1)
              input2.setAttribute('value',1000)
  
              const omenu = ['킬로미터','미터','센티미터','밀리미터','마이크로미터']
              const fix = [1,0.001,0.00001,0.000001,0.000000001]
  
              omenu.forEach((v,i)=>{
                  let option1 = document.createElement('option')
                  select1.appendChild(option1)
                  option1.setAttribute('value', fix[i])    
                  option1.innerHTML = v
              })
              omenu.forEach((v,i)=>{
                  let option2 = document.createElement('option')
                  select2.appendChild(option2)
                  option2.setAttribute('value', fix[i]) // fix[omenu.indexof(menu)]
                  option2.innerHTML = v
              })
              const opt = document.body.querySelectorAll('option')
              opt[0].setAttribute('selected',true)
              opt[omenu.length+1].setAttribute('selected',true)
  
              let in1=1,in2=1000,sel1=1,sel2=0.001
  
              input1.addEventListener('keyup',(event)=>{
                  in1 = event.currentTarget.value
                  in2 = in1 * (sel1 / sel2)
                  input2.value = in2  
              })
              input2.addEventListener('keyup',(event)=>{
                  in2 = event.currentTarget.value
                  in1 = in2 * (sel2 / sel1)
                  input1.value = in1  
              })
              select1.addEventListener('change',(event)=>{
                  sel1 = event.currentTarget.value
                  in1 = in2 * (sel2 / sel1)
                  input1.value = in1
              })
              select2.addEventListener('change',(event)=>{
                  sel2 = event.currentTarget.value
                  in2 = in1 * (sel1 / sel2)
                  input2.value = in2
              })
          })
      </script>
  </head>
  <body>
  </body>
  </html>`)
})

app.get('/main', (req, res) => {
    res.send('main 경로로 오신 것을 환영합니다.')
})
app.get('/login', (req, res) => {
    res.send('login 경로로 오신 것을 환영합니다.')
})
app.get('/popup', (req, res) => {
    res.send('popup 경로로 오신 것을 환영합니다.')
})
app.get('/image', (req, res) => {
    res.send('image 경로로 오신 것을 환영합니다.')
})
app.get('/text', (req, res) => {
    res.send('text 경로로 오신 것을 환영합니다.')
})
app.listen(port, () => {
  console.log(`Success app listening on port ${port}`)
})