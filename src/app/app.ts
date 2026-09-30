import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Statistics } from './components/statistics/statistics';
import { About } from './components/about/about';
import { Features } from './components/features/features';
import { AcademicJourney } from './components/academic-journey/academic-journey';
import { Lecturers } from './components/lecturers/lecturers';
import { Achievements } from './components/achievements/achievements';
import { Facilities } from './components/facilities/facilities';
import { Research } from './components/research/research';
import { Careers } from './components/careers/careers';
import { Gallery } from './components/gallery/gallery';
import { Admission } from './components/admission/admission';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Statistics,
    About,
    Features,
    AcademicJourney,
    Lecturers,
    Achievements,
    Facilities,
    Research,
    Careers,
    Gallery,
    Admission,
    Footer,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
})
export class App {}
