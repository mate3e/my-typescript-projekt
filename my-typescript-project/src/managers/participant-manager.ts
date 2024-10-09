import { participant } from '../interfaces/interface';

export class participantManager {
    private participants: participant[] = [];
    private nextParticipantId: number = 1;

    registerParticipant(name: string, age: number): participant {
        const newParticipant: participant = {
            id: this.nextParticipantId++,
            name,
            age
        };
        this.participants.push(newParticipant);
        return newParticipant;
    }


}