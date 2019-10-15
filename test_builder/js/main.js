function onLoad() {
	console.log(`load: ${moment().format('mm:ss.SSS')}`);
	let Draw = new HTML();
	let page = Draw.page(Page.letter());

	let nameSpace = Draw.nameSpace('h6', 'Name:________________________');
	let title = Draw.title('h4', 'Unit Test 2');

	let section1 = Draw.section();
	let sectionTitle = Draw.sectionTitle('p', 'Fraction Operations:&nbsp');
	let sectionSubtitle = Draw.sectionSubtitle(
		'p',
		'Evaluate each expression below. Answer must be given in simplified form.Evaluate each expression below. Answer must be given in simplified form.'
	);

	let doc = document.getElementById('app_container');

	page.appendChild(nameSpace);
	page.appendChild(title);
	section1.appendChild(sectionTitle);
	section1.appendChild(sectionSubtitle);
	page.appendChild(section1);
	doc.appendChild(page);
}
