import {
  Body,
  Controller,
  Delete,
  Get,
  //HttpCode,
  //HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
    //return `This action returns all coffees. Limit ${limit}, offset: ${offset}`;
    // Podemos usar decorador @Res() para usar código de Express
    //respuesta.status(200).send('ok');
  }

  //   @Get(':id')
  //   findOne(@Param() params) {
  //     return `This action returns #${params.id} coffee`;
  //   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(typeof id); //=> true
    return this.coffeeService.findOne(id);
    //return `This action returns #${id} coffee`;
  }

  @Post()
  //@HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log('es instancia:', createCoffeeDto instanceof CreateCoffeeDto);
    console.log(createCoffeeDto);
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  erase(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
