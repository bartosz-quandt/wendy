import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export interface CityState {
    searchedCities?: string[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CityState = {
    searchedCities: undefined,
    status: 'idle',
};

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        getSearchedCities: (state) => {
            state.status = 'loading';
        },
    },
});

export const { getSearchedCities } = citySlice.actions;

export const selectSearchedCities = (state: RootState) => state.city.searchedCities;

export default citySlice.reducer;