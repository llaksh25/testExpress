module.exports = (sequelize, Sequelize) => {
    const roleSequelize = sequelize.define("role", {
        role_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
        role: {
            type: Sequelize.STRING
        }
    },
    {timestamps:false,} // disable CreatedAt, UpdatedAt
    );
  
    return roleSequelize;
  };