import { Component, AfterViewInit, ViewChild, ElementRef, } from '@angular/core';
import { gsap } from 'gsap';
import { NgxParticlesModule } from '@tsparticles/angular';
import { ISourceOptions } from '@tsparticles/engine';
@Component({
  selector: 'app-hero',
  imports: [NgxParticlesModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  // Particles
  id = 'hero-particles';
  particlesOptions: ISourceOptions = {
      background: {
        color: { value: '#080b12' }
      },
      particles: {
        number: { value: 60 },
        color: { value: '#4CB1EF' },
        links: {
          enable: true,
          color: '#4CB1EF',
          distance: 150,
          opacity: 0.3
        },
        move: {
          enable: true,
          speed: 1
        },
        size: { value: 2 }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab'
          }
        },
        modes: {
          grab: {
            distance: 160,
            links: { opacity: 0.6 }
          }
        }
      }
    };
  // BACKGROUND
  private ctx = gsap.context();

  ngAfterViewInit() {

    this.ctx = gsap.context(() => {
      gsap.set('.hero-headings h1:nth-child(2)', {
        // x: 100,
        y: 0,
        autoAlpha: 0,
      });
      gsap.from('.hero-headings h1:nth-child(1)', {
        x: "100vw",
        duration: 1,
        ease: "back.inOut",
        delay: 2,
      })
      gsap.to('.hero-headings h1:nth-child(2)', {
        duration: 0.5,
        autoAlpha: 1,
        delay: 3,
      })
      gsap.fromTo('.hero-headings h1:nth-child(3)', {
        y: '100vh',
      }, {
        y: 0,
        duration: 1,
        ease: "back.inOut",
        delay: 1.5,
      })
      gsap.from('.infoWrapper > h1:nth-child(1)', {
        x: "-100vw",
        autoAlpha: 0,
        delay: 0.25,
        duration: 1,
        ease: 'power1',
      })
      gsap.from('.infoWrapper > h1:nth-child(2)', {
        autoAlpha: 0,
        delay: 1.25,
        duration: 1.5,
        ease: 'back',
        stagger: 0.2
      })
    });
  }
}
