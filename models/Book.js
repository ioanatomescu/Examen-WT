const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");


const Book=sequelize.define(
    "Book",
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
           type:DataTypes.STRING,
           validate:{
               min:5
           },
        },
        genre:{
            type:DataTypes.STRING,

        },
        url:{
            type:DataTypes.STRING,
            validate:{
                isUrl:true
            }
        }
    }

)
module.exports=Book;