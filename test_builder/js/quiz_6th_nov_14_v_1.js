function onLoad() {
	QUESTION = 1;
	console.log(`load: ${moment().format('mm:ss.SSS')}`);
	let Draw = new HTML();
	let page = Draw.page(Page.letter());

	let nameSpace = Draw.nameSpace('h6', 'Name:__________________________');
	let title = Draw.title('h4', 'Review From Unit 1 + Simplifying Expressions.  Nov 14');

	let section1 = Draw.section();
	let sectionTitle = Draw.sectionTitle(
		'p',
		'Show your work at the bottom. Please add questions numbers to your work.'
	);

	let doc = document.getElementById('app_container');

	let firstQuestions = [
		'@@ (-1) + (-6) @@',
		'@@ (-2) - (-7) @@',
		'@@ 3 + (-8) @@',
		'@@ 4 - 9 @@',
		'@@ (-5) + 10 @@'
	];

	let secondQuestions = [
		'$$ \\frac{2}{4} + \\frac{3}{6} $$',
		'$$ \\frac{12}{4} - \\frac{4}{2} $$',
		'$$ \\frac{2}{8} \\times \\frac{4}{8} $$',
		'$$ \\frac{3}{4} \\div \\frac{1}{4} $$',
		'$$ \\frac{1}{2} + (\\frac{3}{4} \\times \\frac{4}{2})$$'
	];

	let thirdQuestions = [
		'@@ 8p + 3q + 5 - 1 - 8q - 8p @@',
		'@@ 21x - 6 - 7x + 5y - 7 + 5y @@',
		'@@ -5y + 9y -8y + 6 - 6x @@'
	];

	page.appendChild(nameSpace);
	page.appendChild(title);
	section1.appendChild(sectionTitle);
	section1.appendChild(Draw.sectionSubtitle('p', '0.5 points per question. Solve each integer operation:'));
	firstQuestions.forEach((e) => {
		let ques = Draw.question('p', e, QUESTION);
		section1.appendChild(ques);
		QUESTION++;
	});
	section1.appendChild(Draw.sectionSubtitle('p', '0.5 points pre question. Solve each fraction operation:'));
	secondQuestions.forEach((e) => {
		let ques = Draw.question('p', e, QUESTION);
		section1.appendChild(ques);
		QUESTION++;
	});
	section1.appendChild(Draw.sectionSubtitle('p', '1 point per question. Simplify each expression:'));
	thirdQuestions.forEach((e) => {
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
