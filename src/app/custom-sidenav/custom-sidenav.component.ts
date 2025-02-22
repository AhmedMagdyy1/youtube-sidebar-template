import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



export type MenuItem = {
  icon: string,
  label : string,
  route?:string
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule,MatListModule,MatIconModule,RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.scss']
})
export class CustomSidenavComponent {
  sidenavCollapsed = signal(false)
  @Input() set collapsed(val:boolean){
    this.sidenavCollapsed.set(val)
  }

  profileImageSize = computed(() => this.sidenavCollapsed() ? '35' : '100')

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content'
    },
    {
      icon:'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon:'comment',
      label: 'Comments',
      route: 'comments'
    }
  ])
}
