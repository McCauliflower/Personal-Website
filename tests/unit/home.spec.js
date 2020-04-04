import {
  shallowMount,
  mount
} from "@vue/test-utils";
import {
  detectMobile
} from "@/utils/helpers"

describe("Detect Mobile", () => {
  it("Properly detects a mobile screen size", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 500
    });
    expect(detectMobile()).toBe(true)
  });
  it("Properly detects a desktop screen size", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1000
    });
    expect(detectMobile()).toBe(false)
  });
});