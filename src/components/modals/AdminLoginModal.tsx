'use client';

import React, { useState, useEffect } from 'react';
import { X, Key, Mail, Lock, ArrowRight, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { createClient } from '@/lib/supabase/client';
import { getErrorMessage } from '@/lib/errors';

interface AdminLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
    const [isVisible, setIsVisible] = useState(isOpen);

    if (isOpen !== prevIsOpen) {
        setPrevIsOpen(isOpen);
        if (isOpen) {
            setIsVisible(true);
        } else {
            setError(false);
            setShowPassword(false);
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(false);

        try {
            const supabase = createClient();
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) {
                const message = getErrorMessage(signInError);
                console.error('Error al iniciar sesión:', message);
                setError(true);
                setIsLoading(false);
                return;
            }

            onClose();
            router.push('/admin/dashboard');
            router.refresh();
        } catch (err: unknown) {
            const message = getErrorMessage(err);
            console.error('Error inesperado al iniciar sesión:', message);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen && !isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div
                className={`relative w-full max-w-md bg-[#1A1311] border border-white/5 rounded-2xl shadow-2xl transition-all duration-300 transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
                    }`}
                style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 text-white/40 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="p-8 pt-12 flex flex-col items-center">
                    {/* Key Icon Circle */}
                    <div className="relative mb-8">
                        <div className={`absolute inset-0 rounded-full blur-xl animate-pulse ${error ? 'bg-red-500/20' : 'bg-sienna/20'}`} />
                        <div className={`relative w-20 h-20 rounded-full border flex items-center justify-center bg-gradient-to-br transition-colors duration-500 ${error ? 'border-red-500/30 from-red-500/10' : 'border-sienna/30 from-sienna/10'} to-transparent`}>
                            <Key className={error ? 'text-red-500' : 'text-sienna'} size={32} />
                        </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif text-white uppercase tracking-wider mb-2">
                            Acceso Administrador
                        </h2>
                        <p className="text-white/40 text-sm font-light">
                            Gestión interna de {siteConfig.brand.name}
                        </p>
                    </div>

                    {/* Form */}
                    <form className="w-full space-y-6" onSubmit={handleLogin}>
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-sienna font-bold ml-1">
                                Correo Electrónico
                            </label>
                            <div className="relative group">
                                <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors ${error ? 'group-focus-within:text-red-500' : 'group-focus-within:text-sienna'}`}>
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="correo@ejemplo.com"
                                    autoComplete="email"
                                    required
                                    className={`w-full bg-black/40 border rounded-lg py-4 pl-12 pr-4 text-white font-serif placeholder:text-white/20 focus:outline-none focus:bg-black/60 transition-all ${error ? 'border-red-500/50' : 'border-white/10 focus:border-sienna/50'}`}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-sienna font-bold">
                                    Contraseña
                                </label>
                                <button type="button" className="text-[10px] uppercase tracking-[0.05em] text-white/30 hover:text-sienna transition-colors font-medium">
                                    ¿Olvidó su contraseña?
                                </button>
                            </div>
                            <div className="relative group">
                                <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors ${error ? 'group-focus-within:text-red-500' : 'group-focus-within:text-sienna'}`}>
                                    <Lock size={18} />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                    required
                                    className={`w-full bg-black/40 border rounded-lg py-4 pl-12 pr-12 text-white font-serif placeholder:text-white/20 focus:outline-none focus:bg-black/60 transition-all ${error ? 'border-red-500/50' : 'border-white/10 focus:border-sienna/50'}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-sienna focus:outline-none focus-visible:text-sienna transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="text-red-500 text-[10px] uppercase tracking-wider text-center animate-pulse">
                                Credenciales incorrectas. Intente nuevamente.
                            </div>
                        )}

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-sienna hover:bg-[#b0360d] text-white rounded-lg py-5 px-4 font-serif text-lg tracking-wide flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-sienna/20 group uppercase ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
                        >
                            {isLoading ? 'Verificando...' : (
                                <>
                                    Iniciar Sesión
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer Security */}
                    <div className="mt-12 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-white/30 text-[10px] tracking-[0.15em] uppercase font-medium">
                            <ShieldCheck size={14} />
                            Conexión cifrada de alta seguridad
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-[1px] bg-white/10 mb-4" />
                            <div className="text-white/20 text-[11px] tracking-[0.4em] uppercase">
                                {siteConfig.brand.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginModal;
