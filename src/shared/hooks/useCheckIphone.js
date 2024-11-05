export function useCheckIphone() {
    return {
        isIphone: /iPhone/i.test(navigator.userAgent),
    };
}
