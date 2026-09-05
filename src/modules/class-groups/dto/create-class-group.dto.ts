import { IsInt, Max, Min } from 'class-validator';

export class CreateClassGroupDto {
  @IsInt()
  @Min(1)
  @Max(2)
  semester: number;

  @IsInt()
  @Min(1900)
  @Max(2100)
  year: number;
}
