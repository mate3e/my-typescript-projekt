import { Event } from '../interfaces/interface';

export class eventManager {
    private events: Event[] = [];
    private nextEventId: number = 1;
    private nextParticipantId: number = 1;

    createEvent(name: string, place: string, date: string): Event {
        const newEvent: Event = {
            id: this.nextEventId++,
            name,
            place,
            date,
            participants: []
        };
        this.events.push(newEvent);
        return newEvent;
}

editEvent(id: number, name: string, place: string, date: string): Event {