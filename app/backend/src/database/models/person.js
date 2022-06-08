const Person = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    fullName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
  }, {
    timestamps: false,
  });

  return Person;
};

module.exports = Person;
