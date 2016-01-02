import Ember from 'ember';
import weddingPhotos from 'melanie-and-scott/utils/wedding-photos';

export default Ember.Route.extend({
  model() {
    return weddingPhotos(1,517);
  }
});
