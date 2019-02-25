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
        <h5>
         <abbr><b>Support : </b><i class="fa fa-whatsapp"></i> +91-9884580511</abbr>
         <abbr> <b>  &nbsp; | &nbsp;  </b> <i class="fa fa-envelope-o"></i> autosecsystemsbangalore@gmail.com</abbr>
        </h5>
        <h5>
         <abbr><b>Sales : </b><i class="fa fa-whatsapp"></i> +91-9148959512</abbr>
         <abbr> <b>  &nbsp; | &nbsp;  </b> <i class="fa fa-envelope-o"></i> autosecsystemsmadurai@gmail.com</abbr>
        </h5>
<hr _ngcontent-c6="">
<p _ngcontent-c6="">Copyright © <span _ngcontent-c6="" lang="en-in">AutoSec Systems 2018</span></p>
       </div>
    </div>
</div>
</div>
  `,
})
export class FooterComponent {
}
