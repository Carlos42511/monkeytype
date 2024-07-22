test('buildLabel should create a bold label with hint for group', () => {
    const label = buildLabel('group', 'Name', 'Enter your full name');
    expect(label.style.fontWeight).toBe('bold');
    expect(label.querySelector('.tooltip-text').innerHTML).toBe('Enter your full name');
  });
  
  test('buildLabel should create a bold label without hint for group', () => {
    const label = buildLabel('group', 'Name', null);
    expect(label.style.fontWeight).toBe('bold');
    expect(label.querySelector('.tooltip')).toBeNull();
  });
  
  test('buildLabel should create a lighter label with hint for item', () => {
    const label = buildLabel('item', 'Name', 'Enter your full name');
    expect(label.style.fontWeight).toBe('lighter');
    expect(label.querySelector('.tooltip-text').innerHTML).toBe('Enter your full name');
  });
  
  test('buildLabel should create a lighter label without hint for item', () => {
    const label = buildLabel('item', 'Name', null);
    expect(label.style.fontWeight).toBe('lighter');
    expect(label.querySelector('.tooltip')).toBeNull();
  });
  