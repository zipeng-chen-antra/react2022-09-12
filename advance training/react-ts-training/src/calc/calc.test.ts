import { sum } from "./calc";


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 5 to equal 10', () => {
    expect(sum(5, 5)).toBe(10);
});



test('add 2 + 3 to equal 5',()=>{
    expect(sum(2,3)).toBe(5);
})