import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {

  placeholder: string = 'Find your favorite pekemon'

  name: string = '';
  namePokemon: string = '';
  typesPokemon: string = '';
  experience: string = '';
  weight: string = '';
  base_stat: string = '';
  effort: string = ''
  urlImage: string = 'https://cdn.dribbble.com/users/956603/screenshots/6348374/pokeball.png';

  constructor(private pokemonService : PokemonService) {}

  ngOnInit(): void {
      
  }

  search() {
    this.pokemonService.getPokemon(this.name.toLowerCase()).subscribe((data: any) => {
      this.urlImage = data.sprites.other.dream_world.front_default;
      this.namePokemon = `Name: ${data.species.name}`;
      this.typesPokemon = `Pokemon-Type: ${data.types[0].type.name}`;
      this.experience = `Experience: ${data.base_experience}`;
      this.weight = `Weight: ${data.weight}`;
      this.base_stat = `Base-stat: ${data.stats[0].base_stat}`;
      this.effort = `Effort: ${data.stats[0].effort}`;
    })
  }
}
