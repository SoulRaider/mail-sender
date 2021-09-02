import gmailService from "../src/services/gmailService";

test("send email with response message", () => {
    const mailService = new gmailService("samnssoo@gmail.com", "C@mpu73r");
    mailService.sendMail("samnssoo@gmail.com", "Test Title", "Test Content")
    .then((message : any) => {
        expect(message).not.toBeNull();
    });
});