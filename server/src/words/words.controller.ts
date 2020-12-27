import { Controller, Get, Req, Query, Post, Body } from '@nestjs/common'
import { Request } from 'express'
import { CreateWordDto } from './create-word.tdo'

@Controller('words')
export class WordsController {
  @Get()
  // @HttpCode(204)
  // @Header('Cache-Control', 'none')
  findAll(@Req() request: Request, @Query('title') title: string): string {
    console.log(title)

    return 'This action returns all cats'
  }

  @Post()
  async create(@Body() createWordDto: CreateWordDto) {
    return createWordDto
  }
}

// @Get(':id')
// findOne(@Param() params): string {
//   console.log(params.id);
//   return `This action returns a #${params.id} cat`;
// }

// @Get(':id')
// findOne(@Param('id') id: string): string {
//   return `This action returns a #${id} cat`;
// }
