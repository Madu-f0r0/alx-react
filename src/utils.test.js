import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('Utils functions', () => {
    test('getFullYear returns the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });

    test('getFooterCopy returns correct string', () => {
        expect(getFooterCopy(true)).toBe("ALX");
        expect(getFooterCopy(false)).toBe("ALX main dashboard");
    });

    test('getLatestNotification returns the correct string', () => {
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    });
});