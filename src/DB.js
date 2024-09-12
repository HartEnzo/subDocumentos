import mongoose from "mongoose";

const mongoDB = "mongodb://localhost:27017/"
const database = "armario";


const main = async () => {
    mongoose.connect(mongoDB + database)
}

main()
    .then(() => console.log(`Conectado ao db ${database} com sucesso`))
    .catch(err => console.log(err))

export default mongoose 