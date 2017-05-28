# ng2-datetimepicker-jalali

## Demo
coming soon

## آموزش فارسی 
 به زودی

## Installation

To install this library, run:

```bash
$ npm install ng2-datetimepicker-jalali --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-datetimepicker-jalali
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { DateTimePickerModule } from 'ng2-datetimepicker-jalali';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    DateTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

edit css styles.css
```css
/*styles.css*/
@import '~bootstrap/dist/css/bootstrap.min.css';
```

you can use `ng2-datetimepicker` components, in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<ng2-datetimepicker></sampleComponent>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Sajad Mehrabi](mailto:mehrabisajad@outlook.com)
