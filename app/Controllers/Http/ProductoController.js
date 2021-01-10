'use strict'

const producto= use('App/Models/Producto')
const {validateAll} = use ('Validator')

class ProductoController {
    ///////////////////////////////////////////
    // TRAE TODOS LOS REGISTROS
    async elGet({response,params=id}){
        if (params.id)
        {
            return response.json(['Productor por ID',await producto.findOrFail(params.id)],200) 
        }
        else
        {
           return response.json(['Productos',await producto.all()],200)
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
             return response.json(validation.messages(),400) 
         }

        await producto.create(input)

        if (producto.create(input)){
        return response.json(['Insertado',await producto.create(input)],201)
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
             return response.json(validation.messages(),400) 
         }

        await producto.query().where('id',params.id).update(input)

        if (producto.query().where('id',params.id).update(input)){
        return response.json(['Actualizado',await producto.findOrFail(params.id)],200)
        }
    }


     ///////////////////////////////////////////
     // ELIMINAR UN REGISTRO
     async elDelete({response,params=id}){
        const Productos = await producto.findOrFail(params.id)
        await Productos.delete()

        if (Productos.delete()){
            return response.json(['Eliminado'],200)
        }
    }
}

module.exports = ProductoController
