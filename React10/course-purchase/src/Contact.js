import React, { Component } from 'react';
// import easysoap from 'easysoap';
// import fs from 'easysoap';

class Contact extends Component {
	sendSoap(){
		//alert('hello');
		var xmlhttp = new XMLHttpRequest();
		var soapUrl = 'https://isp.s04.US.wal-mart.com:60402/services/scheduling/AssocAccess';
            xmlhttp.open('POST', soapUrl, true);

            // build SOAP request
            var sr = '<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns=\"http://www.xmlns.walmartstores.com/StoreSystems/StoreServices/datatypes/AssocAccess/1.0/\"><soapenv:Header><wsse:Security soapenv:mustUnderstand=\"1\" xmlns:wsse=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd\"><wsse:UsernameToken><wsse:Username>svc_scheduling</wsse:Username><wsse:Password Type=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText\">{access}</wsse:Password></wsse:UsernameToken></wsse:Security></soapenv:Header><soapenv:Body><ns:AssocAccess><ns:userId>{user}</ns:userId><ns:storeNbr>{siteID}</ns:storeNbr><ns:countryCode>{countryCode}</ns:countryCode></ns:AssocAccess></soapenv:Body></soapenv:Envelope>';
            // var sr =
            //     '<?xml version="1.0" encoding="utf-8"?>' +
            //     '<soapenv:Envelope ' + 
            //         'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            //         'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            //         'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            //         'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            //         '<soapenv:Body>' +
            //             '<api:some_api_call soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
            //                 '<username xsi:type="xsd:string">login_username</username>' +
            //                 '<password xsi:type="xsd:string">password</password>' +
            //             '</api:some_api_call>' +
            //         '</soapenv:Body>' +
            //     '</soapenv:Envelope>';

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        alert('done. use firebug/console to see network response');
                    }
                }
            }
            // Send the POST request
            xmlhttp.setRequestHeader('Content-Type', 'text/xml');
            xmlhttp.send(sr);
            // send request
            // ...
        //}
	}
    render () {
        return (
            <div style={{textAlign: 'center'}}>
            <h2>Contact us</h2>
            <button onClick={this.sendSoap.bind(this)}>Send</button>
            </div>
        );
    }
}

export default Contact;