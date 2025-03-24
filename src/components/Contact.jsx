import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .sendForm(
        'service_v20kzzj', 
        'template_zs8vrsh',
        e.target,
        '7wCOry4bMRF_mFs78' 
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          setFormData({
            email: '',
            message: '',
          });
        }
      ).catch(
        (error) => {
          setError(error);
          setStatus('Failed to send message, please try again.');
        }
      );
  };

  return (
    <section id='contact' className='max-w-4xl py-16 px-4 mx-6 md:mx-auto rounded-2xl border border-gray-100 bg-white shadow-md'>
      <div className='mx-auto text-center'>
      <h2 className='text-3xl font-semibold text-violet-500'>Contact Me</h2>
        <p className='mt-4 text-lg text-gray-700'>Feel free to reach out if you want to collaborate or have any questions!</p>
        <form className='mt-8' onSubmit={handleSubmit}>
          <div>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='px-4 py-2 rounded-lg border border-gray-300 w-2/3 mb-4'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
         
         <div>
            <textarea
              name='message'
              placeholder='Your Message'
              className='px-4 py-2 rounded-lg border border-gray-300 w-2/3 mb-4 min-h-32'
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <button type='submit' className='bg-violet-500 hover:bg-violet-600 hover:shadow-lg text-white py-2 px-6 rounded-lg cursor-pointer'>Send Message</button>
        </form>
        {status && <div className={`mt-4 ${error ? 'text-red-500' : 'text-green-500'}`}>{status}</div>}
      </div>
    </section>
  );
};

export default Contact;
