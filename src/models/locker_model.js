import DB from "../DB.js" 
import Student from "./student_model.js"

const Schema = DB.Schema

const lockerSchema = new Schema({
    height: {
        type: Number,
        required: true, 
        min: 0 
    },
    width: {
        type: Number,
        required: true, 
        min: 0 
    },
    length: {
        type: Number,
        required: true, 
        min: 0 
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    }
})

const Locker = DB.model("Locker", lockerSchema);

const estudante = new Student({
    name: "Pedro",
    birthDate: "11/11/2011",
    zipCode: "88888888",
    email: "pedro@gmail.com"
})

estudante.save()

console.log(estudante)

const armario = new Locker({
    height: 0.5,
    width: 0.3,
    length: 0.3,
    student: estudante._id
})

armario.save()

console.log(armario)

const busca = async () => {
    return Locker.findById(armario._id).populate("student")
}

const buscaArmario = await busca()

console.log(buscaArmario)

export default Locker;
