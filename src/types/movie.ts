import { Person } from './person';

export type movie = {
    title: string, 
    episode_id: number, 
    opening_crawl: string, 
    director: string, 
    producer: string, 
    release_date: string, 
    characters: Person[], 
    planets: [], 
    starships: [], 
    vehicles: [], 
    species: [], 
    created: string, 
    edited: string, 
    url: string
}