import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader";

const Profile = ({user}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formDate, setFormDate] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormDate({ name:user.name, email:user.email, photo:user.photo, gender:user.gender, bloodType:user.bloodType });
  }, [user]);



  const handleInputChange = e => {
    setFormDate({ ...formDate, [e.target.name]: e.target.value });
  };


  const handleFileInputChange = async event => {
    const file = event.target.files[0];

    const date = await uploadImageToCloudinary(file);

    setSelectedFile(date.url);
    setFormDate({ ...formDate, photo: date.url });
  };

  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(formDate)
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/users/profile/me');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };
  return (
    <div className='mt-10'>
      <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="text"
            placeholder='Full Name'
            name='name'
            value={formDate.name}
            onChange={handleInputChange}
            className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
               text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
            required
          />
        </div>

        <div className="mb-5">
          <input
            type="email"
            placeholder='Enter your email'
            name='email'
            value={formDate.email}
            onChange={handleInputChange}
            className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
               text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
            aria-readonly
            readOnly
          />
        </div>

        <div className="mb-5">
          <input
            type="password"
            placeholder='Password'
            name='password'
            value={formDate.password}
            onChange={handleInputChange}
            className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
               text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder='Blood Type'
            name='bloodType'
            value={formDate.bloodType}
            onChange={handleInputChange}
            className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
               text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
            required
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
            Gender:
            <select
              name='gender'
              value={formDate.gender}
              onChange={handleInputChange}
              className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {FormData.photo && (<figure className='w-[60px] h-[60px] rounded-full border border-solid
                 border-primaryColor flex items-center justify-center'>
            <img src={FormData.photo} alt="" className='w-full rounded-full' />
          </figure>)}

          <div className='relative w-[130px] h-[50px]'>
            <input
              type="file"
              name='photo'
              id='customFile'
              onChange={handleFileInputChange}
              accept='.jpg .png'
              className='w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer'
            />
            <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem]
                  text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
              {selectedFile ? selectedFile.name : "Upload Photo"}
            </label>
          </div>
        </div>


        <div className='mt-7'>
          <button
            disabled={loading && true}
            type='submit'
            className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg p-4 py-3'
          >

            {loading ? (
              < HashLoader size={25} color='#ffffff' />
            ) : (
              "Update"
            )}

          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile