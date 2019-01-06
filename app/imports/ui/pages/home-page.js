import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
  isComment: function isComment() {
    const curr = Stuff.findOne(FlowRouter.getParam('_id'));
    return ((curr.comments === '' || curr.comments.length === 0 || curr.comments == null));
  },
});
