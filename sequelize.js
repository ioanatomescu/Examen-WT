const {Sequelize} =require('sequelize')
const sequelize=new Sequelize({
    dialect:"sqlite",
    storage:"./sqlite/mydatabase.db"

});
sequelize.sync().then(()=>{
    console.log("All models have been syncronized");
})
module.exports=sequelize;
