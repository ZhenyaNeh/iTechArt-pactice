import { classNames } from "./classNames";

const theme = 'dark';
const disabled = true;
const focused = false;

describe("classNames", () => {
  test("test only with first param", () => {
    expect(classNames([theme])).toBe(theme);
  });
  
  test("test with second param", () => {
    expect(classNames([], { disabled, focused })).toBe('disabled');
  });

  test("test with first and second param", () => {
    expect(classNames([theme, "profile"], { disabled, focused })).toBe('dark profile disabled');
  });

  test("test with first and second param negative", () => {
    expect(classNames([], { focused })).toBe(undefined);
  });
  
  test("test with first and second param negative undefined", () => {
    expect(classNames([], { checked: true })).toBe("checked");
  });
});
