import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { NgParticlesService } from '@tsparticles/angular';
import { Hero } from './hero/hero';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private readonly ngParticlesService: NgParticlesService) { }

  ngOnInit(): void {
    void this.ngParticlesService.init(async (engine: Engine) => {
      await loadFull(engine);
    });
  }
    particlesLoaded(container?: Container): void {
      console.log("Particles container loaded", container);
    }
  protected readonly title = signal('personal-portfolio');
}
