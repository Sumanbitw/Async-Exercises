// <----------------------1. write your own function which takes a callback---------------------->

const strLength = (myName => {
    let length = myName.length
    return `OMG! my name is ${length} char long` ;
}
)
console.log(strLength("suman"));
console.log(strLength("samrat"));

// <----------------------2. function which takes two callbacks--------------------------------->

const willThanosKillMe = ((myName,successCb,failureCb) => {
    let length = myName.length % 2;
    if( length !== 0 ){
        return successCb();
    }else {
        return failureCb();
    }
})

const successCb = (() => console.log("Sorry! You've to die"))
const failureCb = (() => console.log("Congrats! You're safe now"))

willThanosKillMe("suman",successCb,failureCb)
willThanosKillMe("washington",successCb,failureCb)

// <----------------------3. use setTimeout()-------------------------------------------------->

const myName = () => console.log("suman ghosh")

setTimeout((myName),5000)

setTimeout(()=>console.log("suman ghosh"),5000)

// <-----------------------------4. setInterval-------------------------------> 
// <-----a. write a function which takes a message and time. The function should print that message every X interval.----->

setInterval(() => console.log("suman ghosh"), 1000);

// <------b. Write a function which takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!"------->

const printBangBang = (num,msg) => {
    let result = setInterval(() => {
      if(num===0){
          console.log(msg)
          clearInterval(result)
      }else{
          console.log(num--)
      } 
    }, 1000);
} 

printBangBang(10,"Bang Bang" )

// 6. understand promise constructor

function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`);
        }
        resolve(`from server: ${msg}`);
      }, 3000);
    });
  }

  console.log(fakeFetch("suman"))
  console.log(fakeFetch("suman",true))

// <-----------------------------7. print data on success--------------------------------------->
 
console.log(fakeFetch("suman").then(data=>console.log(data)))

// <----------------------------8. print data on success and print error on failure------------>
 
console.log(fakeFetch("suman",true).then(data=>console.log(data)).catch(err=>console.log(err)))

//<----------------------------- 9. chaining---------------------------------------------------->

const getServerResponseLength = (msg) => {
    return fakeFetch(msg)
    .then(data=>data.length)
}

console.log(getServerResponseLength("suman").then(length=>console.log(length)))

// <---------------------------10. waterfall Data--------------------------------------------->

const syncCallsToServer = (msg1,msg2) => {
    return fakeFetch(msg1)
    .then(data => fakeFetch( data + msg2))
}

console.log(syncCallsToServer("suman","ghosh").then(msg=>console.log(msg)))

// <---------------------------11. async await------------------------------------------------> 

const getDataFromServer = async(msg) => {
    let data = await fakeFetch(msg)
    console.log(data)
}

console.log(getDataFromServer("suman"))

const getMessage = async(msg1 , msg2) => {
    let dataFromServerMessageOne = await fakeFetch(msg1);
    let dataFromServerMessageTwo = await fakeFetch(dataFromServerMessageOne +" " + msg2);
    console.log(dataFromServerMessageTwo);
}

console.log(getMessage("suman","ghosh"))