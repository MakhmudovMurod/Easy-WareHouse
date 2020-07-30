module.exports = (sequelize,DataTypes) =>{

    const Problematic_sold_product = sequelize.define('Problematic_sold_product', {
      
        problem_description:{
            type:DataTypes.STRING
        },
    
        problematic_quantity:{
            type:DataTypes.INTEGER
        },
    
        altered_product_id:{
            type:DataTypes.INTEGER
        },
    
        total_price_difference:{
            type:DataTypes.INTEGER
        },

        createdAt:{
            type:DataTypes.DATEONLY
        },
    
        updatedAt:{
            type:DataTypes.DATEONLY
        }
    
    
        
    });
    
    return Problematic_sold_product;
    
    };