export interface participant {
    id: number;
    name: string;
    age: number;
}

export interface Event {
    id: number
    name: string;
    place: string;
    date: string;
    participants: participant[];
}