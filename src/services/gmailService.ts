import * as nodemailer from 'nodemailer'; 
 
export default class GMailService { 
    private _fromEmail : string;
    private _password : string;
    constructor(fromEmail: string, password : string) {
        this._fromEmail = fromEmail;
        this._password = password;
    }
    async sendMail(toEmail: string, title: string, content: string) { 
        let testAccount = await nodemailer.createTestAccount();
        // let transporter = nodemailer.createTransport(
        //     {
        //         host: "smtp.ethereal.email",
        //         port: 587,
        //         secure: false, // true for 465, false for other ports
        //         auth: {
        //             user: testAccount.user, // generated ethereal user
        //             pass: testAccount.pass, // generated ethereal password
        //         },
        //     }
        // );
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: this._fromEmail,
                pass: this._password
            }
        })
        let options = { 
            from: this._fromEmail, 
            to: toEmail, 
            subject: title, 
            text: content 
        } 

        transporter.sendMail(options, (error, info) => { 
            if (error) { 
                return console.log(`error: ${error}`); 
            } else {
                return `Message Sent ${info.response}`;
            }
        });
    } 
} 