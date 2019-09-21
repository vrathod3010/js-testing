const { createParagraph } = require('../src/util');

test('Should give output paragraph element with text and id as provided', () => {
    const p = createParagraph('test', '123');
    expect(p.innerHTML).toBe('test');
    expect(p.id).toBe('123');
});

test('Should give output paragraph element without text and id as undefined', () => {
    const p = createParagraph();
    expect(p.innerHTML).toBe('undefined');
    expect(p.id).toBe('undefined');
});


test('Should give output paragraph element without text as undefined', () => {
    const p = createParagraph('xyz');
    expect(p.innerHTML).toBe('xyz');
    expect(p.id).toBe('undefined');
});