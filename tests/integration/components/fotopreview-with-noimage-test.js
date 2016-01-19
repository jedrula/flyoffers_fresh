import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fotopreview-with-noimage', 'Integration | Component | fotopreview with noimage', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fotopreview-with-noimage}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fotopreview-with-noimage}}
      template block text
    {{/fotopreview-with-noimage}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
