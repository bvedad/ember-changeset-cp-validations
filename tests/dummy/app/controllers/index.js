import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async submit(changeset) {
      await changeset.validate();
      if(changeset.isValid) {
        return changeset.save();
      }
      return;
    },

    rollback(changeset) {
      return changeset.rollback();
    }
  }
});
