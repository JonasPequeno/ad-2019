const emailService = require('../email/email.service');
const PersonRepository = require('../../repositories/person.repository');

class DrawFriends {

    constructor() {
        this.personRepository = new PersonRepository();
    }

    randomFriends = (persons) => persons.sort(() => {
        return Math.random() - Math.random();
    });

    async drawn() {
        const persons = await this.personRepository.getAll();
        this.randomFriends(persons);

        for (let i = 0; i < persons.length; i++) {
            if (i === persons.length - 1) {
                persons[persons.length - 1].secretFriend = persons[0].name;
            } else {
                persons[i].secretFriend = persons[i + 1].name;
            }
        }

        await this.updatePersonFriend(persons);
    };

    updatePersonFriend(persons) {
        persons.map(person => {
            this.personRepository.update(person._id, {
                name: person.name, email: person.email, secretFriend: person.secretFriend
            });
        });
        this.sendEmail(persons);
    };

    sendEmail(persons) {
        persons.forEach(person => {
            emailService.sendEmail(person.name, person.email, person.secretFriend);
        });
    }
};

module.exports = DrawFriends;
