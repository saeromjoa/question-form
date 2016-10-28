import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    delete(question){
      if(confirm('Do you really want to delete this question?')){
        console.log(question);
        question.destroyRecord();
        this.transitionTo('index');
      }
    },
    updateQuestion(params, question){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          question.set(key, params[key]);
        }
      });
      
      question.save();
      this.transitionTo('question');
    }
  }
});
