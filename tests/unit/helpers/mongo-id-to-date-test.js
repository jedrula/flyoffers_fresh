import { mongoIdToDate } from '../../../helpers/mongo-id-to-date';
import { module, test } from 'qunit';

module('Unit | Helper | mongo id to date');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = mongoIdToDate(42);
  assert.ok(result);
});
