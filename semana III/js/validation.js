(function(){

window.Validation = window.Validation || {};  

var Validation = window.Validation;

Validation.validate = function(id) {
	this._regexValidateName = /^(?:(?:[A-Z]{1}[a-z]+))$/;
	this._regexValidateLastName = /^(?:(?:[A-Z]{1}[a-z]+))$/;
    this._regexValidateAge = /^\d+$/;
	this._regexValidateEmail = /^(?:[a-z._]+)(?: |@|)(?:(?:[a-z]+)(?:|\.|))+(?:[a-z]+)$/;
	this._regexValidateCpf = /^(?:\d{3})(?:|\.|)(?:\d{3})(?:|\.|)(?:\d{3})(?:|-|)(?:\d{2})$/;
	this._element = document.getElementById(id);
};

Validation.validate.prototype.validateFirstName = function() {
	if(this._regexValidateName.exec(this._element.value) === null)
		this._element.className = "error";
	else
		this._element.className = "";
};

Validation.validate.prototype.validateLastName = function() {
	if(this._regexValidateLastName.exec(this._element.value) === null )
		this._element.className = "error";
	else
		this._element.className = "";
};

Validation.validate.prototype.validateAge = function() {
   if(this._regexValidateAge.exec(this._element.value) === null) 
       this._element.className = "error";
   else
       this._element.className = "";
};

Validation.validate.prototype.validateEmail = function() {
   if(this._regexValidateEmail.exec(this._element.value) === null) 
       this._element.className = "error";
   else
       this._element.className = "";
};

Validation.validate.prototype.validateCpf = function() {
   if(this._regexValidateCpf.exec(this._element.value) === null) 
       this._element.className = "error";
   else
       this._element.className = "";
};


})();