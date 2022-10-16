import { orderBy } from 'lodash';

export const fetchCities = async (search: string) =>
    sortedCities.filter((city) =>
        city.name.toLowerCase().includes(search.toLowerCase())
    );

export interface City {
    latitude: number;
    longitude: number;
    continent: string;
    name: string;
}

const cities: City[] = [
    {
        latitude: 52.5235,
        longitude: 13.4115,
        continent: 'Europe',
        name: 'Berlin',
    },
    { latitude: 48.8567, longitude: 2.351, continent: 'Europe', name: 'Paris' },
    {
        latitude: 51.5002,
        longitude: -0.1262,
        continent: 'Europe',
        name: 'London',
    },
    {
        latitude: 40.4167,
        longitude: -3.7033,
        continent: 'Europe',
        name: 'Madrid',
    },
    {
        latitude: 48.2092,
        longitude: 16.3728,
        continent: 'Europe',
        name: 'Vienna',
    },
    {
        latitude: 50.8371,
        longitude: 4.3676,
        continent: 'Europe',
        name: 'Brussels',
    },
    {
        latitude: 55.7558,
        longitude: 37.6176,
        continent: 'Europe',
        name: 'Moscow',
    },
    {
        latitude: 42.7105,
        longitude: 23.3238,
        continent: 'Europe',
        name: 'Sofia',
    },
    {
        latitude: 55.6763,
        longitude: 12.5681,
        continent: 'Europe',
        name: 'Copenhagen',
    },
    {
        latitude: 37.9792,
        longitude: 23.7166,
        continent: 'Europe',
        name: 'Athens',
    },
    {
        latitude: 47.4984,
        longitude: 19.0408,
        continent: 'Europe',
        name: 'Budapest',
    },
    {
        latitude: 64.1353,
        longitude: -21.8952,
        continent: 'Europe',
        name: 'Reykjavik',
    },
    {
        latitude: 53.3441,
        longitude: -6.2675,
        continent: 'Europe',
        name: 'Dublin',
    },
    {
        latitude: 41.8955,
        longitude: 12.4823,
        continent: 'Europe',
        name: 'Rome',
    },
    {
        latitude: 52.3738,
        longitude: 4.891,
        continent: 'Europe',
        name: 'Amsterdam',
    },
    {
        latitude: 59.9138,
        longitude: 10.7387,
        continent: 'Europe',
        name: 'Oslo',
    },
    {
        latitude: 52.2297,
        longitude: 21.0122,
        continent: 'Europe',
        name: 'Warsaw',
    },
    {
        latitude: 38.7072,
        longitude: -9.1355,
        continent: 'Europe',
        name: 'Lisabon',
    },
    { latitude: 46.948, longitude: 7.4481, continent: 'Europe', name: 'Bern' },
    {
        latitude: 50.4422,
        longitude: 30.5367,
        continent: 'Europe',
        name: 'Kiev',
    },
    {
        latitude: 59.3328,
        longitude: 18.0645,
        continent: 'Europe',
        name: 'Stockholm',
    },
    {
        latitude: 38.8921,
        longitude: -77.0241,
        continent: 'America',
        name: 'Washington',
    },
    {
        latitude: 40.71,
        longitude: -74.01,
        continent: 'America',
        name: 'New York',
    },
    {
        latitude: 38.5737,
        longitude: -121.4871,
        continent: 'America',
        name: 'Sacramento',
    },
    {
        latitude: 34.05,
        longitude: -118.24,
        continent: 'America',
        name: 'Los Angeles',
    },
    {
        latitude: 41.85,
        longitude: -87.65,
        continent: 'America',
        name: 'Chicago',
    },
    {
        latitude: 29.76,
        longitude: -95.36,
        continent: 'America',
        name: 'Houston',
    },
    {
        latitude: 33.45,
        longitude: -112.07,
        continent: 'America',
        name: 'Phoenix',
    },
    {
        latitude: 39.95,
        longitude: -75.16,
        continent: 'America',
        name: 'Philadelphia',
    },
    {
        latitude: 49.25,
        longitude: -123.12,
        continent: 'America',
        name: 'Vancouver',
    },
    {
        latitude: 45.4235,
        longitude: -75.6979,
        continent: 'America',
        name: 'Ottawa',
    },
    {
        latitude: -34.6118,
        longitude: -58.4173,
        continent: 'America',
        name: 'Buenos Aires',
    },
    {
        latitude: -15.7801,
        longitude: -47.9292,
        continent: 'America',
        name: 'Brasilia',
    },
    {
        latitude: -33.4691,
        longitude: -70.642,
        continent: 'America',
        name: 'Santiago',
    },
    {
        latitude: 4.6473,
        longitude: -74.0962,
        continent: 'America',
        name: 'Bogota',
    },
    {
        latitude: 19.4271,
        longitude: -99.1276,
        continent: 'America',
        name: 'Ciudad de Mexico',
    },
    {
        latitude: -25.3005,
        longitude: -57.6362,
        continent: 'America',
        name: 'Asuncion',
    },
    {
        latitude: -12.0931,
        longitude: -77.0465,
        continent: 'America',
        name: 'Lima',
    },
    {
        latitude: -34.8941,
        longitude: -56.0675,
        continent: 'America',
        name: 'Montevideo',
    },
    { latitude: 34.5155, longitude: 69.1952, continent: 'Asia', name: 'Kabul' },
    { latitude: 23.7106, longitude: 90.3978, continent: 'Asia', name: 'Dhaka' },
    {
        latitude: 39.9056,
        longitude: 116.3958,
        continent: 'Asia',
        name: 'Peking',
    },
    { latitude: 41.701, longitude: 44.793, continent: 'Asia', name: 'Tiflis' },
    {
        latitude: 28.6353,
        longitude: 77.225,
        continent: 'Asia',
        name: 'New Delhi',
    },
    {
        latitude: -6.1862,
        longitude: 106.8063,
        continent: 'Asia',
        name: 'Jakarta',
    },
    {
        latitude: 35.7061,
        longitude: 51.4358,
        continent: 'Asia',
        name: 'Teheran',
    },
    {
        latitude: 33.3157,
        longitude: 44.3922,
        continent: 'Asia',
        name: 'Baghdad',
    },
    {
        latitude: 31.7857,
        longitude: 35.2007,
        continent: 'Asia',
        name: 'Jerusalem',
    },
    {
        latitude: 35.6785,
        longitude: 139.6823,
        continent: 'Asia',
        name: 'Tokyo',
    },
    {
        latitude: 3.1502,
        longitude: 101.7077,
        continent: 'Asia',
        name: 'Kuala Lumpur',
    },
    {
        latitude: 47.9138,
        longitude: 106.922,
        continent: 'Asia',
        name: 'Ulan Bator',
    },
    {
        latitude: 27.7058,
        longitude: 85.3157,
        continent: 'Asia',
        name: 'Kathmandu',
    },
    {
        latitude: 1.2894,
        longitude: 103.85,
        continent: 'Asia',
        name: 'Singapore',
    },
    {
        latitude: 37.5139,
        longitude: 126.9828,
        continent: 'Asia',
        name: 'Seoul',
    },
    { latitude: 39.9439, longitude: 32.856, continent: 'Asia', name: 'Ankara' },
    {
        latitude: 24.4764,
        longitude: 54.3705,
        continent: 'Asia',
        name: 'Abu Dhabi',
    },
    {
        latitude: 36.7755,
        longitude: 3.0597,
        continent: 'Africa',
        name: 'Algiers',
    },
    {
        latitude: -8.8159,
        longitude: 13.2306,
        continent: 'Africa',
        name: 'Luanda',
    },
    {
        latitude: 30.0571,
        longitude: 31.2272,
        continent: 'Africa',
        name: 'Cairo',
    },
    {
        latitude: -1.2762,
        longitude: 36.7965,
        continent: 'Africa',
        name: 'Nairobi',
    },
    {
        latitude: 32.883,
        longitude: 13.1897,
        continent: 'Africa',
        name: 'Tripoli',
    },
    {
        latitude: -22.5749,
        longitude: 17.0805,
        continent: 'Africa',
        name: 'Windhoek',
    },
    {
        latitude: -25.7463,
        longitude: 28.1876,
        continent: 'Africa',
        name: 'Pretoria',
    },
    {
        latitude: -35.282,
        longitude: 149.1286,
        continent: 'Oceanic',
        name: 'Canberra',
    },
    {
        latitude: -41.2865,
        longitude: 174.7762,
        continent: 'Oceanic',
        name: 'Wellington',
    },
];

const sortedCities = orderBy(
    cities,
    [(city) => city.name.toLowerCase()],
    ['asc']
);
