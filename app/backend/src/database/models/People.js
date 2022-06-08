const People = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    fullName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
  }, {
    timestamps: false,
    modelName: 'People',
    tableName: 'Peoples',
  });

  return People;
};

module.exports = People;
