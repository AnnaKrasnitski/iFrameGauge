
(function()  {
let tmpl = document.createElement('template');
Access-Control-Allow-Origin:"*",
tmpl.innerHTML = `
		<form id="form">
		
			<fieldset>
				<legend>Gauge Box Properties</legend>
				<table>
					<tr>
						<td>Value</td>
						<td><input id="aps_val" type="text" name="colorProp" size="20" maxlength="20"></td>
					</tr>
				</table>
			</fieldset>
			<button type="submit">Submit</button>
		</form>


`;
class GaugeAps extends HTMLElement {
		  constructor() {
		    super();
		    this._shadowRoot = this.attachShadow({mode: 'open'});
		    this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		    this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		  };

		  _submit(e) {
		    	e.preventDefault();
				this.dispatchEvent(new CustomEvent('propertiesChanged', { detail: { properties: {
					colorProp: this.colorProp
				}}}));
				return false;
		  }

		  get colorProp() {
			 return this._shadowRoot.getElementById("aps_val").value ;
	      }

		  set colorProp(value) {
			  this._shadowRoot.getElementById("aps_val").value = value;
		  }

		 
		  static get observedAttributes() {
			  return ['colorProp'];
	      }

		  attributeChangedCallback(name, oldValue, newValue) {
			 if (oldValue != newValue) {
				  this[name] = newValue;
			 }
		  }
}

customElements.define('com-iprosis-sample-gauge-aps', GaugeAps);
})();
