## Constants

<dl>
<dt><a href="#appearOptions">appearOptions</a> : <code>object</code></dt>
<dd><p>options for animations</p>
</dd>
<dt><a href="#appearOnScroll">appearOnScroll</a> : <code>IntersectionObserver</code></dt>
<dd><p>listens to the HTML element that is passed in
and automatically displays upcoming cards</p>
</dd>
<dt><a href="#doGet">doGet</a> ⇒ <code>Promise</code></dt>
<dd><p>takes a url as an arguments fetches data from that link</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#changeState">changeState(elem, removedClass, addedClass)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#navToggle">navToggle(navToggler, navList)</a> ⇒ <code>void</code></dt>
<dd><p>changes the state of the navigation lists from displayed to hide and vice versa</p>
</dd>
<dt><a href="#formatNumber">formatNumber(number)</a> ⇒ <code>string</code></dt>
<dd><p>this function is dedicated to format large numbers related to country&#39;s area and population</p>
</dd>
<dt><a href="#matchName">matchName(selected)</a> ⇒ <code>string</code></dt>
<dd><p>takes the country&#39;s name from the map, turns it into a proper name for searching</p>
</dd>
<dt><a href="#debounce">debounce(func, wait)</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#createImage">createImage(className, width, src)</a> ⇒ <code>HTMLElement</code></dt>
<dd></dd>
<dt><a href="#createCard">createCard(country, body)</a> ⇒ <code>HTMLCollection</code></dt>
<dd><p>createCard function creates a separate card to display country&#39;s details</p>
</dd>
<dt><a href="#CreateCountryHTML">CreateCountryHTML(param0, param1)</a> ⇒ <code>HTMLCollection</code></dt>
<dd></dd>
<dt><a href="#getMap">getMap(countries)</a> ⇒ <code>SVGPathElement</code></dt>
<dd></dd>
<dt><a href="#setFavorite">setFavorite(star, className, favCountries, alpha3Code)</a> ⇒</dt>
<dd></dd>
</dl>

<a name="appearOptions"></a>

## appearOptions : <code>object</code>
options for animations

**Kind**: global constant  
<a name="appearOnScroll"></a>

## appearOnScroll : <code>IntersectionObserver</code>
listens to the HTML element that is passed in
and automatically displays upcoming cards

**Kind**: global constant  
**Example**  
```js
appearOnScroll.observe(countryHTML);
```
<a name="doGet"></a>

## doGet ⇒ <code>Promise</code>
takes a url as an arguments fetches data from that link

**Kind**: global constant  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

**Example**  
```js
result = await doGet(REST_URL.all);
```
<a name="changeState"></a>

## changeState(elem, removedClass, addedClass) ⇒ <code>void</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>HTMLElement</code> |  |
| removedClass | <code>String</code> | a class that is going to be removed |
| addedClass | <code>string</code> | a class that is going to be added |

**Example**  
```js
changeState(navToggler, 'nav__toggler--close', 'nav__toggler--open');
```
<a name="navToggle"></a>

## navToggle(navToggler, navList) ⇒ <code>void</code>
changes the state of the navigation lists from displayed to hide and vice versa

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navToggler | <code>HTMLElement</code> | a button that is responsible for displaying of hiding nav list |
| navList | <code>HTMLElement</code> | a list of navigation HTMLElements |

**Example**  
```js
navToggler.addEventListener('click', navToggle.bind(null, navToggler, navList));
```
<a name="formatNumber"></a>

## formatNumber(number) ⇒ <code>string</code>
this function is dedicated to format large numbers related to country's area and population

**Kind**: global function  
**Returns**: <code>string</code> - that instead of zeros will display million or thousand  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | take a number |

**Example**  
```js
formatNumber(country.details.population)
```
<a name="matchName"></a>

## matchName(selected) ⇒ <code>string</code>
takes the country's name from the map, turns it into a proper name for searching

**Kind**: global function  
**Returns**: <code>string</code> - which corresponds to the API requirements  

| Param | Type |
| --- | --- |
| selected | <code>string</code> | 

**Example**  
```js
let selected = d.properties.name.toLowerCase();
		selected = matchName(selected);
```
<a name="debounce"></a>

## debounce(func, wait) ⇒ <code>function</code>
**Kind**: global function  
**Returns**: <code>function</code> - which takes arguments from cb function and will implement it inside  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | takes the function that should to be delayed |
| wait | <code>number</code> | amount of delay time |

**Example**  
```js
const search = debounce(renderTable, 700);searchInput.addEventListener('input', search);
```
<a name="createImage"></a>

## createImage(className, width, src) ⇒ <code>HTMLElement</code>
**Kind**: global function  
**Returns**: <code>HTMLElement</code> - image tag  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>string</code> | class name for image |
| width | <code>number</code> | to set default with for image |
| src | <code>string</code> | a url for image |

**Example**  
```js
const img = createImage('card__image', 100, country.flag);
```
<a name="createCard"></a>

## createCard(country, body) ⇒ <code>HTMLCollection</code>
createCard function creates a separate card to display country's details

**Kind**: global function  
**Returns**: <code>HTMLCollection</code> - body argument as an html collection  

| Param | Type |
| --- | --- |
| country | <code>object</code> | 
| body | <code>HTMLElement</code> | 

**Example**  
```js
createCard(state.country, cardBody);
```
<a name="CreateCountryHTML"></a>

## CreateCountryHTML(param0, param1) ⇒ <code>HTMLCollection</code>
**Kind**: global function  
**Returns**: <code>HTMLCollection</code> - with all the necessary data about country  

| Param | Type | Description |
| --- | --- | --- |
| param0 | <code>object</code> | an object that contains all the information for about country |
| param1 | <code>object</code> | the state object that contains favorite countries |

**Example**  
```js
const countryHTML = CreateCountryHTML(countryData, state);
```
<a name="getMap"></a>

## getMap(countries) ⇒ <code>SVGPathElement</code>
**Kind**: global function  
**Returns**: <code>SVGPathElement</code> - a group of path elements  

| Param | Type | Description |
| --- | --- | --- |
| countries | <code>array</code> | takes geo path of different countries |

**Example**  
```js
const g = getMap(svg, countriesMap);
```
<a name="setFavorite"></a>

## setFavorite(star, className, favCountries, alpha3Code) ⇒
**Kind**: global function  
**Returns**: all the favorites countries' alpha3code  

| Param | Type |
| --- | --- |
| star | <code>HTMLElement</code> | 
| className | <code>string</code> | 
| favCountries | <code>Array</code> | 
| alpha3Code | <code>string</code> | 

**Example**  
```js
state.favCountries = setFavorite(
				button,
				'country__star--added',
				state.favCountries,
				state.countryCode[countryName]
			);
```
