import emailjs from '@emailjs/browser';

export default async function sendVerificationRequest(params: { identifier:string, url:string,  token:string}) {
   const { identifier, url, token} = params;
    const { host } = new URL(url)
    const verificationLink = '${host}\n${url}'
    
    const templateParams = {
        identifier: identifier,
        token: token,
        verificationLink: verificationLink,
        host: host,
        company: process.env.COMPANY_NAME,
    };

    emailjs
        .send(
            process.env.SERVICE_ID!,
            process.env.TEMPLATE_COMMERCE_ID!,
            templateParams,
            process.env.USER_ID!
        )
        .then(
            (result) => {
                // route to waiting on verification
                console.log("YES?!?!")
               
            },
            (error) => {
                console.log("HAAAAAAAAAAAAA",error)
                return (<div className='co_alert'>Failed to send!,${error}</div>)
            });
 
}