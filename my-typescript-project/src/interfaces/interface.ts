export interface participant {
    id: number;
    name: string;
    age: number;
}

export interface event {
    name: string;
    place: string;
    date: string;
    participants: participant[];
}