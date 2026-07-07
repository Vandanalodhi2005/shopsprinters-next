"use client";
import React, { useEffect } from 'react';
import { useSetupSettings } from '@/contexts/SetupSettingsContext';
import SetupHeader from './SetupHeader';

export default function InstallationFailedPage() {
  const { settings, loading } = useSetupSettings();

  useEffect(() => {
    if (typeof window !== 'undefined' && !loading && !settings.allowInstallationFailed) {
      window.location.href = '/easy-setup-guide/';
    }
  }, [loading, settings.allowInstallationFailed]);

  if (loading || !settings.allowInstallationFailed) return null;

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <SetupHeader showLogo={settings.showLogo} showHeader={settings.showHeader} />
      <div
        className="md:min-h-[91vh] min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/hero_background_image.webp')" }}
      >
        <div className="w-full max-w-3xl rounded-[32px] bg-white p-8 md:p-14 shadow-[0_24px_80px_rgba(15,23,42,0.16)]">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-yellow-400 shadow-xl">
            <span className="text-4xl font-bold text-white">!</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4 text-center">Printer Driver Installation Error</h1>
          <p className="text-red-600 font-semibold text-base md:text-lg mb-6 leading-relaxed text-center">
            We encountered an issue completing the printer driver installation due to error 1603.
          </p>
          <div className="text-slate-950 font-semibold text-xl md:text-2xl mb-4 text-center">Contact HP Support to Resolve this Issue</div>
          <div className="text-slate-700 text-base md:text-lg mb-10 text-center">
            Toll-Free (USA/CA): <span className="font-bold">+1 (855) 618-4642</span>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-xl transition hover:bg-blue-700"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).jivo_api?.open) {
                  (window as any).jivo_api.open();
                } else {
                  alert('Chat support is not available yet.');
                }
              }}
            >
              Chat Now »
            </button>
          </div>

          <p className="text-red-600 mt-8 text-sm md:text-base leading-relaxed text-center">
            Note: For best results, avoid repeatedly attempting the installation without proper guidance, as it may not resolve the issue. Our experts are here to help you complete the setup correctly.
          </p>
        </div>
      </div>
    </div>
  );
}
