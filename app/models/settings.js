import Ember from 'ember';

import Model from 'ember-data/model';  
import attr from 'ember-data/attr';

export default Model.extend({  
  ip: attr('string'),
  threshold: attr('string'),
  email: attr('string'),
  alert: attr('boolean', { defaultValue: false })
});