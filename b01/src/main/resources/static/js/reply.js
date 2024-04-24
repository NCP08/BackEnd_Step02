
/* function앞에 async를 붙이는 것이 이 함수의 내부에 비동기로 동작한다는 의미
   실제 axis통신하는 부분에는 await를 붙여준다.
* */
async function get1(bno){
    const result = await axios.get(`/replies/list/${bno}`)

    console.log(result)
}