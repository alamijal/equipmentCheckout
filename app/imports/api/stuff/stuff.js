import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const History = new Mongo.Collection('History');
export const HistorySchema = new SimpleSchema({
  first2: {
    label: 'First Name',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: 'John',
    },
  },
  last2: {
    label: 'Last Name',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: 'Doe',
    },
  },
  number2: {
    label: 'Phone Number',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: '123-456-7890',
    },
  },
  time2: {
    label: 'Check-in Time',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'History',
      type: 'time',
    },
  },
  date2: {
    label: 'Check-In Date',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'History',
      type: 'date',
    },
  },
  equipmentName2: {
    label: 'Item Name & Number',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: 'HDMI to VGA adapter #2',
    },
  },
  equipmentType2: {
    label: 'Equipment Type',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: '123-456-1234',
      type: 'select-radio-inline',
      options: function () {
        return [{ label: 'Laptop', value: 'Laptop' },
          { label: 'Adapter', value: 'Adapter' }, { label: 'Charger', value: 'Charger' },
          { label: 'Other', value: 'Other' }];
      },
    },
  },
});


History.attachSchema(HistorySchema);
/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  first: {
    label: 'First Name',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: 'John',
    },
  },
  last: {
    label: 'Last Name',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: 'Doe',
    },
  },
  number: {
    label: 'Phone Number',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: '123-456-7890',
    },
  },
  time: {
    label: 'Checkout Time',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      type: 'time',
    },
  },
  date: {
    label: 'Date',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      type: 'date',
    },
  },
  equipmentName: {
    label: 'Item Name & Number',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: 'HDMI to VGA adapter #2',
    },
  },
  comments: {
    label: 'Comments',
    type: String,
    optional: true,
    max: 100,
    autoform: {
      type: 'text',
      group: 'Stuff',
    },
  },

  equipmentType: {
    label: 'Equipment Type',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: '123-456-1234',
      type: 'select-radio-inline',
      options: function () {
        return [{ label: 'Laptop', value: 'Laptop' },
        { label: 'Adapter', value: 'Adapter' }, { label: 'Charger', value: 'Charger' },
        { label: 'Other', value: 'Other' }];
      },
    },
  },
});


Stuff.attachSchema(StuffSchema);
console.log('hello');
// noinspection JSUnresolvedVariable
