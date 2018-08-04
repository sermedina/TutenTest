import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
 
import { LoginService } from '../_services/login.service';
 
@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
	token:string;
 
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService) {}
 
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
 
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
 
    onSubmit() {
        this.submitted = true;

 
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
 
        this.loading = true;

        this.loginService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
					const tokent= data["sessionTokenBck"];
					this.token=data["sessionTokenBck"];
                    this.router.navigate(['/booking/'+tokent]);
                },
                error => {
                    this.loading = false;
                });
    }
}