
document.querySelector('#moto').addEventListener('click', cel);

function cel(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let res = document.querySelector('#resp');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
             if(item.id==6){ res.innerHTML += "Id:"+item.id+"<br><br>Nombre:"+item.nombre+"<br><br>Cantidad:"+item.cantidad+"<br><br>Descripcion:"+item.descripción+"<br><br>Precio:"+item.precio+"<br>"
                
            }
               
                
            }
        }
    }
}