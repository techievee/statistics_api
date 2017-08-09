import Ember from 'ember';

const { getOwner } = Ember;

export default Ember.Component.extend({
  submit(){
      alert("Submit was clicked!");
  }
});
