'use client';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn } from '../utils/motion';

const TermsConditions = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <div className='text-secondary-white font-normal'>
        <TypingText title="Terms & Conditions" textStyles="text-center" />
        <TitleText
            title={(
            <> Please read these Terms & Conditions
            </>
            )}
            textStyles="text-center"
        />
        <div className='w-full lg:w-3/4 mx-auto overflow-hidden rounded-[32px] p-8 rounded-[32px] border-[1px] border-[#6A6A6A] mt-[68px]'>
            <ol
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="list-decimal my-6 pl-4"
            >
                <li className='font-bold'>
                    Acceptance of Terms
                    <p className='font-normal text-sm my-2'>By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our website.</p>
                </li>
                <li className='font-bold'>
                    Age Restriction
                    <p className='font-normal text-sm my-2'>You must be at least 18 years old to subscribe to our newsletter. By subscribing, you represent that you are 18 years of age or older. If you are under 18 years old, you must not subscribe to our newsletter or provide us with any personal information.</p>
                </li>
                <li className='font-bold'>
                    Website Usage
                    <ol className='font-normal text-sm my-2 list-disc'>
                        <li className='mt-2'>Waiting List: Our website allows users to join a waiting list to gain access to our Metaverse platform. By joining the waiting list, you acknowledge and agree that joining the waiting list does not guarantee access to the Metaverse platform.</li>
                        <li className='mt-2'>Newsletter Subscription: Users have the option to subscribe to our newsletter to receive updates, news, and promotional content related to our Metaverse platform. By subscribing to our newsletter, you consent to receive these communications from us. You may unsubscribe from the newsletter at any time by following the instructions provided in the newsletter.</li>
                        <li className='mt-2'>Contacting Us: Our website provides a means to contact us for inquiries, feedback, or support. When contacting us, you agree to provide accurate and complete information. We reserve the right to respond or not respond to any inquiries at our discretion.</li>
                    </ol>
                </li>
                <li className='font-bold'>
                    Intellectual Property
                    <ol className='font-normal text-sm my-2 list-disc'>
                            <li className='mt-2'>Our website and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</li>
                            <li className='mt-2'>You may not modify, reproduce, distribute, create derivative works or adaptations of, publicly display or in any way exploit any of the content, trademarks, logos, or other intellectual property on our website without our prior written permission.</li>
                    </ol>
                </li>
                <li className='font-bold'>
                    Disclaimer of Warranties
                    <ol className='font-normal text-sm my-2 list-disc'>
                        <li className='mt-2'>Our website is provided on an "as is" and "as available" basis. We do not warrant that the website will be uninterrupted, error-free, or secure. We make no representations or warranties of any kind, express or implied, regarding the use or results of the website in terms of its correctness, accuracy, reliability, or otherwise.</li>
                        <li className='mt-2'>We disclaim all warranties, including, but not limited to, the warranties of non-infringement, merchantability, and fitness for a particular purpose.</li>
                    </ol>
                </li>
                <li className='font-bold'>
                    Limitation of Liability
                    <p className='font-normal text-sm my-2'>To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of our website.</p>
                </li>
                <li className='font-bold'>
                    Modifications to Terms
                    <p className='font-normal text-sm my-2'>We reserve the right to modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting the revised Terms on our website. By continuing to access or use our website after any modifications, you agree to be bound by the revised Terms. It is your responsibility to review these Terms periodically for any updates or changes.</p>
                </li>
                <li className='font-bold'>
                    Governing Law
                    <p className='font-normal text-sm my-2'>These Terms shall be governed by and construed in accordance with the laws of [your jurisdiction], without regard to its conflict of laws principles.</p>
                </li>
                <li className='font-bold'>
                    Contact Information
                    <p className='font-normal text-sm my-2'>If you have any questions or concerns regarding these Terms, please contact us with <a href="/contact">the contact form</a></p>
                </li>
            </ol>
            <p className='font-normal text-sm'>
                By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and any additional terms and conditions referenced herein or provided by us.
            </p>
        </div>
    </div>
  </section>
);

export default TermsConditions;