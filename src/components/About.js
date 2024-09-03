import React from 'react'

const About = () => {
  return (
    <>
     <div className='mx-3 my-3'>
        <h2>Welcome to Email validator</h2>
      <p>We Simply Take our client mail and verify whether it is valid or not.
        Our Goal is to ensure that an email address is correctly formatted and that it belongs to a function email account.
      </p>
      <h4 className='mx-2'> We check client mail on the basis of following</h4>
      <article className='mx-3 my-3'>

      <b>Syntax Check:</b><br />

Format Validation: The email validator first checks if the email address adheres to the standard email format. This includes ensuring that it follows the pattern local-part@domain, where the local part is the username and the domain is the email provider. It checks for invalid characters and proper placement of the "@" symbol.
Domain Format: The domain part must be a valid domain name, and it should include a proper top-level domain (TLD) like .com, .org, or .net.
<br/><b>Domain Check:</b><br/>

DNS Lookup: The validator performs a Domain Name System (DNS) lookup to ensure that the domain associated with the email address exists. This involves checking if there are valid MX (Mail Exchange) records for the domain, indicating that it can accept email.
<br/><b>SMTP Verification:</b><br />

Mail Server Check: The validator attempts to communicate with the mail server using the Simple Mail Transfer Protocol (SMTP). It simulates sending an email to check if the server accepts emails for the specified address. This helps confirm that the email address is active and not just a placeholder.
Mailbox Verification:

<br/><b>Final Verification:</b> The validator may check if the specific mailbox exists and is active. Some validators use techniques that can involve interacting with the mail server to determine whether the email address is valid without actually sending an email.
      </article>

      <h5>For any complaints you can reach by below details</h5>
      <ul className='mydetails'>
        <li>email:<u><a href="mailto:khursheedabbasprofession14@gmail.com">user@Email</a></u></li><br/>
        <li>github:<u><a href="https://github.com/Khursheed-Abbas-Mirza">user@github</a></u></li><br/>
      </ul>
      <h4><mark>We will Never ask any 'OTP' or any Kind of Credntials for Validations & We will never share data to third parties beware of fraudsters</mark></h4>
    </div>
    </>
   
  )
}

export default About
