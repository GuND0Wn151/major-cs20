const mailOptions = (senderName, data) => {
   console.log(senderName)
   return {
      from: "kmaheshguptha15@gmail.com", // sender address
      to: senderName, // list of receivers
      subject: "Subject of your email", // Subject line
      html: `<div className="px-3 py-4">
         <h3 className="px-9 text-cyan-600 text-2xl">
            You Have got the Details!!
         </h3>
         <div className="h-auto  w-96 py-4">
            <img
               src="https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
               alt="thank You"
            />
         </div>
         <h1 className="text-xl px-32 underline py-3">What's Next</h1>
         <div className="flex w-96 justify-around">
            <div>
               <h2 className="text-lg text-green-500 px-2">Thank ${senderName}</h2>
               <p className="overflow-hidden w-3/4 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                  dolores fugiat vitae.
               </p>
            </div>
            <div className="h-1/4 w-full">
               <img
                  src="https://images.unsplash.com/photo-1521685468847-de0a1a3c41a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="thanks"
               />
            </div>
         </div>
         <div className="w-96 my-3 h-10 bg-cyan-100">
            <h3>
            Here is the Encrypted Text
            </h3>
            <p>
            ${data}
            </p>
            <a href="localhost:3000/decrypt" className=" italic justify-center flex">
            
            Decrypt the Message>>
            </a>
         </div>
         
      </div>`,
   }; // plain text body
};
module.exports.mailOptions = mailOptions;
