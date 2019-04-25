function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.getData("text");
}

function drop(ev, t) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));
    console.log(t.lastElementChild);

    if (t.lastElementChild.getAttribute('data-class') == 'pizza') {
        document.getElementsByClassName('vadapav')[0].style.display = "flex";
        t.lastElementChild.style.display = "none";
    } else if (t.lastElementChild.getAttribute('data-class') == 'dabeli') {
        document.getElementsByClassName('dabeli')[0].style.display = "flex";
        t.lastElementChild.style.display = "none";
    }
    //    

    if (t.parentElement.getAttribute('id') == 'second') {
        t.lastElementChild.childNodes[3].setAttribute('class', 'price');
        document.getElementById('payMain').setAttribute('data-tog', '1');
    } else {
        console.log(t.childNodes);
        t.childNodes[2].childNodes[3].removeAttribute('class');

        document.getElementById('payMain').setAttribute('data-tog', '0');
    }
    calc();
}


function calc() {
    var a = 0;
    var price = [];
    var z = document.getElementById('quantity').innerHTML;

    z = parseInt(z);

    console.log(z);
    for (var i = 0; i < document.getElementsByClassName('price').length; i++) {
        price[i] = document.getElementsByClassName('price')[i].innerHTML;

        price[i] = parseInt(price[i]);


        console.log(a + price[i]);
        a = a + price[i];
    }


    if (document.getElementById('payMain').getAttribute('data-tog') == 1) {
        document.getElementById('payMain').innerHTML = a + 9 + 15;
    } else {
        document.getElementById('payMain').innerHTML = a;
    }
    document.getElementById('result').innerHTML = a;
}



function minus(t) {

    document.getElementById('payMain').setAttribute('data-tog', '1');
    var a = t.parentNode.nextElementSibling.innerHTML;


    a = parseInt(a);
    t.parentNode.nextElementSibling.innerHTML = a - 1;

    var j = t.parentNode.nextElementSibling.innerHTML;

    if (t.parentNode.parentNode.parentNode.parentNode.getAttribute('class') == 'vadapav') {



        //        pizzain = pizza * j;

        document.getElementById('drag1').lastElementChild.innerHTML = pizza * j + 'rs';
        //        console.log(document.getElementById('drag1').lastElementChild.innerHTML = pizza + 'rs');

    } else if (t.parentNode.parentNode.parentNode.parentNode.getAttribute('class') == 'dabeli') {

        //        var j = document.getElementById('quantity').innerHTML;

        //        pizzain = pizza * j;
        //        var j = t.parentNode.previousElementSibling.innerHTML;

        console.log(j);
        document.getElementById('drag2').lastElementChild.innerHTML = dabeli * j + 'rs';
        //        console.log(document.getElementById('drag1').lastElementChild.innerHTML = pizza + 'rs');

    }









    calc();
    document.getElementById('payMain').setAttribute('data-tog', '0');

}

var pizza = document.getElementById('drag1').lastElementChild.innerHTML;
pizza = parseInt(pizza);
var dabeli = document.getElementById('drag2').lastElementChild.innerHTML;
dabeli = parseInt(dabeli);

function plus(t) {
    document.getElementById('payMain').setAttribute('data-tog', '1');
    var a = t.parentNode.previousElementSibling.innerHTML;


    a = parseInt(a);
    t.parentNode.previousElementSibling.innerHTML = a + 1;

    var j = t.parentNode.previousElementSibling.innerHTML;

    if (t.parentNode.parentNode.parentNode.parentNode.getAttribute('class') == 'vadapav') {



        //        pizzain = pizza * j;

        document.getElementById('drag1').lastElementChild.innerHTML = pizza * j + 'rs';
        //        console.log(document.getElementById('drag1').lastElementChild.innerHTML = pizza + 'rs');

    } else if (t.parentNode.parentNode.parentNode.parentNode.getAttribute('class') == 'dabeli') {

        //        var j = document.getElementById('quantity').innerHTML;

        //        pizzain = pizza * j;
        //        var j = t.parentNode.previousElementSibling.innerHTML;

        console.log(j);
        document.getElementById('drag2').lastElementChild.innerHTML = dabeli * j + 'rs';
        //        console.log(document.getElementById('drag1').lastElementChild.innerHTML = pizza + 'rs');

    }









    calc();
    document.getElementById('payMain').setAttribute('data-tog', '0');

}
