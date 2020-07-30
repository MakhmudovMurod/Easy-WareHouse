module.exports = (sequelize,DataTypes) => {
   
    const Warehouse_supplement_story = sequelize.define('Warehouse_supplement_story', {
  
    added_date:{
        type:DataTypes.DATE
    },

    added_quantity:{
        type:DataTypes.INTEGER
    },

    createdAt:{
        type:DataTypes.DATEONLY
    },

    updatedAt:{
        type:DataTypes.DATEONLY
    }
    
});

    return Warehouse_supplement_story;

}