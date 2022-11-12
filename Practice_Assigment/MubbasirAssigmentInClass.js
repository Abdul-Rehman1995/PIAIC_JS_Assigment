let data = "name=ali;key=123;age=20;color=red;size=40;email=abc@gmail.com";
let splitting = data.split(`;`);
let obj = {};
for (let i = 0; i < splitting.length; i++) {
   let [things,values] = splitting[i].split(`=`);

    let required_fields = ["name","key","age","size"]
    if(required_fields.includes(things)){
        if(isNaN(values)){
            obj[things] = (values);
        }else{
            obj[things] = Number(values);
        }
    }
}
console.log(obj);
