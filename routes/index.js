const { Faker, en } = require("@faker-js/faker");
const UserSchema = require("../db/modals/User");

module.exports = async (req, res) => {
    const faker = new Faker({
        locale: [en]
    });

    for (let i = 0; i < 500; i++) {
        const data = {
            _id: faker.string.uuid(),
            avatar: faker.image.avatar(),
            birthday: faker.date.birthdate(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            about: faker.lorem.paragraph(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            country: faker.location.country()
        };

        await new UserSchema(data).save();

        console.log(data);
    }

    return res.json({
        message: "Its working."
    });
};
