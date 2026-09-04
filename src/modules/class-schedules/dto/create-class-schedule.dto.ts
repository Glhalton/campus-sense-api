export class CreateClassScheduleDto {
  classGroupId: number;
  roomId: number;
  dayOfWeek: string;
  startTime: Date;
  endTime: Date;
}
