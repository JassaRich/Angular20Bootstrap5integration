import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Sidebar } from "./layout/sidebar/sidebar";
import { Navbar } from "./layout/navbar/navbar";
@Component({
  selector: 'app-root',
  imports: [CommonModule, Sidebar, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20';
}
