"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Shield, Check, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

const STORAGE_KEY = "nexelix_cookie_consent";

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: false,
    updatedAt: new Date().toISOString(),
  });

  useEffect(() => {
    // Read initial consent state
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setIsOpen(true);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setPreferences(parsed);
      } catch (e) {
        setIsOpen(true);
      }
    }

    // Event listener for opening preferences from footer
    const handleOpenEvent = () => {
      setShowCustomize(true);
      setIsOpen(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenEvent);
    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpenEvent);
    };
  }, []);

  const savePreferences = (updated: CookiePreferences) => {
    const data = { ...updated, updatedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setPreferences(data);
    setIsOpen(false);
    setShowCustomize(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleRejectNonEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie Privacy Preferences"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl border border-purple-500/30 bg-surface/95 p-5 shadow-2xl backdrop-blur-xl transition-all sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
            <Cookie className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Cookie & Privacy Preferences
            </h3>
            <p className="text-xs text-foreground-muted">
              We use cookies to enhance your browsing experience, serve personalized analytics, and maintain platform security per ePrivacy & GDPR standards.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-lg p-1 text-foreground-muted hover:bg-surface hover:text-foreground"
          aria-label="Close banner"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {!showCustomize ? (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-xs text-foreground-muted">
            <Link
              href="/privacy"
              className="text-purple-400 hover:underline hover:text-purple-300"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="text-purple-400 hover:underline hover:text-purple-300"
            >
              Terms of Service
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCustomize(true)}
              className="text-xs"
            >
              <Settings className="mr-1.5 h-3.5 w-3.5" />
              Customize
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRejectNonEssential}
              className="text-xs"
            >
              Essential Only
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAcceptAll}
              className="text-xs"
            >
              Accept All
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-5 border-t border-border pt-4">
          <div className="space-y-3">
            {/* Essential */}
            <div className="flex items-center justify-between rounded-xl bg-surface/50 p-3">
              <div>
                <p className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-purple-400" />
                  Strictly Necessary Cookies (Always Active)
                </p>
                <p className="text-[11px] text-foreground-muted">
                  Required for website security, session management, and authentication.
                </p>
              </div>
              <span className="rounded bg-purple-500/20 px-2 py-0.5 text-[10px] font-medium text-purple-300">
                Required
              </span>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between rounded-xl bg-surface/50 p-3">
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Performance & Analytics Cookies
                </p>
                <p className="text-[11px] text-foreground-muted">
                  Allows us to analyze site visitor interactions and optimize user experience.
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="peer sr-only"
                />
                <div className="peer h-5 w-9 rounded-full bg-border transition-colors peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all"></div>
              </label>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between rounded-xl bg-surface/50 p-3">
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Marketing & Preference Cookies
                </p>
                <p className="text-[11px] text-foreground-muted">
                  Used for newsletter opt-ins and personalized communications.
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="peer sr-only"
                />
                <div className="peer h-5 w-9 rounded-full bg-border transition-colors peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all"></div>
              </label>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCustomize(false)}
              className="text-xs"
            >
              Back
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleSaveCustom}
              className="text-xs"
            >
              <Check className="mr-1.5 h-3.5 w-3.5" />
              Save Preferences
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
