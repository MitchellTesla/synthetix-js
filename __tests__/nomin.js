import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs();

test(
  'Should return Nomin total supply',
  async () => {
    const totalSupply = await havjs.Nomin.totalSupply();
    return expect(havjs.utils.formatEther(totalSupply)).toBeTruthy();
  },
  15000
);