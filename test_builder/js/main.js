function onLoad() {
	QUESTION = 1;
	console.log(`load: ${moment().format('mm:ss.SSS')}`);
	let Draw = new HTML();
	let page = Draw.page(Page.letter());

	let nameSpace = Draw.nameSpace('h6', '-');
	let title = Draw.title('h4', 'Distributive Property Quiz');

	let section1 = Draw.section();
	let sectionTitle = Draw.sectionTitle('p', 'Rewriting Expressions:&nbsp');
	let sectionSubtitle = Draw.sectionSubtitle('p', 'Rewrite each expression below using the distributive property');

	let doc = document.getElementById('app_container');

	let questions6G = [
		'@@ 3 (5 - 4)@@',
		'@@ 56 - 28 @@',
		'@@ 6(1 + 3)@@',
		'@@ 7(16)@@',
		'@@ 36 + 48 @@',
		'@@ 24 + 16 @@',
		'@@ (2-3)(-7)@@',
		'@@ 3(12+13)@@',
		'@@ 56 - 52 @@',
		'@@ 18y + 21x @@'
	];

	page.appendChild(nameSpace);
	page.appendChild(title);
	section1.appendChild(sectionTitle);
	section1.appendChild(sectionSubtitle);
	questions6G.forEach((e) => {
		let ques = Draw.question('p', e, QUESTION);
		section1.appendChild(ques);
		QUESTION++;
	});
	page.appendChild(section1);
	doc.appendChild(page);
	MathJax.typeset();
}
