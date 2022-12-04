import { PartialType } from "@nestjs/mapped-types";
import { UserDto } from "./userinput.dto";

//eu pego tudo que tem no meu UserDto mas "coloco tudo como opcional"
export class PartialUserDto extends PartialType(UserDto) {
  id: string;
}

export class PartialUpdateUserDto extends PartialType(UserDto) {}
