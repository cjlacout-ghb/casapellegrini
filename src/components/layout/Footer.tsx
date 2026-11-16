'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdminLoginModal from '@/components/modals/AdminLoginModal';
import { siteConfig } from '@/config/site';

export default function Footer() {
    const [isAdminOpen, setIsAdminOpen] = useState(false);

    return (
        <footer className="bg-charcoal text-parchment py-24 px-6 md:px-12 border-t border-taupe/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
                <div className="space-y-8">
                    <h3 className="font-serif text-3xl tracking-widest uppercase text-sienna font-bold">{siteConfig.brand.name}</h3>
                    <p className="font-light text-sm opacity-80 leading-relaxed max-w-xs mx-auto md:mx-0 italic">
                        {siteConfig.brand.mission}
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <div className="h-px w-8 bg-sienna"></div>
                    </div>
                </div>

                <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-museum text-sienna mb-8">Navegación</h4>
                    <ul className="space-y-4 text-xs font-light tracking-widest uppercase opacity-80">
                        <li><Link href="/colecciones" className="hover:text-sienna transition-colors">Catálogo Curado</Link></li>
                        <li><Link href="/colecciones?category=muebles" className="hover:text-sienna transition-colors">Muebles de Época</Link></li>
                        <li><Link href="/colecciones?category=arte" className="hover:text-sienna transition-colors">Galería de Arte</Link></li>
                        <li><Link href="/contacto" className="hover:text-sienna transition-colors">Solicitar Cita</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-museum text-sienna mb-8">Contacto & Ubicación</h4>
                    <div className="space-y-4 text-xs font-light tracking-widest uppercase opacity-80 text-parchment">
                        <p>{siteConfig.contact.address.street}, {siteConfig.contact.address.neighborhood}</p>
                        <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.country}</p>
                        <p className="pt-4 font-medium">{siteConfig.contact.phone}</p>
                        <a href={`mailto:${siteConfig.contact.email}`} className="block text-sienna pt-2 hover:text-white transition-colors">
                            {siteConfig.contact.email}
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-parchment/10 mt-24 pt-10 text-center text-[9px] opacity-40 uppercase tracking-[0.3em] text-parchment">
                &copy; {new Date().getFullYear()} {siteConfig.brand.name}
                <span
                    onClick={() => setIsAdminOpen(true)}
                    className="mx-1 cursor-default hover:text-sienna transition-colors duration-500 opacity-50 hover:opacity-100"
                >
                    &bull;
                </span>
                {siteConfig.brand.legalSubtitle} &bull; Todos los derechos reservados
            </div>

            <AdminLoginModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
        </footer>
    );
}
