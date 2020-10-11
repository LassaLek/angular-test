# TODOs
1) Do projektu přidat branch `interview-michal` ve které bude ukázka kódu
    1) __upravit direktivu *appHoverEffect* a komponentu *reveal-button*__
    Na hlavní stánce se nachází tlačítko *reveal-button* (text __Show editor__) s directivou *appHoverEffect*, která nastavuje jeho chování při najetí na tlačítko. Upravte direktivu *hover-effect.directive.ts* a komponentu *reveal-button.component.scss* aby stylově co nejvíce odpovídala a byla konzistentní se stylem stránky
    [CEOS Data](https://www.ceosdata.com/) 
    
    2)  __přidat animaci při togglu *editor-component*__
    Při stisku tlačítka *reveal-button* (text __Show editor__) se objeví componenta *Editor*. Upravte v *app.component.ts* Angular animaci, pro objevení/skrytí komponenty.
    
    3) __přestylovat [JSON Editor](https://github.com/json-editor/json-editor)__
    Po stisku tlačítka *reveal-button* (text __Show editor__) zobrazená componenta *Editor* pouzívá set stylů Spectre. (*index.html* & *editor.component.scss*) Ten stylově neodpovídá [CEOS Data](https://www.ceosdata.com/). Upravte stylování *Editoru* aby více odpovídala stylu a konzistenci [CEOS Data](https://www.ceosdata.com/). Ať už přepsáním v aplikaci (*editor.component.scss*) nebo úpravou stylů spectre (*index.html*)

    
pozn: 
Pro snazší orientaci jsou na klíčových místech vložena TODOs. Změny jsou povoleny naprosto kdekoliv, TODOs vyskytující se v kódu jsou pouze návodné, nikoliv svazující. 



# InterviewTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
