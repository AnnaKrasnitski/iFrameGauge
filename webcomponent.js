	(function()  {
	let tmpl = document.createElement('template');
	
	/* CSS within the project */
	tmpl.innerHTML = `
		   <html>
		   <head>	   
		   </head>
		   <body>
		   
		   <div id=iframeDiv>
		   <iframe id="frameid" src="https://www.walla.co.il" integrity="83460a373a225a6fa235d263d860adff3236debd9717e5a48cd118c8f779d3ce" onLoad="click()" style="position: absolute; width:100%;  height:100%;"></iframe></div>
		   
		   <script type="text/javascript">
		   function click(){
			document.getElementById("frameid").addEventListener("click",function(){
				 window.open(this.getAttribute("src"),'_blank');
				 console.log("window opened html");
			  },false);
		 }
		   </script>
		 
		   </body></html>	 
	`;
	
	class IFrame extends HTMLElement {
	
		constructor() {
			/*specify that we have a ShadowRoot and the cloned template needs to be appended to the Shadow DOM instead of directly to the DOM */
			super();
			/* Shadow DOM */
			this._shadowRoot = this.attachShadow({mode: 'open'});
			this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
			
			this._urlLink = "https://www.sap.com/index.html";	
			console.log("url link is: " + this._urlLink);
			
			this.addEventListener("click", function() {
				window.open(this._urlLink,"_blank");
				console.log("window opened " + this._urlLink);
			}, false);		
					

	}

		get urlLink() {
			console.log("url Get " + this._urlLink);
				return this._urlLink;
		}
		set urlLink(value) {
			this._urlLink = value;
			console.log("url Set " + this._urlLink);
		}
	
	}
	  /* Define web component - input: tag and class */
	  customElements.define('com-iprosis-sample-gauge', IFrame);
	})();
