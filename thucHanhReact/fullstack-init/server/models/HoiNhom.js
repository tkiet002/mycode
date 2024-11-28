

module.exports = (Sequelize, DataTypes) =>{
    const HoiNhom = Sequelize.define("HoiNhom", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        }

    },{
        freezeTableName: true,
        timestamp: false,
        createdAt: false,
        updatedAt: false
    });
    return HoiNhom;
}

