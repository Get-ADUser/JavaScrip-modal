## JavaScrip-modal
Simple popup modal created with JavaScript

## See demo here
https://get-aduser.github.io/JavaScrip-modal/

## How to use

### Download and Include Modal.js and Modal.css into yout site

```
<link type="text/css" href="Modal.css" link rel="stylesheet" />
<script type="text/javascript" src="Modal.js"></script>
```

### Instantiate Modal and set parameters

Modal takes 6 parameter on instantiation.

1. Id {string} - set custom id for modal.
2. Element {string} - set html element name where modal is appended.
3. Title {string} - set modal title text.
4. Content {string|HTMLElement} - set modal content (html string or dom element).
5. Footer {object} - set footer data with object and control buttons and button functions.
6. Size {string} - set size for modal.

```
let modal = new Modal('custom-id', 'body', 'This is a title', '<div>Hello world!</div>', {}, 'kv-modal-size-m');

modal.showModal();
```
or
```
<button onclick="modal.openModal();">Show modal</button>
```

### Footer object data

Modal can be used to notification box or as confirm box.

Footer object parameters:

Notification box:
1. confirm: false
2. closeText: 'Ok'

Default values (Notification box):
1. confirm: false
2. closeText: 'Close'

```
let footer = {
      confirm: false,
      closeText: 'Ok'
    };
```

Confirm box:
1. confirm: true,
2. cancelText: 'Cancel'
3. cancelClick: function(){myCustomFunction();}
4. confirmText: 'Delete'
5. confirmClick: function(){myCustomDeleteFunction();}

Default values (Confirm box):
1. confirm: false
2. cancelText: 'Cancel'
3. cancelClick:  function(){closeModal();}
4. confirmText: 'Confirm'
5. confirmClick: function(){closeModal();}

```
let footer = {
      confirm: true,
      cancelText: 'Cancel',
      cancelClick: function(){myCustomFunction();},
      confirmText: 'Update',
      confirmClick: function(){myCustomDeleteFunction();},
    };
```

## Closing the modal with JavaScript

Order to close modal with JavaScript
```
modal.closeModal();
```

## Update modal content

To update modal content with javascript.

funtion takes 3 parameter:
1. title {string} - set tile text.
2. content {string|HTMLElement} - set modal content.
3. footer {object} - set footer data with object and control buttons and button functions.

```
modal.updateModal(title, content, footer);
```

## Modal sizing

Modal can have 4 different size (s, m, l, xl)

1. kv-modal-size-s - 300px
2. kv-modal-size-m - 500px
3. kv-modal-size-l - 800px
4. kv-modal-size-xl - 1140px

default is: kv-modal-size-m


