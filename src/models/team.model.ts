import { model, Model, Schema } from "mongoose";
import { genSaltSync, hashSync } from "bcryptjs";
// import { TeamSchemaDto } from "../dtos/user.dtos";

const teamSchema: Schema<any> = new Schema(
    {
        teamId : {
            type:String,
            required:true,
        },
        teamName: {
            type: String,
            required: true,
        },
        members : {
            type : [{
                    espektroId  : String,
                    name : String,
            }],
            required : true,
        },
        leader: {
            type: String,
            required: true,
        },
        espektroId : {
            type : String,
            required : true,
            unique : true,
        },
        lives: {
            type: Number,
            default: 10,
        },
        spotArray: {
            type : Array<String>,
            default : [],
        }
    },
    {
        timestamps: true,
    }
);


const Team: Model<any> = model("Team", teamSchema);

export { Team };
