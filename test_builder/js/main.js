function onLoad() {
	QUESTION = 1;
	console.log(`load: ${moment().format('mm:ss.SSS')}`);
	let Draw = new HTML();
	let page = Draw.page(Page.letter());

	let nameSpace = Draw.nameSpace('h6', 'Name:__________________________');
	let title = Draw.title('h4', '7th Expressions and Equations Retake Dec 03');

	let section1 = Draw.section();
	let sectionTitle = Draw.sectionTitle('p', 'Show your work');
	let sectionSubtitle = Draw.sectionSubtitle('p', 'Rewrite each expression below using the distributive property');

	let doc = document.getElementById('app_container');

	let dist = [ '@@ 24 - 36 @@', '@@ 20y - 35 @@', '@@ (-4)(2x + 4) @@', '@@ 5(4x - 3)@@' ];

	let simp = [
		'@@ -a - 5 - 8b - 2a - b - 10 @@',
		'@@ 8x + 11y - 9x + 2x - 9y + 6 @@',
		'@@ -4p - 7q + 2(2p + 3q) @@',
		'@@ 4xy + 3(2x - 4) + 8xy + 2x -3xy @@'
	];

	let twos = [
		'$$ \\frac{x}{-4} - 8 = 24 $$',
		'$$ 3(x - 3) = 21 $$',
		'$$ 24 - 3n = -12 $$',
		'$$ \\frac{15-x}{4} = 3 $$'
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
