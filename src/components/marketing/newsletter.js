// import React, {useState} from "react"
// import { useTranslation } from 'gatsby-plugin-react-i18next';
// import addToMailchimp from 'gatsby-plugin-mailchimp'

// const NewsletterForm = () => {
//     const { t } = useTranslation(["marketing"])
//     const [resultMessage, setResultMessage] = useState(null);
//     const [email, setEmail] = useState("");
//     const [success, setSuccess] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await addToMailchimp(email);
        
//         response.result === "success" ? setResultMessage(t('newsletter_subscribe_success')) : setResultMessage(t('newsletter_subscribe_error'));
//         response.result === "success" ? setSuccess(true) : setSuccess(false);
//         setEmail("")
//         setTimeout(() => setResultMessage(null), 3250)
//       }

//     return (
//         <form 
//             onSubmit={handleSubmit} 
//             id="mc-embedded-subscribe-form">
//             <div class="flex items-stretch my-6">
//                 <input 
//                     class="bg-gray-100 dark:bg-gray-700 rounded-lg rounded-r-none text-base leading-none dark:text-gray-200 text-gray-900 p-4 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" 
//                     type="email" placeholder="Your Email" 
//                     value={email} name="EMAIL" id="mce-EMAIL" onChange={(e) => setEmail(e.target.value)}/>
//                 <button 
//                 type="submit"
//                 name="subscribe" id="mc-embedded-subscribe"
//                 class="w-32 rounded-l-none hover:bg-sky-600 bg-sky-700 rounded-lg text-base font-medium leading-none text-white p-4 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700">
//                     subscribe
//                 </button>
//             </div>
//             { resultMessage && <span className={`font-bold ${ success ? "text-green-500" : "text-red-500"}`}>{resultMessage}</span> }
//             <div style={{position: "absolute", left: "-5000px;"}} aria-hidden="true">
//                 <input type="text" name="b_a0cdb3bfb2bbe7a3194439f93_2857862e3d" tabindex="-1" value=""/>
//             </div>
//         </form>
//     )
// }

const NewsletterBlock = () => {
    const { t } = useTranslation("blog")

    return (
        <div className="mt-8">
            <h4 className="text-2xl font-semibold dark:text-gray-200">Newsletter</h4>
            <p className="dark:text-gray-300" style={{fontSize: "1rem", lineHeight: "1.5rem"}}>Lorem Ipsum</p>
            {/* <NewsletterForm className=""/> */}
        </div>
    )
}


export default NewsletterBlock;