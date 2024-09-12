import DB from "../DB.js"

const Schema = DB.Schema;

const studentSchema  = new Schema({
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    }, 

    zipCode: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 8
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
              return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
        },
    required: true,
 },
})

const Student = DB.model("Student", studentSchema);

export default Student;