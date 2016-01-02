import Ember from 'ember';

const badIds = new Set([27,28,29]);

export default function weddingPhotos(start, stop) {
  let photos = Ember.A();
  let photoIndex;
  for (let i = start; i < stop; i++) {
    if (!badIds.has(i)) {
      photoIndex = ('000' + i).slice(-3);
      photos.push({
        src: `/assets/images/wedding/Norvell_${photoIndex}.jpg`,
        tn: `/assets/images/wedding/tn/Norvell_${photoIndex}.jpg`
      });
    }
  }
  return photos;
}
