function arrow (){
    setTimeout(()=>{
        console.log(this) //arrow{}
    },1000)
}
function not_arrow(){
    setTimeout(function(){
        console.log(this) // Node.js 에서는 Timeout || 브라우저에서는 Window},1000
    })
}
const p1 = new not_arrow()
const p2 = new arrow()