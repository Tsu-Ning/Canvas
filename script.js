//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //城堡主體繪製開始
  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()
  
  //左城門
  ctx.fillStyle = "#EED971FF"
  ctx.fillRect(50,200,50,150) //(x軸,y軸,寬,高)
  ctx.strokeRect(50,200,50,150) //延續地面線條設定，一樣是黑色
  
  //左城門頭蓋
  ctx.fillStyle = "#8D021F"
  ctx.fillRect(40,175,70,25)
  ctx.strokeRect(40,175,70,25)
  
  //右城門
  ctx.fillStyle = "#EED971FF"
  ctx.fillRect(300,200,25,150) //(x軸,y軸,寬,高)
  ctx.strokeRect(300,200,25,150) //延續地面線條設定，一樣是黑色
  
  //右城門頭蓋
  ctx.beginPath()
  ctx.moveTo(275,200)
  ctx.lineTo(315,175)
  ctx.lineTo(350,200)
  ctx.closePath()
    ctx.fillStyle="#8D021F"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()

  
  //拱門繪製
  ctx.beginPath()
    //右半邊
    ctx.moveTo(100,250)
    ctx.lineTo(300,250)
    ctx.lineTo(300,350)
    ctx.lineTo(250,350)
    //圓弧拱門
    ctx.arc(200,350,50,Math.PI*2,Math.PI,true)
    //左半邊
    ctx.lineTo(150,350)
    ctx.lineTo(100,350)
    ctx.closePath()
    ctx.fillStyle="#8D021F"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
    //方形主體
    ctx.beginPath()
      ctx.moveTo(150,100)
      ctx.lineTo(250,100)
      ctx.lineTo(250,200)
      ctx.lineTo(150,200)
    ctx.closePath()
    ctx.fillStyle="#EED971FF"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //方形主體2
    ctx.beginPath()
  ctx.moveTo(100,250)
      ctx.lineTo(250,100)
      ctx.lineTo(250,250)
    ctx.closePath()
    ctx.fillStyle="#8D021F"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
    //三角形尖塔
    ctx.beginPath()
      ctx.moveTo(125,100)
      ctx.lineTo(200,50)
      ctx.lineTo(275,100)
    ctx.closePath()
    ctx.fillStyle="#8D021F"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
 
  
    //窗戶
    ctx.beginPath()
      ctx.arc(200,175,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(185,175)
      ctx.lineTo(215,175)
    ctx.closePath()
      ctx.fillStyle="white"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()
  
  //左城門旗子
      ctx.beginPath()
        ctx.moveTo(75,175)
        ctx.lineTo(75,125-mouse.y/5)
        ctx.lineTo(100,140 - (time%3)-mouse.y/5)
        ctx.lineTo(75,150-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="blue"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()  
  
  //右城門旗子
      ctx.beginPath()
        ctx.moveTo(315,175)
        ctx.lineTo(315,125-mouse.y/3)
        ctx.lineTo(350,140 - (time%5)-mouse.y/3)
        ctx.lineTo(315,150-mouse.y/3)
      ctx.closePath()
      ctx.fillStyle="blue"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke() 
  
  //車子
    ctx.fillStyle="red"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})