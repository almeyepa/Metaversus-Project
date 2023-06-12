'use client';

import { motion } from 'framer-motion';
import { Field, useFormik } from 'formik';
import * as Yup from "yup";

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

function WaitingForm() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email_address: "",
      region: "Africa",
      street_address: "",
      terms_conditions: "",
    },

    validationSchema: Yup.object({
      first_name: Yup.string()
        .required("Your first name is required"),
      last_name: Yup.string()
        .required("Your last name is required"),
      email_address: Yup.string()
        .email("Invalid email address")
        .required("Your email address is required"),
      street_address: Yup.string()
        .required("Your street address is required"),
      terms_conditions: Yup.array().required("Terms & Conditions must be checked"),

    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >

        <TypingText title="Waiting List" textStyles="text-center" />
        <TitleText
          title={(
            <> Save Your Place!
            </>
          )}
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-auto"
        >
          <div class="feedback-gradient"></div>
          <form onSubmit={formik.handleSubmit} className='w-full lg:w-3/4 mx-auto overflow-hidden rounded-[32px] p-8 rounded-[32px] border-[1px] border-[#6A6A6A]'>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className={`block font-normal sm:text-[14px] text-[14px] sm:leading-[30px] leading-[30px] text-white ${formik.touched.first_name && formik.errors.first_name ? 'text-red-500' : ''}`}
                  htmlFor="first_name"
                >
                  {formik.touched.first_name && formik.errors.first_name ? formik.errors.first_name : "First Name"}
                </label>
                <input className="mt-1 focus:ring-sky-700 focus:border-sky-700 block w-full sm:text-sm rounded-[32px] glassmorphism py-2 px-4 text-white placeholder:text-gray-400"
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Your first name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className={`block font-normal sm:text-[14px] text-[14px] sm:leading-[30px] leading-[30px] text-white ${formik.touched.last_name && formik.errors.last_name ? 'text-red-500' : ''}`}
                  htmlFor="last_name"
                >
                  {formik.touched.last_name && formik.errors.last_name ? formik.errors.last_name : "Last Name"}
                </label>
                <input className="mt-1 focus:ring-sky-700 focus:border-sky-700 block w-full sm:text-sm rounded-[32px] glassmorphism py-2 px-4 text-white placeholder:text-gray-400"
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder='Your last name'
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className={`block font-normal sm:text-[14px] text-[14px] sm:leading-[30px] leading-[30px] text-white ${formik.touched.email_address && formik.errors.email_address ? 'text-red-500' : ''}`}
                  htmlFor="email_address"
                >
                  {formik.touched.email_address && formik.errors.email_address ? formik.errors.email_address : "Email Address"}
                </label>
                <input className="mt-1 focus:ring-sky-700 focus:border-sky-700 block w-full sm:text-sm rounded-[32px] glassmorphism py-2 px-4 text-white placeholder:text-gray-400"
                  type="text"
                  name="email_address"
                  id="email_address"
                  placeholder='Your email address'
                  value={formik.values.email_address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block font-normal sm:text-[14px] text-[14px] sm:leading-[30px] leading-[30px] text-white"
                  htmlFor="region"
                >
                  Region
                </label>
                <select className="mt-1 block w-full py-2 px-4 border rounded-[32px] shadow-sm sm:text-sm glassmorphism text-white focus:ring-sky-700 focus:border-sky-700"
                  id="region"
                  name="region"
                  value={formik.values.region}
                  onChange={formik.handleChange}
                >
                  <option>Africa</option>
                  <option>Antarctica</option>
                  <option>Asia</option>
                  <option>Australia</option>
                  <option>Europe</option>
                  <option>North America</option>
                  <option>South America</option>
                </select>
              </div>

              <div className="col-span-6">
                <label className={`block font-normal sm:text-[14px] text-[14px] sm:leading-[30px] leading-[30px] text-white ${formik.touched.street_address && formik.errors.street_address ? 'text-red-500' : ''}`}
                  htmlFor="street_address"
                >
                  {formik.touched.street_address && formik.errors.street_address ? formik.errors.street_address : "Street Address"}
                </label>
                <input className="mt-1 focus:ring-sky-700 focus:border-sky-700 block w-full sm:text-sm rounded-[32px] glassmorphism py-2 px-4 text-white placeholder:text-gray-400"
                  type="text"
                  name="street_address"
                  id="street_address"
                  placeholder='Your address'
                  value={formik.values.street_address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className='col-span-6'>
                <label className={`block font-normal sm:text-[14px] text-[14px] sm:leading-[30px] leading-[30px] text-white ${formik.touched.terms_conditions && formik.errors.terms_conditions ? 'text-red-500' : ''}`}
                  htmlFor="terms_conditions"
                >
                  {formik.touched.terms_conditions && formik.errors.terms_conditions ? formik.errors.terms_conditions : "Terms & Conditions"}
                </label>
                <div className='flex items-center gap-2 mt-2'>                      
                  <input className="focus:ring-sky-700 focus:border-sky-700 rounded text-sky-700"
                    type="checkbox"
                    name="terms_conditions"
                    id="terms_conditions"
                    checked={Field.value}
                    value="Agreed to terms and conditions"
                    onChange={formik.handleChange}
                  />
                  <p className='text-white text-xs'>I have read and agreed to the <a target="_blank" className="terms" href="/terms_conditions">Terms and Conditions</a>.</p>
                </div>
              </div>
              
            </div>
            <button 
              type="submit" 
              className="text-base text-white text-center mt-8 duration-200 ease-in-out mx-auto flex items-center h-fit py-4 px-6 bg-sky-700 hover:bg-sky-900 rounded-[32px] gap-[12px]"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
};

export default WaitingForm;