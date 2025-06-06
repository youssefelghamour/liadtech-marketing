import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";


export default function Footer() {
    return (
        <footer id="footer" className="bg-[var(--purple-light-2)] px-15 md:px-18 lg:px-20 pt-16 lg:pt-24 overflow-hidden mt-24 ">
            <div className="flex flex-col items-center lg:items-start lg:flex-row text-center lg:text-left gap-y-16 lg:justify-between pb-16 lg:pb-24">
                <div>
                    <h4 className="font-black text-[var(--purple)] text-3xl">LIADTECH</h4>
                </div>
                
                <div>
                    <h3 className="text-2xl text-black font-extrabold mb-8">Solutions LIADTECH</h3>

                    <ul className="text-gray-700">
                        <li className="mb-4">
                            <a href="/creation-site-internet/" className="text-black font-semibold">Site web</a>
                        </li>
                        <li className="mb-4">
                            <a href="/referencement-site-internet/" className="text-black font-semibold">Référencement naturel</a>
                        </li>
                        <li className="mb-4">
                            <a href="/agence-seo-local/" className="text-black font-semibold">Fiche d'établissement Google</a>
                        </li>
                        <li className="mb-4">
                            <a href="/agence-facebook-ads/" className="text-black font-semibold">Publicité Réseaux sociaux</a>
                        </li>
                        <li className="mb-4">
                            <a href="/agence-google-ads/" className="text-black font-semibold">Publicité sur Google</a>
                        </li>
                        <li className="mb-4">
                            <a href="/agence-graphisme/" className="text-black font-semibold">Logo et supports imprimés</a>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-2xl text-black font-extrabold mb-8">À propos</h3>

                    <ul className="text-gray-700">
                        <li className="mb-4">
                            <a href="/foire-aux-questions/" className="text-black font-semibold">FAQ</a>
                        </li>
                        <li className="mb-4">
                            <a href="/a-propos-liadtech/" className="text-black font-semibold">LIADTECH</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://jobs.liadtech.agency/" target="_blank" className="text-black font-semibold">Recrutement</a>
                        </li>
                        <li className="mb-4">
                            <a href="/partenaire/" className="text-black font-semibold">Programme partenaire</a>
                        </li>
                        <li className="mb-4">
                            <a href="/parrainage/" className="text-black font-semibold">Parrainer un pro</a>
                        </li>
                        <li className="mb-4">
                            <a href="/standards-publicitaires/" className="text-black font-semibold">Nos standards publicitaires</a>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-2xl text-black font-extrabold mb-8">En savoir plus</h3>
                    <ul className="text-gray-700">
                        <li className="mb-4">
                            <a href="/temoignages/" className="text-black font-semibold">Témoignages</a>
                        </li>
                        <li className="mb-4">
                            <a href="/blog/" className="text-black font-semibold">Blog</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl text-black font-extrabold mb-8">Nous suivre</h3>
                    <div className="flex flex-row gap-3 text-xl">
                        <TiSocialLinkedin />
                        <FaInstagram />
                        <TiSocialFacebook />
                        <RiTwitterXFill />
                    </div>
                </div>

            </div>

            <div className="container text-center lg:text-left flex flex-col lg:flex-row gap-y-6 justify-between font-semibold text-sm text-purple-brand pb-2 lg:pb-3">
                <div>©2025 LIADTECH Agency — Tous droits réservés</div>
                <div className="flex flex-col lg:flex-row text-center lg:text-left gap-x-6 gap-y-1">
                    <div>
                        <a href="/" className="nuxt-link-active">Accueil</a>
                    </div>
                    <div>
                        <a href="/cgv/">Conditions Générales de Vente</a>
                    </div>
                    <div>
                        <a href="/mentions-legales/">Mentions légales</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}