User role and Permission Management system with Paticie package

# Installation instruction

- Download or `git clone https://github.com/wovosoft/laravel-permissions-example.git`
- Make .env file by running `cp .env.example .env`
- Configure Database Credentials

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

- Run `composer install`
- Run `php artisan key:generate`
- Run `php artisan migrate db:seed`
- Run `yarn install`
- Run `yarn prod` or `yarn dev` or `yarn watch` etc
- Run `php artisan serve` and navigate to the link you got in your terminal. 

To login use 
```html
username : superadmin
password : superadmin123456789
```


Please contact to solaris.botech@gmail.com if you faced any installation or security problems in my project.