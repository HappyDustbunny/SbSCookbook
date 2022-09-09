class Rice extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <button class="insertedRecipe">
        <h3>Rice</h3>
      </button>

      <div class="insertedIngredienser">
        <p class="antal">(Serves 3 - 4) (Start &frac12; hour before)</p>

        <b>Ingredients:</b>
        <p><label><input type="checkbox">3.75 dL water (Always 1.5 dL water for 1 dL rice)</label></p>
    		<p><label><input type="checkbox">2.5 dL rice (Make a note of how much rice your family eats and adjust)</label></p>
        <p><label><input type="checkbox">1 teaspoon of salt</label></p>
      </div>

      <div class="insertedHowto"> <b> Method: </b>
        <p><label><input type="checkbox">Bring 3.75 dL of water to a boil in a small saucepan.</label></p>
        <p><label><input type="checkbox">Meanwhile, rinse 2.5 dL of rice in a strainer</label></p>
        <p><label><input type="checkbox">Put 1 teaspoon of salt on top of the wet rice (so as not to forget salt)</label></p>
        <p><label><input type="checkbox">When the water boils, add the rice and stir. Put the lid on</label></p>
        <p><label><input type="checkbox">Set the timer to 12 minutes and turn the heat down to 1 (out of 9)</label></p>
        <p><label><input type="checkbox">Put the dinner plates on (or under) the lid to warm them</label></p>
        <p><label><input type="checkbox">When the timer go off, switch off the heat and reset the timer to another 12 minutes</label></p>
        <p>Tip: The rice is ready when the timer go off, but they can easily stand for another quarter of an hour</p>

      <button class="slut">(End)</button>
      </div>
    `;
  }
}

customElements.define('rice-recipe', Rice);
