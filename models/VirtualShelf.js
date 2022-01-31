const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize");

const VirtualShelf=sequelize.define(
    "VirtualShelf",
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        
    },
    description:{
        type:DataTypes.STRING,
        validate:{
            min:3
        },

    },
    creationDate:{
        type:DataTypes.INTEGER
    }

    }
)
module.exports= VirtualShelf;