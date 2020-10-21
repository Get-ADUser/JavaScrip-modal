/** 
 * Modals v1: Simple dialogue modal popup
 * (c) 2020 Karmo V
 * MIT License
 * https://github.com/Get-ADUser/JavaScrip-modal
 *
 * @class Modal - create popup modal
 */
class Modal{
	
	/**
	 * Set modal parameters
	 *
	 * @param {string} id - kv-modal
	 * @param {string} attachTo - body
	 * @param {string} title
	 * @param {string|HTMLElement} content
	 * @param {object} footer
	 * @param {string} size - kv-modal-size-m
	 */
	constructor(id = 'kv-modal', attachTo = 'body', title, content, footer, size = 'kv-modal-size-m')
	{
		this.id = id;
		this.attachTo = attachTo;
		this.title = title;
		this.content = content;
		this.footer = footer;
		this.size = size;
	}
	
	/**
	* Add events close event on close button and on backdrop
	* 
	* @returns {boolean}
	*/
	addEvents() 
	{		
		let backdrop = document.querySelector('.kv-backdrop');
		let close = document.querySelector('.kv-close');
		let closeModal = () => {
			this.closeModal();
		};
		
		if (backdrop !== null) {
			backdrop.addEventListener('click', function(e) {	
				if (!e.target.classList.contains('kv-backdrop')) {
					return false;
				}
				closeModal();
			});
		}
		
		if (close !== null) {
			close.addEventListener('click', function(e) {	
				closeModal();
			});
		}
		return false;
	}
    
	/**
	* Show modal
	*/
	showModal()
	{
		this.createModal();
	}
	
	/**
	 * Update modal title, content and footer
	 * 
	 * @param {string} title - false
	 * @param {string|HTMLElement} content - false
	 * @param {object} footer - false
	 */
	updateModal(title = false, content = false, footer = false)
	{
		let modal = document.querySelector(`#${this.id}`);
		if (title !== false) {
			this.title = title;
			let oldHeader = modal.querySelector('.kv-header');
			oldHeader.innerHTML = '';
			oldHeader.insertAdjacentElement('afterBegin',  this.createHeader());
		}
		
		if (content !== false) {
			let oldContent = modal.querySelector('.kv-content');
			oldContent.innerHTML = '';
			content instanceof HTMLElement ? 
				oldContent.insertAdjacentElement('afterBegin', content) : 
				oldContent.insertAdjacentHTML('afterBegin', content);
		}
		
		if (footer !== false) {
			this.footer = footer;
			let oldFooter = modal.querySelector('.kv-footer');
			oldFooter.innerHTML = '';
			oldFooter.insertAdjacentElement('afterBegin',  this.createFooter());
		}
	}
	
	/**
	* Close modal
	*/
	closeModal()
	{
		let element = document.querySelector(this.attachTo).querySelector('.kv-backdrop');
		if (element !== null) {
			element.parentNode.removeChild(element);
		}
	}
	
	/**
	* Create header for modal
	* 
	* @returns {HTMLElement}
	*/
	createHeader()
	{
		let closeModal = () => {
			this.closeModal();
		};	
		
		let header = document.createElement('div');
		let title = document.createElement('div');
		let close = document.createElement('button');
		header.classList.add('kv-header-wrapper');
		title.classList.add('kv-title');
		title.innerHTML = this.title;
		close.classList.add('kv-close');
		close.setAttribute('type', 'button');
		close.innerHTML = 'X';
		close.onclick = function() {closeModal()};
		header.appendChild(title);
		header.appendChild(close);
		
		return header;
	}
	
	/**
	* Create footer for modal
	*
	* @returns {HTMLElement}
	*/
	createFooter()
	{
		let closeModal = () => {
			this.closeModal();
		};		
		
		let wrapper = document.createElement('div');
		wrapper.classList.add('kv-confirm-wrapper');
		
		if (Object.keys(this.footer).length > 0 && this.footer.confirm === true) {
			let cancel = document.createElement('button');
			let confirm = document.createElement('button');
			cancel.classList.add('kv-button', 'kv-cancel');
			confirm.classList.add('kv-button','kv-confirm');
			cancel.innerHTML = this.footer.hasOwnProperty('cancelText')? this.footer.cancelText : 'Cancel';
			cancel.onclick = this.footer.hasOwnProperty('cancelClick')? this.footer.cancelClick : function(){ closeModal() };
			confirm.innerHTML = this.footer.hasOwnProperty('confirmText')? this.footer.confirmText : 'Confirm';
			confirm.onclick = this.footer.hasOwnProperty('confirmClick')? this.footer.confirmClick : function(){ closeModal() };
			wrapper.appendChild(cancel);
			wrapper.appendChild(confirm);
		} else {
			let close = document.createElement('button');
			close.classList.add('kv-button', 'kv-confirm-close');
			close.innerHTML = this.footer.hasOwnProperty('closeText')? this.footer.closeText : 'Close';
			close.onclick = function() {
				closeModal();
			}
			wrapper.appendChild(close);
		}
		return wrapper;
	}

	/**
	* Create modal
	*/
	createModal()
	{
		let backdrop = document.createElement('div');
		let modal = document.createElement('div');
        let header = document.createElement('div');
        let content = document.createElement('div');
        let footer = document.createElement('div');
		
		backdrop.classList.add('kv-backdrop');
		modal.classList.add('kv-modal', this.size);
		modal.setAttribute('id', this.id);
		header.classList.add('kv-header');
		content.classList.add('kv-content');
		footer.classList.add('kv-footer');
		footer.appendChild(this.createFooter());

        content.insertAdjacentHTML('afterBegin', content === false? '' : this.content);

		header.appendChild(this.createHeader());
        modal.appendChild(header);
        modal.appendChild(content);
        modal.appendChild(footer);
		backdrop.appendChild(modal);
		
        document.querySelector(this.attachTo).insertAdjacentElement('afterBegin', backdrop);
		this.addEvents();
    }

}
