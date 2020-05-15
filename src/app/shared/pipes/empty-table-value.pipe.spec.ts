import { EmptyTableValuePipe } from './empty-table-value.pipe';

describe('EmptyTableValuePipe', () => {
  it('create an instance', () => {
    const pipe = new EmptyTableValuePipe();
    expect(pipe).toBeTruthy();
  });
});
