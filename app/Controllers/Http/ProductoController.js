'use strict'

const producto= use('App/Models/Producto')
const {validateAll} = use ('Validator')

class ProductoController {
    
    ///////////////////////////////////////////
    // TRAE TODOS LOS REGISTROS
    async elGet({response,params=id}){
        if (params.id)
        {
            return response.status(200).json(['Productor por ID',await producto.findOrFail(params.id)]) 
        }
        else
        {
           return response.status(200).json(['Productos-General',await producto.all()])
        }
    }


    ///////////////////////////////////////////
    // INSERTA NUEVOS REGISTROS
    async elPost ({request, response}){
        const input = request.all()

         //VALIDACIONES
         const validation = await validateAll(input, {
             'producto':'required|min:2|max:100|unique:productos,producto'
         })
         if(validation.fails()){
             return response.status(400).json(validation.messages())
         }
                   
        if (producto.create(input)){
        return response.status(201).json(['Insertado'])
        }
    }


    ///////////////////////////////////////////
    // ACTUALIZAR UN REGISTRO
    async elUpdate ({request, response, params=id}){
        const input = request.all()

         //VALIDACIONES
         const validation = await validateAll(input, {
             'producto':'required|min:2|max:100|unique:productos,producto'
         })
         if(validation.fails()){
             return response.status(400).json(validation.messages()) 
         }

        await producto.query().where('id',params.id).update(input)

        if (producto.query().where('id',params.id).update(input)){
        return response.status(200).json(['Actualizado',await producto.findOrFail(params.id)])
        }
    }


     ///////////////////////////////////////////
     // ELIMINAR UN REGISTRO
     async elDelete({response,params=id}){
        const Productos = await producto.findOrFail(params.id)
        await Productos.delete()

        if (Productos.delete()){
            return response.status(200).json(['Eliminado'])
        }
    }
}

module.exports = ProductoController
