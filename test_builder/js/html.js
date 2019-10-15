class HTML {
	constructor() {}

	create(type, oid, oclass, inner, attributes) {
		let id = oid || '';
		let classname = oclass || '';
		let element = document.createElement(type);
		element.setAttribute('id', id);
		element.setAttribute('class', classname);
		if (attributes) {
			for (const [ key, value ] of Object.entries(attributes)) {
				element.setAttribute([ key ], value);
			}
		}
		element.innerHTML = inner || '';
		return element;
	}

	page(pageObject) {
		return this.create('div', `page${pageObject.number}`, `page ${pageObject.size}`);
	}

	nameSpace(element, inner) {
		return this.create(element, 'nameSpace', 'nameSpace fright', inner);
	}

	title(element, inner) {
		return this.create(element, '', 'title clear', inner);
	}

	section() {
		return this.create('section', '', 'section clear');
	}

	sectionTitle(element, inner) {
		return this.create(element, '', 'sectionTitle  bold fleft', inner);
	}

	sectionSubtitle(element, inner) {
		return this.create(element, '', 'sectionSubtitle fleft', inner);
	}
}
