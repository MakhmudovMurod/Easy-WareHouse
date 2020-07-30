module.exports = (sequelize,DataTypes) => {
   
    const Product = sequelize.define('Product', {
    sort:{
        type:DataTypes.STRING
    },

    product_class:{
        type:DataTypes.STRING
    },

    prduct_subclass:{
        type:DataTypes.STRING
    },

    size:{
        type:DataTypes.STRING
    },

    drawing:{
        type:DataTypes.STRING
    },

    price:{
        type:DataTypes.STRING
    },

    createdAt:{
        type:DataTypes.DATEONLY
    },

    updatedAt:{
        type:DataTypes.DATEONLY
    }


});

    return Product;

}