"use client";
import { Component } from "react";


export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            companyName: '',
            phone: '',
            email: '',
            comments: '',
            hasCompany: null, // null, 'OUI', or 'NON'
            acceptTerms: false,
        };
    }


    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (e.target.type === 'checkbox') {
            // toggles acceptTerms true/false
            this.setState({ [name]: e.target.checked });
        } else {
            this.setState({ [name]: value });
        }
    };


    handleCompanyToggle = (value) => {
        // toggles acceptTerms Oui/Non
        this.setState({ hasCompany: value });
    };


    handleSubmit = (e) => {
        /* Form submission */
        e.preventDefault();
        
        // Send data to the server
        console.log('Form submitted:', this.state);

        alert('Form submitted!');
    };


    render() {
        const { fullName, companyName, phone, email, comments, hasCompany, acceptTerms } = this.state;

        return (
            <div className="relative md:w-[750px] md:h-[820px] z-1 mx-auto">
                <img
                    src="/form-bg.png"
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover -z-1"
                />
                <form onSubmit={this.handleSubmit} className="space-y-6 p-6 sm:p-8 lg:p-10 my-12">
                    <p className="text-[30px] font-black">Contactez-nous</p>
                    <p>Remplissez ce formulaire pour être recontacté par l’un de nos experts.</p>

                    {/* First Name & Last Name / Company Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Prénom et Nom<span className="text-red-500">*</span>
                            </label>
                            <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={fullName}
                            onChange={this.handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                            Nom de l'entreprise
                            </label>
                            <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            value={companyName}
                            onChange={this.handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Phone / Email Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Téléphone<span className="text-red-500">*</span>
                            </label>
                            <input
                            type="tel" // Use type="tel" for phone numbers
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={this.handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Adresse email<span className="text-red-500">*</span>
                            </label>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={this.handleChange}
                            placeholder="mon-adresse@email.com"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Comments */}
                    <div>
                        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                            Commentaires (optionnel)
                        </label>

                        <p className="text-xs text-gray-500 mb-2">Parlez-nous de votre projet !</p>

                        <textarea
                            name="comments"
                            id="comments"
                            value={comments}
                            onChange={this.handleChange}
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        ></textarea>
                    </div>

                    {/* Company Toggle */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Vous avez votre entreprise ?<span className="text-red-500">*</span>
                        </label>

                        <div className="flex rounded-md shadow-sm border border-gray-300 overflow-hidden">
                            <button
                                type="button"
                                onClick={() => this.handleCompanyToggle('OUI')}
                                className={`flex-1 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
                                    hasCompany === 'OUI' ? 'bg-[var(--purple)] text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                OUI
                            </button>

                            <button
                                type="button"
                                onClick={() => this.handleCompanyToggle('NON')}
                                className={`flex-1 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
                                    hasCompany === 'NON' ? 'bg-[var(--purple)] text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                NON
                            </button>
                        </div>
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-center">
                        <input
                            id="acceptTerms"
                            name="acceptTerms"
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={this.handleChange}
                            required
                            className="h-4 w-4 focus:ring-[var(--purple)] rounded"
                        />
                        <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-900">
                            J'accepte les conditions générales d'utilisation et la politique de confidentialité
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="mt-10 py-3 px-4 hover:shadow-xl rounded-full font-extrabold flex justify-center items-center text-sm lg:text-base transition-all duration-300 cursor-pointer text-white bg-[var(--purple)] border-2 border-[var(--purple)] w-full"
                        >
                            Être recontacté
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}