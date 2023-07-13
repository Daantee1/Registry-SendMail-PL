import { Component } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { UsersDataService } from '../services/users-data.service';
import emailjs from '@emailjs/browser';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {


  constructor(private usersDataService: UsersDataService) {

    this.usersDataService.getUsersObs().subscribe((data) => {
      this.user = data;
    });
  }

  user: any = {
    firstName: '',
    lastName: '',
    cityName: '',
    adress: '',
    email: '',
    phoneNumber: '',
  };

 
  registerUserAccount() {
    if (this.isValidForm()) {
      const isEmailUsed = this.usersDataService.isEmailUsed(this.user.email);
      if (isEmailUsed) {
        console.log(
          'Podany adres e-mail został już użyty. Wybierz inny adres e-mail.'
        );
      } else {
        this.usersDataService.addUsers(Object.assign({}, this.user));
        console.log('Użytkownik został dodany pomyślnie.');
      }
    }
  }

  isValidForm() {
    if (
      !this.user.firstName &&
      !this.user.lastName &&
      !this.user.cityName &&
      !this.user.adress &&
      !this.user.email &&
      !this.user.phoneNumber
    ) {
      return false;
    }
    return true;
  }

  async send() {
    if(NgForm){}
    const params = {
      from_name: "Dante",
      to_name: this.user.firstName,
      email_id : this.user.email,
      message: `Dziękuję za rejestrację na mojej stronie! Jeśli chcesz więcej informacji na mój temat, odwiedź moje profile społecznościowe:\n\nYT: https://www.youtube.com/channel/UCf8UHCMNj30uAqCtR9DMu0w\n\nGitHub: https://github.com/Daantee1`
    }
    try {
      let response = await emailjs.send('service_41my96j', 'template_zs99a5d', params, 'Bxu3bAEl-W0hdyB66')
      alert('Udało Ci się zarejestrować!')
    } catch(error){
      alert("Failed" + error)
    }
  }
}