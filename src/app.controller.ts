import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserOrAdminDto } from 'generado/model/userOrAdminDto';
import { Pet } from './pet';

@Controller('validar')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() request: Pet): string {
    return this.appService.getHello();
  }

  @Post()
  create(@Body() userOrAdminDto: UserOrAdminDto) {
    if (userOrAdminDto.createUserDto) {
      // Lógica para crear un usuario
      return `Usuario creado: ${userOrAdminDto.createUserDto.name}`;
    } else if (userOrAdminDto.createAdminDto) {
      // Lógica para crear un administrador
      return `Administrador creado: ${userOrAdminDto.createAdminDto.name}`;
    }
  }
}
