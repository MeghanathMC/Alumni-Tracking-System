const nodemailer=require('nodemailer');

const sendmail=async(username,gmail,subject,text)=> {
    var transport = nodemailer.createTransport({
        service:'gmail',
        port: 465,
        auth: {
          user: "alumniconnectweb@gmail.com",
          pass: "kzjc fpga yfeh sdww"
        }
      });
    
      const mailOptions={
        from:"alumniconnectweb@gmail.co",
        to:`${gmail}`,
        subject:`${subject}`,
        text:`${text}`
      };
    
      transport.sendMail(mailOptions,function(error,info){
        if(error){
            console.log('Error:',error);
        }else{
            console.log('Email sent:',info.response);
        }
      });
    
}

module.exports= {sendmail};