import React, { useState } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        service: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleClose=()=>{
        
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setShowSuccessMessage(false)
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        // EmailJS service details
        const serviceID = 'service_278pb86';
        const templateID = 'template_1l9o8yv';
        const userID = 'rZiDxB8dCb1tOACGq';
        const templateParams = {
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
        };
        // Send the email
        emailjs.send(serviceID, templateID,templateParams, userID)
          .then(() => {
            setFormData({
                email: '',
                phone: '',
                service: '',
              });
           setShowSuccessMessage(true)
           setIsSubmitting(false);
          })
          .catch((error) => {
            console.error("Email sending error: ", error);
            setIsSubmitting(false);
            alert("There was an error. Please try again later.");
          });
      };

      
  return (
    <div id='contact' style={{position:"relative"}}>

        <h2 className='display-18 display-md-16 display-lg-14 font-weight-700'><span style={{color:"red",marginBottom:"-20px"}}>Let's</span> Collaborate</h2>
    <small id="emailHelp" className="form-text text-muted w-100" style={{marginTop:"-20px"}}>We'll never share your personal information with someone else.</small>

<div className='w-100 d-flex justify-content-center '>
        <form className='contactform' onSubmit={handleSubmit}>
  <div className="form-group">
    {/* <label for="exampleInputEmail1">Email address</label> */}
    <input type="email" name="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={formData.email}
              onChange={handleChange}  required/>
  </div>
  <div className="form-group my-1">
    {/* <label for="exampleInputEmail1">Mobile Number</label> */}
    <input type="text"  name="phone" className="form-control mobile-number" id="exampleInputEmail1" aria-describedby="emailHelp" maxlength="10" placeholder="Enter Number" value={formData.phone}
              onChange={handleChange}/>
  </div>
  <div className="form-group my-1">
    {/* <label for="exampleInputEmail1">Mobile Number</label> */}
    <input type="text" name="service" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Services You Want"  value={formData.service}
              onChange={handleChange}/>
  </div>
  {showSuccessMessage && (
        <div className='d-flex justify-content-center align-items-center' style={{position: 'relative', top: '0px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#d4edda', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}>
          <span style={{textAlign:"center",height:"100%"}}>Thank you for contacting us, we will reach out to you shortly.
          <button 
            onClick={handleClose} 
            style={{padding:"7px",marginLeft: '10px', border: 'none', color:"red", background: 'none', cursor: 'pointer'}}
          >
            X
          </button>
          </span>
        </div>
      )}
  <button type="submit" className="btn btn-primary" style={{marginTop:"20px"}} disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Reach Out"}</button>
</form>

</div>


<div>
<p className='mt-3'>Or Contact Us To</p>
<div className='d-flex justify-content-center'>
<a href="mailto:bizgigssolution@gmail.com">

<svg xmlns="http://www.w3.org/2000/svg" style={{color:"red"}} width="32" height="32" fill="currentColor" class="bi bi-envelope mx-4" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></a>
<a href="https://wa.me/7505866498" target="_blank" style={{color:"green"}}>

<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-whatsapp mx-4" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
    </a>
    <a href="https://www.instagram.com/bizgigs_official?igsh=MTZ1anB5N21nMDRtYg==" target="_blank"  style={{color:"#e8733c"}}>

    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-instagram mx-4" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
</a>
</div>
</div>
      <svg  width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,600 L 0,150 C 106.44976076555025,125.68421052631578 212.8995215311005,101.36842105263158 315,114 C 417.1004784688995,126.63157894736842 514.8516746411484,176.21052631578948 601,174 C 687.1483253588516,171.78947368421052 761.6937799043062,117.7894736842105 845,109 C 928.3062200956938,100.2105263157895 1020.3732057416269,136.6315789473684 1121,151 C 1221.6267942583731,165.3684210526316 1330.8133971291866,157.68421052631578 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,600 L 0,350 C 89.58851674641147,310.47846889952154 179.17703349282294,270.95693779904303 285,289 C 390.82296650717706,307.04306220095697 512.8803827751196,382.65071770334924 604,418 C 695.1196172248804,453.34928229665076 755.3014354066985,448.4401913875598 850,422 C 944.6985645933015,395.5598086124402 1073.9138755980862,347.58851674641147 1178,332 C 1282.0861244019138,316.41148325358853 1361.043062200957,333.2057416267943 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
      <div className='footer' style={{ position: "absolute", bottom: 0, width: "100%", background:"rgba(0, 0, 0, 0.1)" }}>
        <p style={{ margin: 0, textAlign: "center" }}>Copyright © BizGigs</p>
      </div>
    </div>
  )
}
