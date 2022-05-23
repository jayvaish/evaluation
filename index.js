//store the products array in localstorage as "products"
function Student(t, d, p, i)
{
    this.type=t;
    this.Description=d;
    this.price=p;
    this.image=i;
    
}

function storeData(e)
{
    e.preventDefault();
    let form =document.getElementById("products");
    let type=form.type.value;
    let Description=form.Description.value;
    let price=form.price.value;
    let image=form.image.value;
    
    

  
let s1=new Student(type,Description,price,image);

let data=JSON.parse(localStorage.getItem("students")) || [];

data.push(s1);



localStorage.setItem("students",JSON.stringify(data));
console.log(s1);

}


   



function calculate(){
    let data=JSON.parse(localStorage.getItem("students"))|| [];
    let obj={};

    for(let i=0;i<data.length;i++)
    {
      if(!obj[data[i].image])
      {
        obj[data[i].image]=1;
      }
    }
    console.log(obj);
}
calculate();