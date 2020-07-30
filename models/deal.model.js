module.exports = (sequelize,DataTypes) =>{

const Deal = sequelize.define('Deal', {
  
    result_price:{
        type:DataTypes.BIGINT
    },

    cash_discount:{
        type:DataTypes.INTEGER
    },

    final_price:{
        type:DataTypes.BIGINT
    },

    deal_date:{
        type:DataTypes.DATE
    },

    paid_cash:{
        type:DataTypes.BIGINT
    },

    createdAt:{
        type:DataTypes.DATEONLY
    },

    updatedAt:{
        type:DataTypes.DATEONLY
    }

    
});

return Deal;

};