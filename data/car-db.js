const cars = [
    { car: 'Ford GT40', awesome: false },
    { car: 'Prius V', awesome: true },
    { car: 'Dodge Charger', awesome: false }
];

module.exports = {
    getAll: function () {
        return cars;
    }
};