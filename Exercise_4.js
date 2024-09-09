console.log("task 1");
var shipments = 
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};

function shipment()
{
    var selectedField=document.getElementById("select");
    var selectedValue=selectedField.options[selectedField.selectedIndex].value;

    if(selectedValue=="standard")
    {
        const d=new Date();
        let date=d.getDate();
        let months=d.getMonth()+1;
        let years=d.getFullYear();
        let full_date=years+"-"+months+"-"+date;
        console.log(full_date);
        let expected=date+7;
        let fee=shipments.standard.fee;
        document.getElementById("orderDate").innerText="order date:"+full_date;
        document.getElementById("expectedDate").innerText="expected date of delievery:"+years+"-"+months+"-"+expected;
        document.getElementById("fee").innerText="delivery fee:"+fee;        
       
    }
    else
    {
        const d=new Date();
        let date=d.getDate();
        let months=d.getMonth()+1;
        let years=d.getFullYear();
        let full_date=years+"-"+months+"-"+date;
        console.log(full_date);
        let expected=date+3;
        let fee=shipments.express.fee;
        document.getElementById("orderDate").innerText="order date:"+full_date;
        document.getElementById("expectedDate").innerText="expected date of delievery:"+years+"-"+months+"-"+expected;
        document.getElementById("fee").innerText="delivery fee:"+fee;   

    }
   
}




console.log("task 2");
var phones = 
        {
            'iphone_se_red': {
                'name': 'iPhone SE 64GB Red',
                'price': '450',
                'currency': 'US$',
                'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
            },
            'iphone_11_black': {
                'name': 'iPhone 11 128GB Black',
                'price': '869',
                'currency': 'EUR',
                'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
            },
            'iphone_8_plus_silver': {
                'name': 'iPhone 8 Plus 64GB Silver',
                'price': '519',
                'currency': 'US$',
                'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
            }
        };
        var div=document.getElementById("div");

function phoneStatus()
{
    var check=document.getElementsByName("radio");
for(let i=0;i<check.length;i++)
{
    if(check[i].checked)
    {
        let radio_selected=check[i].value;
        if(radio_selected=="iphone_se")
        {
         let p=phones.iphone_se_red.price;
         let n=parseInt(p);
         let price=n.toFixed(2);
        
        div.innerHTML=phones.iphone_se_red.name+"   "+"<br>"+phones.iphone_se_red.currency+":"+price;
        div.style.backgroundImage="url('images (1).jpeg')";
        div.style.color="white";
        div.style.display="flex";
        div.style.alignItems="center";
        div.style.justifyContent="center";
        div.style.fontWeight="bold";
        div.style.backgroundSize="cover";
       
        }
        else if(radio_selected=="iphone_11")
        {
            let p=phones.iphone_11_black.price;
         let n=parseInt(p);
         let price=n.toFixed(2);
        
        div.innerHTML=phones.iphone_11_black.name+"   "+"<br>"+phones.iphone_11_black.currency+":"+price;
        div.style.backgroundImage="url('images (2).jpeg')";
        div.style.color="white";
        div.style.display="flex";
        div.style.alignItems="center";
        div.style.justifyContent="center";
        div.style.fontWeight="bold";
        div.style.backgroundSize="cover";
       
        }
        else if(radio_selected=="iphone_8")
        {
            let p=phones.iphone_8_plus_silver.price;
         let n=parseInt(p);
         let price=n.toFixed(2);
        
        div.innerHTML=phones.iphone_8_plus_silver.name+"   "+"<br>"+phones.iphone_8_plus_silver.currency+":"+price;
        div.style.backgroundImage="url('images (3).jpeg')";
        div.style.color="black";
        div.style.display="flex";
        div.style.alignItems="center";
        div.style.justifyContent="center";
        div.style.fontWeight="bold";
        div.style.backgroundSize="cover";
       
        }

    }
}

}






console.log("task 3");
