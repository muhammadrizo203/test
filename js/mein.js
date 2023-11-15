function lits1(){
    var div = document.createElement('div');
    var div11 = document.getElementById('div11');
    var btn =document.createElement('button');
    var btn1 =document.createElement('button');
    var inp1 =document.getElementById('inp1')
    var inp =document.createElement('input');

    inp.value = inp1.value;
    btn.style.width = "100px"
    btn.style.height = "30px"
    btn.innerText = "DELETE"

    btn1.style.width = "80px"
    btn1.style.height = "30px"
    btn1.innerText = "Edit"

    div.style.width = "90%"
    div.style.height = "10vh"
    div.style.backgroundColor = "red"
    div.style.borderRadius = "30px"
    div.style.marginTop = "30px" 
    div.style.display = "inline-flex";
    div.style.justifyContent = "end"
    div.style. alignitems = "center"
     
    inp.style.width = "79%"
    inp.style.height ="10vh"
    inp.style.backgroundColor = "white"
    inp.style.borderRadius = "30px"
    div.style.marginleft = "-10px"

  
    div.appendChild(inp);
    div.appendChild(btn1);
    div.appendChild(btn);
    div11.appendChild(div);

}