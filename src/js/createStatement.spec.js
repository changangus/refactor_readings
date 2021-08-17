import { invoice, plays } from "../data/data";
import { createStatement } from "./createStatement";

const result = `Statement for BigCo
Hamlet: $650.00 (55 seats)
As You Like It: $580.00 (35 seats)
Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;

describe('createStatement', () => {
  it('Should print result', () => {
    expect(createStatement(invoice, plays)).toBe(result);
  })
})
