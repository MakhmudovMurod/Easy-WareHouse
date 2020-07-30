module.exports = (sequelize,DataTypes) => {
   
    const Warehouse_reserve = sequelize.define('Warehouse_reserve', {
  
    available_quantity:{
        type:DataTypes.INTEGER
    },

    createdAt:{
        type:DataTypes.DATEONLY
    },

    updatedAt:{
        type:DataTypes.DATEONLY
    }

    
});

    return Warehouse_reserve;

}