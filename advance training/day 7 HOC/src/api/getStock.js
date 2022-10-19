export default function getStock(){

    return new Promise(res=>{
        setTimeout(()=>{
            res({
                shares: 100
            })
        },1500)
    })
}