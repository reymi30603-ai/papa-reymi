// let nombre = prompt ("Dime tu nombre")
// alert("Hola " + nombre)
// let frase = "Soy Reymi "
// document.write(`${frase}y estoy aprendiendo`)
// let apellido =prompt ("Dime tu apellido")
// if(nombre =="Reymi"&& apellido =="Quintana"){
//     alert("Persona indicada")
// }
// else {
//     alert("Muy mal ese nombre")
// }
// let cantCofla = prompt("Cuanto Dinero Tienes Cofla?")
//  if(cantCofla >0.6 && cantCofla < 1){
//     alert("Puedes comprar Helado de agua")}
//     else if (cantCofla >= 1 && cantCofla < 1.6){
//         alert("Puedes comprar el Helado Crema")
//     }
//     else if (cantCofla >= 1.6 && cantCofla < 1.7){
//         alert("Puedes comprar el Helado Heladix")
//     }
//     else if (cantCofla >= 1.7 && cantCofla < 1.8){
//         alert("Puedes comprar el Helado Heladovich")
//     }
//     else if (cantCofla >= 1.8 && cantCofla < 2.9){
//         alert("Puedes comprar el Helado Helardo")
//     }
// else if (cantCofla >= 2.9){
//         alert("Puedes comprar el Helado Confites o Pote de 1/4kg")
//     }
//     else{
        // alert("Eres un muerto bro")}
    // let frutas=["reymi","Amanda","Amarilis" , "Hector"]
    // document.write(frutas[3])

    // let pc = {nombre:"ReymiPc" , 
    // procesador:"Ryzen 7" ,
    // espacio:"16gb"
    // }
    // document.write(pc["nombre"])
    // let i = 0
    // // while(i < 20){i++
    // //     let pregunta = prompt("Aun no?")
    // //     if(pregunta == "Si"){break}
    // // }
        
    // do {
    //     document.write(i + ";")
    //     i++
        
    // } while (i<12);
    // for(let i = 0;i<=20;i++){
    //     document.write(i + "<br>")
    //     if(i ==12){continue}
    // }
    // 
    // functionsalr(){
    //     n = 20
    //     let nombre = prompt("Cual es tu nombre")
    //     if(nombre == "Reymi"+ n){
    //         alert("Hola Jefe te estabamos esperando")
    //     }
    //     else { alert( "No queremos saber de ti")}

    
    
//   
// const saludar = (nombre)=>{
//     document.write(`Hola ${nombre} como estas ?`)

// }
// saludar("Daniel")

// const bien =(a,b)=>{
//     let resultado= a + b
//     return resultado
// }
// let mata = bien(20,40)
// document.write(mata)
//     const hi = edad => document.write(edad )
//     hi( 33)
    
// const mayores =( nombre,hora) =>{
//     let edad = prompt("Que edad tienes")
//     if(edad >= 18 && hora< 12){
//         alert(`${nombre} puedes pasar y ademas entras gratis xq son las ${hora}`)
    
//     }
//     else if(edad >= 18){
//         alert(`${nombre} puedes pasar pero debes pagar xq son las ${hora}`)
//     }
        
    
//     else{
//         alert(`No puedes pasar ${nombre}`)
//     }
// }
// mayores("Antony",8)
// mayores("Junior",15)
// let cantidad = prompt("Cantidad de estudiantes")
// for(let i = 0;i< cantidad;i++){
//     let nombre = prompt(`Numero ${i} nombre?`)
//     let asistencia = prompt("Presente?")
//     document.write(nombre + " " + asistencia + "<br>")
// }
// 
// get y set
// class celular{
//     constructor(color,peso,resolucion,camara,ram){
//         this.color=color
//         this.peso=peso
//         this.resolucion=resolucion
//         this.camara=camara
//         this.ram = ram
//         this.informacion =`El color es ${this.color} y la pantalla es ${resolucion}`
//     }
//     verinfo(){
//         document.write(this.informacion)
//     }
//     hacerFoto(){
//         document.write("foto")
//     } 
// }
// let iphone = new celular("azul","1kg","full Hd","full","16ram")

// class altaGama extends celular{
//     constructor(color,peso,resolucion,camara,ram){
//         super(color,peso,resolucion,camara,ram)
//     }
//     grabar(){
//         document.write("<br>" +"Puede grabar")
//     }
// }
// let samsung= new altaGama("rojo","2kg","hdFull","Full","32ram")
// samsung.verinfo()
//  const esPar =(numero)=>{
// if(numero%2 == 0){document.write("Es Par")
//  }
// else {document.write("Impar")}
// }
// esPar(36)
// class persona{
//     constructor (nombre,edad,ciudad){
//         this.nombre=nombre
//         this.edad=edad
//        this.ciudad=ciudad
    //  }
//     verInfo(){
//         document.write( "<br>" + `Hola mi nombre es ${this.nombre} , tengo ${this.edad} de edad y vivo en ${this.ciudad}`)
//     }
// }
// let array = [5,10,2,80,15,100,56,123,124,125];
// const max =(arr)=>{ 
//     let mayyor = arr[0]
//     for(let i = 0;i< arr.length;i++){  
//         if(mayyor < arr[i]){
//     mayyor = arr[i]
//         }
//         else{ mayyor}
//         }
//         return mayyor
//     }
        
// document.write(max(array))
// const primerUso = array.map(n=> n*2)
// document.write(primerUso)

// const newnumeros =[1,2,3,4,5]
// const multiplicarPorDiez = newnumeros.map(n=>n*10)
// document.write(multiplicarPorDiez)

// //EJERCICIO 2 CON MAP
// const name =["Juan","Ana","Pedro"]
// const mayusula = name.map(n=>n.toUpperCase())
// document.write(mayusula)
// const edades =[18,20,25]
// const infor = edades.filter(n=>n>=20).map(n=>`Tengo ${n} de edad`)
// document.write(infor)
// const personas=[{nombre:"Ana",edad:20},
//                 {nombre:"Pedro",edad:30},
//                 {nombre:"Luis",edad:25}
// ]
// const resumen = personas.map(n =>n.nombre)
// document.write( "<br>" + resumen)

// const cosa =[1,2,3,4,5]
// const nuevo = cosa.map(n =>({numero:n , dobles:n*2}))
// document.write(JSON.stringify(nuevo))
//METODOS EN CADENA
// let texto = "javascript"
// document.write(texto.toUpperCase())
// let hola = "HOLA MUNDO"
// document.write(hola.toLowerCase())
// let reymi = "   reymi   "
// let resultado = reymi.trim()
// document.write(resultado.length)
// document.write(reymi.length)
//     let javaScript = "javaaprende"
// document.write(javaScript.includes("prend"))
//     let texto = "manzana,pera,uva"
// let resultado = texto.split(",")
// document.write("<br>" + resultado )
// let hola = "JavaScript"
// let otroResultado = hola.substring(0,4)
// document.write(otroResultado)
// let numeros =[1,2,3,4,5]
// let resultado= numeros.map(n => n*2).reduce((acc , n)=>acc + n,0)
// document.write(resultado)

// let palabras = ["sol","mar","montes","agua"]
//     let resul = palabras.filter(n => {
//         if(n.length==3){
//     return n
//     }
    
//     })
//     document.write(resul)
//     let mayores = [
//         {nombre:"Juan",edad:1},
//         {nombre:"Ana",edad:22},
//         {nombre:"Pedro",edad:30}
//     ]
// let resultado = mayores.filter(n =>n.edad>18).map(n=>{
//      return {nombre:n.nombre}
// })
// document.write(JSON.stringify(resultado))
// let carrito1 = [
//         {nombre:"Pan",precio:50},
//         {nombre:"Leche",precio:120},
//         {nombre:"Arroz",precio:80}
// ]
//     const sumarTotal=(carrito)=>{
//         let resultado = carrito.reduce((acc ,n)=>acc + n.precio,0)
//         return resultado
//     }
// const productosCaros =(carrito)=>{ 
//     let resultado=[]
//     for(let i =0;i<carrito.length;i++){
//         if(carrito[i].precio >70){
//             resultado.push(carrito[i].nombre)
//         }
//     }
//     return resultado
// }
// let otroResultado=productosCaros(carrito1)
// document.write(otroResultado.map(n=>n.toUpperCase()))
// let resul= sumarTotal(carrito1)
// document.write("<br>"+ resul )
// const usuarios = [
//     {nombre:"Carlos",edad:18},
//     {nombre:"Ana",edad:25},
//     {nombre:"Pedro",edad:15}
// ]
// const todoSobreLosU=(usu)=>{
//     return {
//         mayoresDeEdad:usu.filter(n=>n.edad>=18),
//         nombres:usu.map(n=>n.nombre).map(n=>n.toUpperCase())
//     } 
    
    
// }
// let resultado = todoSobreLosU(usuarios)
// document.write(JSON.stringify(resultado))

// const personas = [
//     {nombre:"Carlos",edad:25},
//     {nombre:"Ana",edad:32},
//     {nombre:"Luis",edad:28},
//     {nombre:"Maria",edad:40}
// ]    
// const personaMayor =(perso)=>{
//     const resultado = perso.reduce((acc , n)=>{
//         if(acc.edad < n.edad){
//             return n
//         }
//         return acc
            
//     })
//     return resultado.nombre

// }
// let resultado = personaMayor(personas)
// document.write(resultado)
// const productoss = [
//         {nombre:"Mouse",precio:25},
//         {nombre:"Teclado",precio:50},
//         {nombre:"Monitor",precio:200},
//         {nombre:"Laptop",precio:900}
// ]   
// const masCaro = (productos)=>{
//     let acc = productos[0]
//     for(let i=1;i<productos.length;i++){
//         if(acc.precio < productos[i].precio){
//             acc = productos[i]
//         }
        
//     } 
//     return acc.nombre
// }

//     // let caro = productos.reduce((acc , producto)=>{
//     //     if(acc.precio < producto.precio){
//     //         return producto
//     //     }
//     //     return acc
//     // })
//     // return caro.nombre

// document.write(masCaro(productoss))
// // const compras = [
// //         {cliente:"Ana",total:50},
// //         {cliente:"Juan",total:100},
// //         {cliente:"Ana",total:25},
// //         {cliente:"Pedro",total:70},
// //         {cliente:"Juan",total:50}
// // ] 
// const totalGastado = (compras)=>{
//     return compras.reduce((acc,compra)=>{
//         let cliente = compra.cliente
//         if(!)
//     }
// }
// //     let total = {
// //         Ana:compras.reduce((acc,compra)=>{
// //             if(compra.cliente == "Ana"){
// //                 acc += compra.total
// //             }
// //             return acc
// //         },0),
    
// //     Juan:compras.reduce((acc,compra)=>{
// //             if(compra.cliente == "Juan"){
// //                 acc += compra.total
// //             }
// //             return acc
// //         },0),
// //         Pedro:compras.reduce((acc,compra)=>{
// //             if(compra.cliente == "Pedro"){
// //                 acc += compra.total
// //             }
// //             return acc
// //         },0)
// //     }
// //     return total
// // }
// let veamos = totalGastado(compras)
// document.write(JSON.stringify(veamos))
    // const vendido = [
    // {producto:"Pan",cantidad: 3,precio:20},
    // {producto:"Refresco",cantidad: 4,precio:50},
    // {producto:"Pizza",cantidad: 1,precio:150},
    // {producto:"Pan",cantidad: 4,precio:20}   
    // ]
// const analizarVentas = (ventas)=>{
//         let cant = vendido.reduce((acc,venta)=>acc+=venta.cantidad,0)
//         let press = vendido.reduce((acc,venta)=>acc+=venta.precio,0)
//     let cantidad = {}
//     for(let i = 0 ; i<ventas.length;i++){
//         let producto = ventas[i].producto
//         if(cantidad[producto]){
//             cantidad[producto]+= ventas[i].cantidad
//         }
//         else { cantidad[producto]=ventas[i].cantidad}
//     }
//     let cantidadTotal =0
//     let productoMasVendido =""
//     for(product in cantidad){
//         if(cantidad[product]>cantidadTotal){
//             cantidadTotal = cantidad[product]
//             productoMasVendido = product
//         }
//     }
//     let vess = {}
//     for(let i = 0;i<vendido.length;i++){
//     let vendi = vendido[i].producto
//     if(vess[vendi]){
//         vess[vendi]+=vendido[i].precio*vendido[i].cantidad
//     }
//     else {
//         vess[vendi]=vendido[i].precio*vendido[i].cantidad
//     }
//     }
//     let maxCantidad = 0
//     let maxTotal = ""
//     for(max in vess){
//         if(vess[max]>maxCantidad){
//             maxCantidad = vess[max]
//             maxTotal = max
//         }
//     }
//     return{
//         dineroTotal:ventas.reduce((acc,venta)=>acc += venta.cantidad*venta.precio,0),
//         productomasVendido:productoMasVendido,
//         ventasMasDecien:ventas.reduce((acc,venta)=>{
//             if(venta.precio > 100){
//                 acc++
//             }
//             return acc
//         },0),
//         TodosLosProductos:ventas.map(n=>n.producto),
//         Promedio:press/cant,
//         produtoQuemasDineroDa: maxTotal  
//     } 
// }
// let resultado = analizarVentas(vendido)
// document.write(JSON.stringify(resultado))
// const analizarDatos =(ventas)=>{
//     let resultado = ventas.reduce((acc,vent)=>{
//         acc.DineroTotalVentas += vent.cantidad*vent.precio
      
//         if(vent.precio*vent.cantidad >100){
//             acc.VentasMayoresdeCien ++
//         }
//         if(acc.TodoslosProdctosVendidos[vent.producto]){
//             acc.TodoslosProdctosVendidos[vent.producto]+=vent.cantidad}
//             else{
//                 acc.TodoslosProdctosVendidos[vent.producto]=vent.cantidad  
//             }
//         return acc 
//     },{
//         DineroTotalVentas:0,
//         VentasMayoresdeCien:0,
//         TodoslosProdctosVendidos:{},
//             })
//             let cantidad = 0
//             let masVendido =""
//             for(produc in resultado.TodoslosProdctosVendidos){
//                 if(resultado.TodoslosProdctosVendidos[produc]>cantidad){
//                     cantidad =resultado.TodoslosProdctosVendidos[produc]
//                     masVendido = produc  
//                 }  
//             }
//             resultado.ProductoMasVendido =masVendido
//             return resultado
// }
// let prueba = analizarDatos(vendido)
// document.write(JSON.stringify(prueba))
// let parrafo = document.getElementById("texto")
// document.write(parrafo)
// let p = document.getElementsByTagName("p")
// document.write(p)
// let querry = document.querySelector(".texto")
// document.write(querry)
// let selector = document.querySelectorAll(".texto")
// const rangoEtario = document.querySelector(".rangoEtario")
//     rangoEtario.setAttribute("type","text")
// let valorDeType = rangoEtario.getAttribute("type")
// rangoEtario.removeAttribute("type")

  //ATRIBUTOS GLOBALES
    // const titulo = document.querySelector(".titulo")
    // titulo.setAttribute("contentEditable","true")
        //SELECCION DE CLASES  
    // const input = document.querySelector(".inputNormal")
    // input.type = "text"
    // input.minLength = 8
    // input.placeholder="hola putito"
    // input.required = "required"
    // const titulo = document.querySelector(".titulo")
    // if(10 > 35 ){
    // titulo.style.backgroundColor ="yellow"
    // }
    // else {
    //     titulo.style.color ="red"
    //     input.placeholder="MONGO"
    // }
    // titulo.classList.add("grande")
    // let valor = titulo.classList.contains("grande")
    // titulo.classList.toggle("grande",true)
    // titulo.classList.replace("grande","gato")
    // const titulo = document.querySelector(".titulo")
    // let resultado = titulo.textContent
    // console.log(resultado)
    // let nombre = prompt("Cual es tu nombre")
    // const titulo = document.querySelector(".titulo")
    // const boton = document.getElementById("boton")
    // boton.addEventListener("click",function(){
    //     titulo.classList.add("texto")
    //     titulo.textContent ="Hola "+ nombre
    // })
    // const boton = document.getElementById("boton")
    // boton.addEventListener("click",function(){
    //     const mensaje = document.getElementById("mensaje")
    //     mensaje.textContent = " Hola Programador"
    //     const titulo = document.getElementById("titulo")
    //     titulo.textContent="Estas Apreniendo Js y DOM"
    //     titulo.classList.add("activo")
    // })
//     const boton = document.getElementById("boton")
//     boton.addEventListener("click",function(){
//     const box = document.getElementById("box")
//     for(let i = 1;i<=5;i++){
//         const nuevoElement = document.createElement("p")
//     nuevoElement.textContent="Elemento "+ i
//        box.appendChild(nuevoElement)   
//     }
//     boton.disabled=true
// })
// const input = document.getElementById("texto")
// const resultado = document.getElementById("resultado")
// input.addEventListener("input",function(){
//     resultado.textContent = input.value 
// })
// let contador = 0
// const boton = document.getElementById("boton")
// const contenedor = document.getElementById("contenedor")
// boton.addEventListener("click",function(){ 
//     contador++
//     const p = document.createElement("p")
//     p.classList.add("pp")
//     p.textContent="Soy un Parrafo " + contador
//     contenedor.append(p)
    
// })
// const hijo = document.getElementById("titulo")
// const elemento = document.createElement("h1")
// elemento.classList.add("titulo")
// elemento.textContent="HOLA MACHO SOSO UN CRACK!!!!!!!!!!!"
// contenedor.replaceChild(elemento,hijo)

// const newTexto = document.createElement("p")
//     newTexto.classList.add("cartel","oscuro")
// contenedor.append(newTexto)
//     newTexto.textContent ="TOCAMEEEEE"
// const tocar = document.getElementById("tocar")
// tocar.addEventListener("click",function(){
//     newTexto.classList.toggle("oscuro")
// })
// const contenedor = document.getElementById("contenedor")
// const input = document.getElementById("texto")
// const boton = document.getElementById("agregar")
// boton.addEventListener("click",function(){
//     const valor = input.value
//     if(valor === ""){return}
//     else{
//         const p = document.createElement("p")
//         p.addEventListener("click",function(){
//             p.remove()
//         })
//         p.textContent=input.value
//         contenedor.append(p)
//         input.value="" }     
// })

// const eliminar = document.getElementById("eliminar")
// eliminar.addEventListener("click",function(){
//     const ultimo = contenedor.lastElementChild
//     ultimo.remove()
// })

// input.setAttribute("type","text")

// const contenedor = document.getElementById("contenedor")
// const boton = document.getElementById("boton")
// const input = document.getElementById("input")
// const lista = document.getElementById("list")
// let contador = 0

// boton.addEventListener("click",function(){
//     contador++
//     if(
//         input.value ==""
//     ){return alert("ESTA VACIO")}
//     const tarea = document.createElement("li")
//     const bot = document.createElement("button")
//     bot.textContent="Eliminar"+ contador      
//     contenedor.append(bot)
//      bot.addEventListener("click",function(){
//         tarea.remove()
//         bot.remove()
//     })
//     tarea.addEventListener("click",function(){
//     tarea.classList.toggle("rojo")
   
//   })
//   tarea.addEventListener("dblclick",function(){
//     tarea.textContent="Tarea Eliminada"
//     tarea.addEventListener("click",function(){
//         tarea.remove()
//     })
//   })
//     tarea.textContent=  "Tarea"+ contador + " : " + input.value
//     lista.append(tarea)
//     input.value =""
//     input.focus()
    
// })


// let suma1 = 0
// const agregar = document.getElementById("agregar")
// const input = document.getElementById("texto")
// const lista = document.getElementById("lista")
// const contador = document.getElementById("contador")
// agregar.addEventListener("click",function(){
//     if(!input.value){return alert("Amanda esta vacio")}
//     suma1++
//     const li = document.createElement("li")
//     li.textContent=input.value
    
//      const completar = document.createElement("button")
//      const eliminar = document.createElement("button")
//      completar.textContent="Completar"
//      eliminar.textContent="Eliminar"
//      li.append(eliminar)
//          li.append(completar)
//          lista.append(li)
// //          completar.addEventListener("click",function(){
// //             li.classList.toggle("rojo")
// //             completar.classList.toggle("fondo")
// //          })
// //          eliminar.addEventListener("click",function(){
// //             li.remove()
// //             eliminar.remove()
// //             completar.remove()
// //             suma1--
// //              contador.textContent ="Tarea : " + suma1
            
// //          })
// //     input.value = ""
// //     input.focus()
// //     contador.textContent ="Tarea : " + suma1
   
// // })
// // const contenedor = document.getElementById("contenedor")
// // const boton = document.getElementById("boton")
// // contenedor.addEventListener("click",function(e){
// //     console.log("contenedor")
// //     console.log("target:", e.target)
// //     console.log("currentTarget")
// //     console.log("currentTarget:",e.currentTarget)
// // })
// // boton.addEventListener("click",function(e){
// //     e.stopPropagation()
// //     console.log("boton")
    
// // })
// // const lista = document.getElementById("lista")
// // lista.addEventListener("click",(e)=>{
// //     console.log(e.target.textContent)
// // }) 
// // const input = document.getElementById("texto")
// // const lista = document.getElementById("lista")
// // const formulario = document.getElementById("formulario")
// // formulario.addEventListener("submit",function(event){
// //     event.preventDefault()
// //     if(input.value==="")return
    
// //         const li = document.createElement("li")
// //         li.textContent=input.value
// //     lista.appendChild(li)
// //     input.value=""
// //     input.focus()
    
        
// //     })
// // lista.addEventListener("click",function(event){
// //         if(event.target.tagName ==="LI"){
// //             const li = event.target
// //             const textoActual = li.textContent
// //             const inputedit = document.createElement("input")
// //             input.value=textoActual
// //             li.textContent=""
// //             li.appendChild(inputedit)
// //             inputedit.focus()
// //              inputedit.addEventListener("keydown",function(e){
// //             if(e.key==="Enter"){
// //                 li.textContent=inputedit.value
// //             }
// //         })
// //         }
// //         })
       
// const boton =document.getElementById("boton")
// const input = document.getElementById("texto")
// const lista = document.getElementById("lista")
// boton.addEventListener("click",()=>{
//     if(!input.value)return
//     const li = document.createElement("li")
//     li.textContent=input.value
//     lista.append(li)
//     input.value=""
//     input.focus()
// })
// const buscar = document.getElementById("buscar")
// buscar.addEventListener("input",()=>{
//     const valor = buscar.value.toLowerCase()
//     const elemento = document.getElementsByTagName("li")
//     for(elemens of elemento){
//         if(elemens.textContent.toLowerCase().includes(valor)){
//             elemens.style.display=""
//         }
//         else{
//             elemens.style.display = "none"
//         }
//     }
// })
    let tareas =JSON.parse(localStorage.getItem("tareas"))||[]
const input = document.getElementById("input")
const boton = document.getElementById("boton")
const list = document.getElementById("lista")
const agregarTarea =()=>{
    if(!input.value)return
    const li = document.createElement("li")
    const lis = document.getElementsByTagName("li")
    for(let lie of lis){
        if(lie.textContent===input.value){
            return
} 
    }
    li.textContent = input.value
    tareas.push(input.value)
    localStorage.setItem("tareas",JSON.stringify(tareas))
    list.append(li)
     textoActual = li.textContent
    input.value = ""
   
}
boton.addEventListener("click",()=>{
    agregarTarea()
})
input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter")
        agregarTarea()
})
tareas.forEach(tarea => {
        const li = document.createElement("li")
        li.textContent=tarea
        list.append(li)
    });
const eliminar =(li)=>{
    if(li.querySelector("button"))
        return
    const eliminar= document.createElement("button")
        li.append(eliminar)
        eliminar.textContent="Eliminar"
        eliminar.addEventListener("click",(e)=>{
            const li = e.target.parentElement
            tareas=tareas.filter(tarea => tarea +"EliminarCambiar"!==li.textContent)
            localStorage.setItem("tareas",JSON.stringify(tareas))
            li.remove() 
                
        })}
        const cambiarTarea = (li)=>{
            if(li.querySelector(".cambio"))
                return
        const cambiar = document.createElement("button")
        cambiar.textContent="Cambiar"
        li.append(cambiar)
         cambiar.classList.add("cambio")
         cambiar.addEventListener("click",()=>{
            preparaCambio(li)
    })
} 
const preparaCambio = (li)=>{
 const inputt = document.createElement("input")
            li.textContent =""
            li.append(inputt)
            inputt.focus()
            inputt.addEventListener("keydown",(e)=>{
                if(e.key ==="Enter" && !inputt.value){
                    li.remove()
                }
                    else if(e.key==="Enter"){
                        li.textContent=inputt.value
                        
                    }  })}
list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
         const li = e.target
        eliminar(li)
         cambiarTarea(li) 
        
    }})  
const buscador = ()=>{
    const valor = buscar.value.toLowerCase()
    const elementos = document.getElementsByTagName("li")
    for(element of elementos){
        if(element.textContent.toLowerCase().includes(valor)){
            element.style.display = ""
        }
        else{
            element.style.display= "none"  } }
}
const buscar = document.getElementById("buscar")
buscar.addEventListener("input",()=>{
    buscador()
    })


    const modo = document.getElementById("modo")
    const body = document.body
const cambiarModo=()=>{
    body.classList.toggle("oscuro")
    
}
modo.addEventListener("click",()=>{
    cambiarModo()
    if(modo.textContent=="Modo Oscuro"){
        modo.textContent="Modo Claro"}
        else{
            modo.textContent="Modo Oscuro"
        }
})

