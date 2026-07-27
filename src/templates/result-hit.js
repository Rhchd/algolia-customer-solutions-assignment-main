const resultHit = (hit, { html, components, sendEvent }) => html`
<div class="result-hit">
  <div class="result-hit__image-container">
    <img class="result-hit__image" src="${hit.image}" alt="${hit.name}" />
  </div>
  <div class="result-hit__details">
    <h3 class="result-hit__name">${components.Highlight({ attribute: 'name', hit })}</h3>
    <p class="result-hit__price">$${hit.price}</p>
  </div>
  <div class="result-hit__controls">
    <button 
      type="button"
      id="view-item" 
      class="result-hit__view" 
      onClick=${(event) => {
        event.stopPropagation();
        sendEvent('click', hit, 'Product Clicked');
      }}
    >
      View 
    </button>

    <button 
      type="button"
      id="add-to-cart" 
      class="result-hit__cart" 
      onClick=${(event) => {
        event.stopPropagation();
        sendEvent('conversion', hit, 'Product Added to Cart');
      }}
    >
      Add To Cart
    </button>
  </div>
</div>`;

export default resultHit;