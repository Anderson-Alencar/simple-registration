const Peoples = require('./Peoples.json');

const mockCreate = (Instance, data) => {
  if (!data) {
    return;
  }

  const newData = data;
  if (Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const People = {
  create: async (data) => mockCreate(Peoples, data),
  findAll: async () => Peoples,
};

module.exports = {
  People,
};
