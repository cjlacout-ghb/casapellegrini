import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Contacto',
};

export default function ContactoPage() {
    return (
        <div className="min-h-screen bg-parchment py-24 px-6 lg:px-24 text-charcoal">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">

                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-serif mb-8 text-charcoal">Contacto</h1>
                        <p className="font-light text-xl max-w-md leading-relaxed italic opacity-80">
                            Estamos a su disposición para consultas sobre piezas específicas, tasaciones o visitas a nuestra galería
                        </p>
                    </div>

                    <div className="space-y-12 border-l border-taupe/30 pl-8">
                        <div>
                            <h3 className="text-[10px] font-bold uppercase tracking-museum text-sienna mb-4">Visítenos</h3>
                            <p className="font-serif text-2xl text-charcoal">{siteConfig.contact.address.street}</p>
                            <p className="font-light text-charcoal/70">{siteConfig.contact.address.neighborhood}, {siteConfig.contact.address.city}, {siteConfig.contact.address.country}</p>
                        </div>

                        <div>
                            <h3 className="text-[10px] font-bold uppercase tracking-museum text-sienna mb-4">Horarios</h3>
                            <div className="space-y-2 font-light text-charcoal/70 uppercase text-[11px] tracking-widest">
                                <p>{siteConfig.contact.hours.weekdays}</p>
                                <p>{siteConfig.contact.hours.saturday}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[10px] font-bold uppercase tracking-museum text-sienna mb-4">Contacto Directo</h3>
                            <p className="font-light text-charcoal/70 mb-2">{siteConfig.contact.phone}</p>
                            <a href={`mailto:${siteConfig.contact.email}`} className="text-sienna border-b border-sienna/30 hover:border-sienna transition-all pb-1 text-sm">
                                {siteConfig.contact.email}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-10 md:p-16 border-museum shadow-museum rounded-lg">
                    <h2 className="font-serif text-3xl mb-10 text-charcoal">Envíenos un mensaje</h2>
                    <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-8">
                        <div>
                            <label htmlFor="name" className="block text-[10px] uppercase tracking-museum mb-3 font-bold text-charcoal/40">Nombre Completo</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border-b border-taupe/30 py-3 outline-none focus:border-sienna transition-colors bg-transparent text-sm placeholder:text-taupe italic"
                                placeholder="Juan Pérez"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-[10px] uppercase tracking-museum mb-3 font-bold text-charcoal/40">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border-b border-taupe/30 py-3 outline-none focus:border-sienna transition-colors bg-transparent text-sm placeholder:text-taupe italic"
                                placeholder="juan@ejemplo.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-[10px] uppercase tracking-museum mb-3 font-bold text-charcoal/40">Teléfono (Opcional)</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full border-b border-taupe/30 py-3 outline-none focus:border-sienna transition-colors bg-transparent text-sm placeholder:text-taupe italic"
                                placeholder="+54 11 ..."
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[10px] uppercase tracking-museum mb-3 font-bold text-charcoal/40">Mensaje</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full border-b border-taupe/30 py-3 outline-none focus:border-sienna transition-colors bg-transparent resize-none text-sm placeholder:text-taupe italic"
                                placeholder="Escriba su consulta aquí..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-charcoal text-parchment py-5 uppercase tracking-museum text-[11px] font-bold hover:bg-sienna transition-all duration-500 shadow-xl rounded-lg"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>

            </div>

            {/* Map Placeholder */}
            <div className="max-w-7xl mx-auto mt-32 h-96 bg-sand relative grayscale hover:grayscale-0 transition-all duration-1000 border-museum rounded-lg overflow-hidden shadow-museum">
                <iframe
                    src={siteConfig.contact.address.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="opacity-60"
                ></iframe>
            </div>
        </div>
    );
}
