/* eslint-env jquery */
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Stuff } from '../../api/stuff/stuff.js';


Template.List_Stuff_Page.onCreated(function () {
  this.templateDictionary = new ReactiveDict();

  Meteor.subscribe('stuffSearch');
});
Template.List_Stuff_Page.events({
  'submit .center.aligned.button.name': function (event, instance) {
    const params = { SearchValue: instance.templateDictionary.set('searchValue', $('#searchValue').val()) };
    Session.set('searchValue', $('#searchValue').val());
    FlowRouter.go('/nameresults/', params);
  },
});


Template.List_Stuff_Page.helpers({
  /**
   * @returns documents with name matching searchValue
   */
  stuffList() {
    return Stuff.find();
  },
  stuffSearch() {
    const instance = Template.instance();
    // If search parameter is defined, filter results
    const searchVal = instance.templateDictionary.get('searchValue');
    const searchEXP = `.*${searchVal}.*`;
    // Otherwise, return all of the stuff
    return Stuff.find({ first: { $regex: searchEXP, $options: 'i' } });
  },
});

