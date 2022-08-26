
let canvas = document.querySelector('canvas');
let s1= document.getElementById('b1');
let s2 =document.getElementById('b2');

let ctx= canvas.getContext('2d');


let originX =canvas.width/4
let originY=canvas.height/2
let t=0
let wave=[]


function draw()
{
    if(wave.length>350)
    {
        wave.pop()
    }
    ctx.fillStyle='white'
    let x=originX
    let y=originY

    let lastX=originX
    let lastY=originY
    ctx.fillRect(0,0,canvas.width,canvas.height)
    let a=5
    let r=80
     for(let i=0;i<a;i++)
     {
       
        let n=(i*2)+1; 
        let radious=r*(4/(n*Math.PI))
        x+=radious*Math.cos(n*t)
        y+=radious*Math.sin(n*t)


         //line draw
      ctx.beginPath()
      ctx.strokeStyle='green'
      ctx.lineJoin='round'
      ctx.lineCap='round'
      ctx.fillStyle='green'
      ctx.moveTo(lastX,lastY)
      ctx.lineTo(x,y)
      ctx.stroke()


      //circle

      ctx.beginPath()
      ctx.strokeStyle='red'
      ctx.arc(lastX,lastY,radious,0,2*Math.PI)
      ctx.stroke()

      //dots

      ctx.beginPath()
      ctx.fillStyle=''
      ctx.arc(x,y,3,0,2*Math.PI)
      ctx.fill()
       

      ctx.beginPath()
      ctx.fillStyle='red'
      ctx.lineTo(x,y)
      ctx.stroke()






      lastX=x
      lastY=y
      

   

    }
    wave.unshift(y)
    //drawing line from
    ctx.beginPath()
    ctx.strokeStyle='blue'
    ctx.lineJoin='round'
    ctx.lineCap='round'
    ctx.fillStyle='green'
    ctx.moveTo(x,y)
    ctx.lineTo(400,wave[0])
    ctx.stroke()

    //drawing wave
    ctx.beginPath()
    ctx.strokeStyle='black'
    ctx.lineJoin='round'
    ctx.lineCap='round'
    ctx.fillStyle='white'
    ctx.moveTo(400,wave[0])
    for(let i=0;i<wave.length;i++)
    {
    
      ctx.lineTo(400+i,wave[i])
      ctx.stroke() 
    }
    t+=0.03
  }




setInterval(()=>draw(),21)