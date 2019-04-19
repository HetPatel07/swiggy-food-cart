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
    if (t.parentElement.getAttribute('id') == 'second') {
        console.log(t.childNodes);
        t.childNodes[5].childNodes[3].setAttribute('class', 'price');
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
    for (var i = 0; i < document.getElementsByClassName('price').length; i++) {
        price[i] = document.getElementsByClassName('price')[i].innerHTML;

        console.log(price[i]);
        price[i] = parseInt(price[i]);

        a = a + price[i];
        console.log(price[i], a);
    }


    if (document.getElementById('payMain').getAttribute('data-tog') == 1) {
        document.getElementById('payMain').innerHTML = a + 9 + 15;
    } else {
        document.getElementById('payMain').innerHTML = a;
    }
    document.getElementById('result').innerHTML = a;
}
