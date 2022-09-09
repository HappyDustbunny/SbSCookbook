class Pasta extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <button class="insertedRecipe">
      <h3>Homemade pasta</h3>
    </button>

    <div class="insertedIngredienser">
      <p class="antal">(Serves 4) (Start 1 hour before)</p>
      <b>Ingredients:</b>
      <p><label><input type="checkbox">3 eggs (or 1&half; dL water)</label></p>
      <p><label><input type="checkbox">1 tbsp oil</label></p>
      <p><label><input type="checkbox">1 teaspoon of salt</label></p>
      <p><label><input type="checkbox">300 g (durum) wheat flour</label></p>
      <p><label><input type="checkbox">(Parmesan cheese)</label></p>
    </div>

    <div class="insertedHowto"> <b> Method: </b>
      <p><label><input type="checkbox">Beat 3 eggs in a Margrethe bowl</label></p>
      <p><label><input type="checkbox">Put 1 tablespoon of oil and 1 teaspoon of salt in the bowl</label></p>
      <p><label><input type="checkbox">Weigh in 300 g of flour and put most of it in the bowl</label></p>
      <p><label><input type="checkbox">Start kneading the pasta dough together. Gradually add more flour and knead until the dough does not stick</label></p>
      <p><label><input type="checkbox">Clean the table and let the dough rest, covered, for 30 minutes</label></p>
      <p><label><input type="checkbox">Sprinkle the table with flour and roll out half of the dough with a rolling pin. Roll out to 1-1&half; millimeters while turning the dough and keeping it well floured. The dough must not stick to the table</label></p>
      <p><label><input type="checkbox">When the dough has been rolled out, cut it into 1-2 cm wide strips with a butter knife or a pizza cutter. Watch the table. If you use a small spur, the edge will be finely wavy. The strips must not overlap each other. If necessary, put the finished pasta strips on a baking sheet and put them in the switched off oven to make more space</label></p>
      <p><label><input type="checkbox">Repeat with the other half of the dough (Small portions are easier to roll out. Once you have trained, you can roll out the whole portion at once - if you have space on the kitchen table)</label></p>
      <p><label><input type="checkbox">Boil 1 &half; L of water in a large pot</label></p>
      <p><label><input type="checkbox">When the water boils, add 1 teaspoon of salt and lift the pasta into the pan. Stir</label></p>
      <p><label><input type="checkbox">Set the timer for 5 minutes and turn it down to 4 (out of 9) when the water boils again</label></p>
      <p><label><input type="checkbox">Place a ladle over the pan and place 4 plates over the steam. The saucepan must be there so that the steam can escape so that it does not boil over</label></p>
      <p><label><input type="checkbox">Pour off the water when the timer rings and serve immediately</label></p>
      <p><label><input type="checkbox">(Serve with grated parmesan cheese)</label></p>

      <button class="slut">(End)</button>
    </div>
    `;
  }
}

customElements.define('pasta-recipe', Pasta);
