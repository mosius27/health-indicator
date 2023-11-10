const getHealthStatus = require('./healthIndicator');

test('health > 50 should return "healthy"', () => {
  const player = { name: 'Mage', health: 90 };
  expect(getHealthStatus(player)).toBe('healthy');
});

test('health from 15 to 50 should return "wounded"', () => {
  const player = { name: 'Mage', health: 30 };
  expect(getHealthStatus(player)).toBe('wounded');
});

test('health < 15 should return "critical"', () => {
  const player = { name: 'Mage', health: 10 };
  expect(getHealthStatus(player)).toBe('critical');
});
