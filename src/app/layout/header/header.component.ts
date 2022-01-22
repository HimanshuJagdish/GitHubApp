import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { async } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
Router

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:undefined | null | string =null;
  constructor(
    private auth: AuthService,
    private route: Router,
    private toastr: ToastrService
    ) { 
      auth.getUser().subscribe((user) => {
        this.email= user?.email;
      }
      );
      
    }

  ngOnInit(): void {
    
  }

  async handelSignOut(){
    try {
      const res = await this.auth.signOut();
      this.route.navigateByUrl("/signIn");
      this.toastr.info("login again to continue");
      this.email = null;
    } catch (error) {
      this.toastr.error("somthing is wrong");
      
    }
  }

}
