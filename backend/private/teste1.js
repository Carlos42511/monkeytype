test('buildLabel should create a label element with the correct text and hint', () => {
    const label = buildLabel('group', 'Name', 'Enter your full name');
    expect(label.tagName).toBe('LABEL');
    expect(label.innerHTML).toContain('Name');
    expect(label.querySelector('.tooltip-text').innerHTML).toBe('Enter your full name');
  });
  