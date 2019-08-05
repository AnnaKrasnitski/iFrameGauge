(function()  {
let tmpl = document.createElement('template');

/* CSS within the project */
tmpl.innerHTML = `
  <style>
  </style>
 
`;

class IFrame extends HTMLElement {

	constructor() {
		/*specify that we have a ShadowRoot and the cloned template needs to be appended to the Shadow DOM instead of directly to the DOM */
		super();
		/* Shadow DOM */
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.appendChild(tmpl.content.cloneNode(true));

		this.style.height = "100%";
		//this._shadowRoot.addEventListener("onClick", this.onclick());
		this.addEventListener("click", event => {
			var event = new Event("onclick");
			this.dispatchEvent(event);
			});
		this._urlLink = "https://www.walla.co.il";	
		console.log("Sap link passed");
	}

    get urlLink() {
	    console.log("url get");
    	return this._urlLink;
    }
    set urlLink(value) {
	    console.log("url get");
		this._urlLink = value;
    }

    onclick() {
	window.open(this._urlLink);
	console.log("window opened");
  }
}
  /* Define web component - input: tag and class */
	console.log("define:");
  customElements.define('com-iprosis-sample-gauge', IFrame);
})();
