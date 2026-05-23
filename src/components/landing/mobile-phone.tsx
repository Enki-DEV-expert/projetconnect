export function MobilePhone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 rounded-[44px] bg-ink p-[6px]"
        style={{
          boxShadow:
            "0 0 0 1.5px rgba(255,255,255,0.05) inset, 0 25px 50px -20px rgba(8,20,46,0.45)",
        }}
      >
        <div className="w-full h-full rounded-[38px] bg-white overflow-hidden flex flex-col relative">
          {/* Status bar */}
          <div className="flex-shrink-0 relative h-[34px] flex items-center justify-between px-6 text-[11px] font-semibold text-ink z-30">
            <span className="tracking-tight">9:41</span>
            {/* Dynamic island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-[78px] h-[22px] rounded-full bg-ink" />
            {/* Status icons */}
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 18 10" className="w-[15px] h-[9px]" fill="currentColor">
                <rect x="0" y="6" width="3" height="4" rx="0.5" />
                <rect x="4.5" y="4" width="3" height="6" rx="0.5" />
                <rect x="9" y="2" width="3" height="8" rx="0.5" />
                <rect x="13.5" y="0" width="3" height="10" rx="0.5" />
              </svg>
              <svg viewBox="0 0 16 12" className="w-[14px] h-[10px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M2 5 A10 10 0 0 1 14 5" />
                <path d="M4 7.5 A6 6 0 0 1 12 7.5" />
                <circle cx="8" cy="10" r="0.8" fill="currentColor" stroke="none" />
              </svg>
              <svg viewBox="0 0 26 12" className="w-[22px] h-[10px]">
                <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.45" />
                <rect x="23.5" y="3.5" width="1.5" height="5" rx="0.5" fill="currentColor" fillOpacity="0.45" />
                <rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-h-0 overflow-hidden">{children}</div>

          {/* Home indicator */}
          <div className="flex-shrink-0 h-5 flex items-end justify-center pb-1 bg-white">
            <div className="w-[110px] h-[3px] rounded-full bg-ink/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
