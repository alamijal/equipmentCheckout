import { Template } from 'meteor/templating';
import { History } from '../../api/stuff/stuff.js';

Template.History_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  historyList() {
    return History.find();
  },
});
