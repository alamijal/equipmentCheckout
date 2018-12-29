import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.List_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
Template.View_Comments.helpers({
  getDoc() {
    return Stuff.findOne(FlowRouter.getParam('_id'));
  },
  stuffCollection() {
    return Stuff;
  },
});
