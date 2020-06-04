import BigNumber from 'bignumber.js';

class FormatService {
  constructor() {
    BigNumber.config({
      FORMAT: {
        groupSeparator: "'",
        decimalSeparator: '.',
        groupSize: 3
      }
    });
  }
}

export default new FormatService();
