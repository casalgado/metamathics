function onLoad() {
	QUESTION = 1;
	console.log(`load: ${moment().format('mm:ss.SSS')}`);
	let Draw = new HTML();
	let page = Draw.page(Page.letter());

	let nameSpace = Draw.nameSpace('h6', 'Name:__________________________');
	let title = Draw.title('h4', 'Expressions and Equations Quiz Nov 7');

	let section1 = Draw.section();
	let sectionTitle = Draw.sectionTitle('p', 'Show your work');
	let sectionSubtitle = Draw.sectionSubtitle('p', 'Rewrite each expression below using the distributive property');

	let doc = document.getElementById('app_container');

	let dist = [ '@@ 21 - 56 @@', '@@ 2(9x - 3)@@', '@@ 22y - 88 @@', '@@ (-8)(x + 5) @@' ];

	let simp = [
		'@@ 5p + 3r + 2 - 1 + 8r - 8p @@',
		'@@ 21x - 5 - 7x + 5y - 3x + 9y @@',
		'@@ -5xy + 9x -8y + 6x - 6xy @@',
		'@@ 4x^2 - 3(x-3y) + 7y + x -1x^2 @@'
	];

	let twos = [
		'$$ \\frac{x}{9} + 13 = 3 $$',
		'$$ 6(x + 4) = 18 $$',
		'$$ 9x + 7 = 43 $$',
		'$$ \\frac{x + 2}{7} = 5 $$'
	];

	page.appendChild(nameSpace);
	page.appendChild(title);
	section1.appendChild(sectionTitle);
	section1.appendChild(Draw.sectionSubtitle('p', 'Rewrite each expression using the distributive property:'));
	dist.forEach((e) => {
		let ques = Draw.question('p', e, QUESTION);
		section1.appendChild(ques);
		QUESTION++;
	});
	section1.appendChild(Draw.sectionSubtitle('p', 'Simplify each expression:'));
	simp.forEach((e) => {
		let ques = Draw.question('p', e, QUESTION);
		section1.appendChild(ques);
		QUESTION++;
	});
	section1.appendChild(Draw.sectionSubtitle('p', 'Find the solution to the equation:'));
	twos.forEach((e) => {
		let ques = Draw.question('p', e, QUESTION);
		section1.appendChild(ques);
		QUESTION++;
	});

	page.appendChild(section1);
	doc.appendChild(page);
	MathJax.typeset();

	let questions6G = [
		'@@ 6 (5x - 4)@@',
		'@@ 45 - 36y @@',
		'@@ 6p(5 + 2)@@',
		'@@ 8(14)@@',
		'@@ 24 - 32 @@',
		'@@ 50 + 125y @@',
		'@@ (2 - 3)(7)@@',
		'@@ (-3)(9+13)@@',
		'@@ 56 - 70 @@',
		'@@ 68 + 72 @@',
		'@@ 12x - 9y @@',
		'@@ (-4x)(9-2) @@'
	];
	let quiz6Coct30 = [
		'@@ 36 + 54 @@',
		'@@ 30 + 75y @@',
		'@@ (6 - 4)(4)@@',
		'@@ (-4)(6+12)@@',
		'@@ 60 - 84 @@',
		'@@ 48 + 52 @@',
		'@@ 4 (2x - 5)@@',
		'@@ 64 - 32y @@',
		'@@ 8k(2 + 1)@@',
		'@@ 7(13)@@',
		'@@ 36x - 24y @@',
		'@@ (-2y)(6-4) @@'
	];

	let quiz6Doct30 = [
		'@@ 45 + 54 @@',
		'@@ 45 + 75y @@',
		'@@ (6 - 4)(5)@@',
		'@@ (-3)(4+11)@@',
		'@@ 36 - 84 @@',
		'@@ 48 + 52 @@',
		'@@ 6 (2x - 3)@@',
		'@@ 64 - 24y @@',
		'@@ 6k(5 + 3)@@',
		'@@ 4(17)@@',
		'@@ 24x - 18y @@',
		'@@ (-4y)(6-4) @@'
	];

	let quiz6Goct30 = [
		'@@ 24 + 54 @@',
		'@@ 15 + 75y @@',
		'@@ (6 - 4)(3)@@',
		'@@ (-5)(5+11)@@',
		'@@ 48 - 84 @@',
		'@@ 48 + 52 @@',
		'@@ 5 (3x - 3)@@',
		'@@ 64 - 16y @@',
		'@@ 12k(3 + 4)@@',
		'@@ 6(18)@@',
		'@@ 30x - 12y @@',
		'@@ (-3y)(6-4) @@'
	];

	let expressions = [
		'@@ 6 \\times (3 + 2)@@',
		'@@ 6 \\times 5@@',
		'@@ (6 \\times 3) + (6 \\times 2)@@',
		'@@ 18 + 12 @@',
		'@@ 12 + 16 @@'
	];
}
