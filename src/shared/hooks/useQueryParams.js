import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useQueryParams = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getQueryParams = useMemo(() => {
        return new URLSearchParams(location.search);
    }, [location.search]);

    const getParam = (key) => {
        return getQueryParams.get(key);
    };

    const setParam = (key, value) => {
        const searchParams = new URLSearchParams(location.search);
        if (value === null || value === undefined || value === '') {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }
        navigate(
            {
                search: searchParams.toString(),
            },
            { replace: true }
        );
    };

    const getAllParams = () => {
        const paramsObj = {};
        getQueryParams.forEach((value, key) => {
            paramsObj[key] = value;
        });
        return paramsObj;
    };

    const navigateWithParams = (pathname, params = {}) => {
        const filteredParams = Object.fromEntries(
            Object.entries(params).filter(
                ([key, value]) => value !== null && value !== undefined
            )
        );
        const searchParams = new URLSearchParams(filteredParams);
        navigate({
            pathname,
            search: searchParams.toString(),
        });
    };

    return {
        getParam,
        setParam,
        getAllParams,
        navigateWithParams,
    };
};
