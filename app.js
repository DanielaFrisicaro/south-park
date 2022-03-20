
//paso 1 requerir el modulo express 
const express = require('express')
//paso 4 requerir el modulo path

const path = require('path')


//paso 1
const app= express()

// paso 2, instalar el express

//paso 5 usamos el metodo resolve del modulo path

const publicPath= path.resolve(__dirname, './public')
app.use(express.static(publicPath))



//paso 3, llamar al servidor

app.listen(3000, () => {
console.log('Servidor corriendo en el puerto 3000')

})



//paso 6 hacemos el html en carpeta de views

//paso 7 debemos hacer un .get con path.resolve es absoluto, si no usabamos el path era relativo

app.get('/', (req, res) =>{
res.sendFile(path.resolve(__dirname, "./views/home.html"))



}   )  