class Greensalad extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

    <button class="insertedRecipe">
    	<h3>Green salad</h3>
    </button>

    <div class="insertedIngredienser">
    	<p class="antal">(Serves 4) (Start &half; hour before)</p>
    	<b>Ingredients:</b>
    	<p><label><input type="checkbox">1-2 lettuce leaves per person</label></p>
    	<p><label><input type="checkbox">2-3 tomatoes</label></p>
    	<p><label><input type="checkbox">(Feta in cubes/olives/avocado in cubes/chopped cashews/dried tomatoes/…)</label></p>
    	<p><label><input type="checkbox">(2 tbsp olive oil, 1 tsp vinegar and a sprinkle of salt)</label></p>
    </div>

    <div class="insertedHowto"> <b> Method: </b>
    	<p><label><input type="checkbox">Take 2-3 leaves from a head of lettuce</label></p>
    	<p><label><input type="checkbox">Discard dead leaves and take new ones</label></p>
    	<p><label><input type="checkbox">Cut or tear the lettuce leaves into pieces (approx. 1.5 x 3 cm)</label></p>
    	<p><label><input type="checkbox">Dice 2-3 tomatoes</label></p>
    	<p><label><input type="checkbox">Mix lettuce and tomato in a salad bowl with a fork and spoon</label></p>
    	<p><label><input type="checkbox">Leave the fork and spoon in the salad so you can take them with you</label></p>
    	<p><label><input type="checkbox">(Sprinkle cubed feta/olives/chopped cashew nuts/dried tomatoes/... over the salad)</label></p>
    	<p><label><input type="checkbox">Toss the salad if necessary. a dressing of 2 tablespoons olive oil, 1 teaspoon vinegar and a sprinkle of salt</label></p>
    	<p><label><input type="checkbox">Serve the salad</label></p>

    	<button class="slut">(End)</button>
    </div>
    `;
  }
}

customElements.define('greensalad-recipe', Greensalad);
