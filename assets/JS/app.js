var btn = document.getElementById('btn')
btn.onclick = () =>{
    var input = Number(document.getElementById('input').value);
    var percent  = Number(document.getElementById('percent').value);
    var month = Number(document.getElementById('slc_month').value);
     

    if (month ==12) 
    {
        var percentPrice = (input*percent)/100;
        var allOfPrice = Number(input+percentPrice);
        var mnthPrice = allOfPrice/month;
        document.getElementById('price').innerHTML = allOfPrice;
        document.getElementById('monthly_price').innerHTML = mnthPrice.toFixed();
    }
    else if (month ==24) 
    {
        var percentPrice = (input*percent)/100;
        var allOfPrice = Number(input+(percentPrice*month/12));
        var mnthPrice = allOfPrice/month;
        document.getElementById('price').innerHTML = allOfPrice;
        document.getElementById('monthly_price').innerHTML = mnthPrice.toFixed();
    }
   else if (month ==18) 
    {
        var percentPrice = (input*percent)/100;
        var allOfPrice = Number(input+(percentPrice*month/12));
        var mnthPrice = allOfPrice/month;
        document.getElementById('price').innerHTML = allOfPrice;
        document.getElementById('monthly_price').innerHTML = mnthPrice.toFixed();
    }
    else if (month ==36) 
    {
        var percentPrice = (input*percent)/100;
        var allOfPrice = Number(input+(percentPrice*month/12));
        var mnthPrice = allOfPrice/month;
        document.getElementById('price').innerHTML = allOfPrice;
        document.getElementById('monthly_price').innerHTML = mnthPrice.toFixed();
    }

}