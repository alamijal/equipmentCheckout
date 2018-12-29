import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.History_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
