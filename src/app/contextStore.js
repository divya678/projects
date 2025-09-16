// context/HomeContext.tsx
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supbase';
import { data } from 'framer-motion/client';

const HomeContext = createContext({
    homeData: null,
    loading: true,
    error: null,
});

export const useHomeContext = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
    const [homeData, setHomeData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchHomeDetails = async () => {
        const { data, error } = await supabase
            .from('Home')
            .select('*');

        if (error) {
            setError(error?.message);
            console.error('Error fetching Home data:', error.message);
            // return null;
        } else {
            console.log('Fetched Home data:', data);
            setHomeData(data);
        }
        setLoading(false);
    };


    useEffect(() => {


        fetchHomeDetails();
    }, [data]);

    return (
        <HomeContext.Provider value={{ homeData, loading, error }}>
            {children}
        </HomeContext.Provider>
    );
};
