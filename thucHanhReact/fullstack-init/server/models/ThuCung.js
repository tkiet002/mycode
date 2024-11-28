
module.exports = (Sequelize, DataTypes) =>{
    const ThuCung = Sequelize.define('ThuCung', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{});
    console.log(ThuCung);
    return ThuCung;
}