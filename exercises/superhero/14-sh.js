const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];
const myLifeSummedUp2 = {1: "😀", 2: "😁", 3: "😂", 4: "🤣"};


for (let item in myLifeSummedUp) {
    console.log(item); //🤔?
}

for (let item of myLifeSummedUp) {
    console.log(item); //🤔?
}

for (let item in myLifeSummedUp2) {
    console.log(item); //🤔?
}
  
for (let item of myLifeSummedUp2) {
    console.log(item); //🤔?
}