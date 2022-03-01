// Stores the definition of payloads

export interface Payload<Type> {
  status: PayloadStatus; // Type
  message?: string; // Additional error / various message
  data: Type;
}

export enum PayloadStatus {
  IDLE, // Man still idling
  SUCCESS, // Payload is successfully gotten
  ERROR, // Error
  GETTING, // Getting
  GETTINGPARTIAL, // Already have partial data but we're getting more
}
