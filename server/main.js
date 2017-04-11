import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import {Employees} from '../imports/collections/employees';
import {image, helpers} from 'faker';

Meteor.startup(() => {

    const numRecords = Employees.find({}).count();
    console.log('------------------------------------------');
    console.log('numRecords ',numRecords);
    console.log('------------------------------------------');
    if (!numRecords) {
        _.times(5000, () => {
            const {name, email, phone} = helpers.createCard();
            Employees.insert({
                name, email, phone,
                avatar: image.avatar()
            })
        })
    }

    Meteor.publish('employees', function(per_page){
        return Employees.find({}, {limit:per_page});
    })

});
