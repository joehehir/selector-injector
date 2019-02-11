# selector-injector

```
              __          __                   _         _           __
   ________  / /__  _____/ /_____  _____      (_)___    (_)__  _____/ /_____  _____
  / ___/ _ \/ / _ \/ ___/ __/ __ \/ ___/_____/ / __ \  / / _ \/ ___/ __/ __ \/ ___/
 (__  )  __/ /  __/ /__/ /_/ /_/ / /  /_____/ / / / / / /  __/ /__/ /_/ /_/ / /
/____/\___/_/\___/\___/\__/\____/_/        /_/_/ /_/_/ /\___/\___/\__/\____/_/
                                                  /___/
```

Append, modify and remove CSS rulesets dynamically. No additional DOM nodes required.

* Injected rulesets are appended to an existing in-memory StyleSheet.
* Original rulesets are not modified, only overridden by order or specificity.

## Installation

```sh
$ npm install selector-injector
```

Via browser:

```html
<script src="https://cdn.jsdelivr.net/npm/selector-injector@latest"></script>
```

## Usage

### Import
```js
import selectorInjector from 'selector-injector';
```

Via browser:

```html
<script>
const selectorInjector = window['selector-injector'];
</script>
```

### API

#### inject()

```js
selectorInjector.inject(selector[, ruleset]);
```
* Parameters

  * **selector**

    `String` representing a valid CSS selector.


  * **ruleset [optional]**

    `String` representing a valid CSS ruleset.

* Usage

    ```js
    // append ruleset
    selectorInjector.inject('.app-title', '{ background-color: #333; }');

    // modify ruleset
    selectorInjector.inject('.app-title', '{ background-color: #FFF; color: #333; }');

    // remove ruleset
    selectorInjector.inject('.app-title');
    ```

#### getInjectedList()

* Usage

    ```js
    // returns all injected rulesets
    selectorInjector.getInjectedList();
    ```

## Compatibility

Internet Explorer 11+

Firefox 45+

Chrome 50+

## License

MIT
