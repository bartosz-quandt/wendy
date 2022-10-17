import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react-native';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore, RootState } from './store/store';
import cityReducer from './features/city/citySlice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
}

export const nativebaseInset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export const renderWithProviders = (
    ui: React.ReactElement,
    {
        preloadedState = {} as RootState,
        store = configureStore({
            reducer: {
                city: cityReducer,
            },
            preloadedState,
        }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) => {
    const Wrapper = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
        return <Provider store={store}>{children}</Provider>;
    };

    return render(ui, { wrapper: Wrapper, ...renderOptions });
};
