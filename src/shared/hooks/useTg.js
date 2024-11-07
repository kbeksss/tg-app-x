import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

export function useTg(navigate) {
    const closeTg = () => {
        tg.close();
    };
    const showBackButton = () => tg.BackButton.show();

    const hideBackButton = () => tg.BackButton.hide();

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    };

    useEffect(() => {
        if (navigate) {
            showBackButton();

            tg.BackButton.onClick(() => {
                navigate(-1);
            });
        }
        return () => {
            hideBackButton();
            tg.BackButton.offClick();
        };
    }, [navigate]);

    return {
        tg,
        user: tg.initDataUnsafe?.user,
        closeTg,
        showTgBackButton: showBackButton,
        hideTgBackButton: hideBackButton,
        onToggleButton,
        queryId: tg.initDataUnsafe?.query_id,
        themeParams: tg.themeParams,
    };
}
