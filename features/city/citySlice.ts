import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosCLient from '../../services/axios';
import { RootState } from '../../store/store';
import { City, fetchCities } from './cityAPI';
import { Weather } from './weatherTypes';

type Status = 'idle' | 'loading' | 'failed' | 'succeeded';

export interface CityState {
    searchedCities: {
        list?: City[];
        status: Status;
    };
    cityWeather: {
        data?: Weather;
        status: Status;
    };
}

const initialState: CityState = {
    searchedCities: {
        status: 'idle',
    },
    cityWeather: {
        status: 'idle',
    },
};

export const getSearchedCities = createAsyncThunk(
    'city/getSearchedCities',
    async (search: string) => {
        const response = await fetchCities(search);
        return response;
    }
);

export const getCityWeather = createAsyncThunk(
    'city/getCityWeather',
    async (city: City) => {
        const response = await axiosCLient.get(
            `/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
        );
        return response.data;
    }
);

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSearchedCities.fulfilled, (state, action) => {
                state.searchedCities.status = 'succeeded';
                state.searchedCities.list = action.payload;
            })
            .addCase(getSearchedCities.pending, (state) => {
                state.searchedCities.status = 'loading';
            })
            .addCase(getSearchedCities.rejected, (state) => {
                state.searchedCities.status = 'failed';
                state.searchedCities.list = undefined;
            })
            .addCase(getCityWeather.fulfilled, (state, action) => {
                state.cityWeather.data = action.payload;
                state.cityWeather.status = 'succeeded';
            })
            .addCase(getCityWeather.pending, (state) => {
                state.cityWeather.status = 'loading';
            })
            .addCase(getCityWeather.rejected, (state) => {
                state.cityWeather.status = 'failed';
                state.cityWeather.data = undefined;
            });
    },
});

export const selectSearchedCities = (state: RootState) =>
    state.city.searchedCities.list;

export const selectCityWeather = (state: RootState) =>
    state.city.cityWeather.data;

export default citySlice.reducer;
