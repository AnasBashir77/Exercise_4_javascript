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



let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}