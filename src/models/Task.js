import {
    Schema,
    model,
    models
} from 'mongoose'

const taskSchema= new Schema({
    title : {
        type : String,
        required : [true, "este campo es requerido"],
        unique : true,
        trim : true,
        maxlength : [40, "El titulo tiene que ser menor de 40 caracteres"]
    },
    description : {
        type : String,
        required :[true, "Necesita una descripción"],
        trim: true,
        maxlength : [200, "El maximo de la descripción son 200 caracteres"]
    }
   
}, {
    timestamps : true,
    versionKey : false
})

export default model("Task", taskSchema)