# account-order-control

## About

+ Developer : Youssuf Abramo
+ Contact : [Click Here](https://bit.ly/m/abramo) To Contact Me
+ Website : [Visit Me](https://abramo.xyz) Now

## Description

 This API is to show the list of purchases products in your account and give the access to the user to download any of them.

> [!TIP]
> You can also add the needed user roles, more order details, more customer details, and so on..

## How To Use

> [!WARNING]
> Before do anything please create a backup for your website

1. Navigate your child theme directory `/wp-content/themes/child-theme/`.
2. Copy and paste these two files, `orders-list.php` and `order-details.php` and rename them as you prefer.
3. Go to your WordPress dashboard and create two separated pages. From Page Attribute on the right panel, select your template that we had create it in step#2 and do the same for the other page.
4. Go to `Appearance > Theme File Editor` from your WordPress dashboard (if you do not see Theme File Editor please Go down below to the next section I will explain how can you enable it).
5. Select your child theme folder, and click on `function.php` and paste my code below the written code.
6. Now last step, from the same list of theme file editor, click on stylesheet `style.css` and paste the `style.css` code inside it, if you see any code inside the file you must keep it and add my code below or above it, this to avoid any damage on the default theme style.
7. Go back again to your child theme directory and create `main.js` and copy and paste from the inserted file in this repo into your file, the JS code could also be put in `Additional CSS/JS` or in any other JavaScript files, but keep in mind to change the directory of your JavaScript file at `line 84` in `order-details.php` file.
> [!CAUTION]
> This step could not work in rare cases, if that happened, simply copy the JavaScript code and open your `order-details.php` file and replace your code with this line `<script src="/main.js"></script>` also do not forget to add the code inside `<script></script>` tag.

## How To Enable Theme File Editor

1. Check if the `DISALLOW_FILE_EDIT` constant is defined in your `wp-config.php` file.
2. Go to your root directory and open the code of `wp-config.php` file.
3. Press from your keyboard on `Ctrl + F` to search on page, then type `DISALLOW_FILE_EDIT`.
4. If you see the code it should be shown like this `define('DISALLOW_FILE_EDIT', true);` This constant can be used to disable the Theme and Plugin Editors. If present, either remove or set it to false to enable the editors.
5. just change it to `define('DISALLOW_FILE_EDIT', false);`, and if you do not find this code you can just add the required code.

