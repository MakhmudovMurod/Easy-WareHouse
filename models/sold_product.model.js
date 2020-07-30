module.exports = (sequelize,DataTypes) => {
   
    const Sold_product = sequelize.define('Sold_product', {
    product_price:{
        type:DataTypes.INTEGER
    },

    product_sold_price:{
        type:DataTypes.INTEGER
    },

    additional_service_price_p_product:{
        type:DataTypes.INTEGER
    },

    additional_service_comment:{
        type:DataTypes.STRING
    },

    additional_priced_product_quantity:{
        type:DataTypes.INTEGER
    },

    total_additional_price:{
        type:DataTypes.INTEGER
    },

    sold_quantity:{
        type:DataTypes.INTEGER
    },

    overall_sold_cost:{
        type:DataTypes.INTEGER
    },

    createdAt:{
        type:DataTypes.DATEONLY
    },

    updatedAt:{
        type:DataTypes.DATEONLY
    }

    

});

    return Sold_product;

}