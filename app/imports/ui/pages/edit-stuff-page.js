import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff, History } from '../../api/stuff/stuff.js';


/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditStuffForm: {
    /**
     * After successful form submission, go to List_Stuff_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('History_Page');
    },
  },
});

Template.Edit_Stuff_Page.helpers({
  getDoc() {
    return Stuff.findOne(FlowRouter.getParam('_id'));
  },
  historyCollection() {
    return History;
  },
});

Template.Edit_Stuff_Page.events({
  'click .ui button'() {
    const curr = Stuff.findOne(FlowRouter.getParam('_id'));
    Stuff.remove(curr._id);
  },
});

