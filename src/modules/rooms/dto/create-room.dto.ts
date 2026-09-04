export class CreateRoomDto {
  floorId: number;
  mapLocationId: number;
  name: string;
  roomTypeId: number;
  capacity: number;
  latitude?: number;
  longitude?: number;
}
