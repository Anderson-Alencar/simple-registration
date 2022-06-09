const People = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    fullName: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
  }, {
    timestamps: false,
    modelName: 'People',
    tableName: 'Peoples',
  });

  return People;
};

module.exports = People;
