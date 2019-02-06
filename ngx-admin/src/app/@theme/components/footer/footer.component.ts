import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
<div class="footer-pane">
<div class="row">
    <div class="col col-md-12">
        <div class="socials">
          <a href="#" target="_blank" class="ion ion-social-github"></a>
          <a href="#" target="_blank" class="ion ion-social-facebook"></a>
          <a href="#" target="_blank" class="ion ion-social-twitter"></a>
          <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
        </div>
    </div>
    <div class="col col-md-12">
       <div class="panel contact-pane">
        <p>
         <abbr>For Enquiry</abbr>: +91-9884580511  |  +91-8197410511  |  +91-8754965478</p>
        <p>
        <i class="fa fa-envelope-o" ></i>
        <abbr>Email</abbr>
        : autosecsystemsbangalore@gmail.com  |  autosecsystemschennai@gmail.com | autosecsystemsmadurai@gmail.com
        </p>
	        <hr>
          <p>Copyright &copy; <span lang="en-in">AutoSec Systems 2018</span></p>
       </div>
    </div>
</div>
</div>
  `,
})
export class FooterComponent {
}
