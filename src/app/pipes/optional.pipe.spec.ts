import { OptionalPipe } from './optional.pipe';

describe('OptionalPipe', () => {

  let sut: OptionalPipe;

  beforeEach(() => {
    sut = new OptionalPipe();
  });
  
  it('create an instance', () => {
    expect(sut).toBeTruthy();
  });

  it('should display the default message', () => {
    // act
    const actual = sut.transform(undefined);

    // assert
    expect(actual).toBe('/');
  });

  it('should display a custom message', () => {
    // act
    const actual = sut.transform(undefined, '-');

    // assert
    expect(actual).toBe('-');
  });

  it('should display the value if present', () => {
    // arrange
    const value = 'fire';

    // act
    const actual = sut.transform(value);

    // assert
    expect(actual).toBe(value);
  });
});
